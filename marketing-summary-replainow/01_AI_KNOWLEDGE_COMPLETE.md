# 🧠 AI Knowledge - Complete Feature Documentation

> **Automatic Shopify Data Import & AI Processing System**

---

## 📋 Overview

AI Knowledge is the system that automatically imports, processes, and maintains all Shopify store data. It handles initial data import, continuous synchronization via webhooks, AI processing (chunking + embeddings), and provides dashboard visibility for merchants.

### System Components

1. **Import System** - Fetches data from Shopify on installation
2. **Webhook System** - Receives real-time updates from Shopify
3. **AI Processing** - Chunks content and generates embeddings
4. **Dashboard** - Shows merchants what data has been imported
5. **Background Jobs** - Processes all operations asynchronously

---

## 📊 Data Import Coverage

### 1. 🛍️ Products

**Imported Fields:**
- `shopify_product_id` - Shopify numeric product ID
- `title` - Product name
- `handle` - URL slug (e.g. "summer-dress-blue")
- `status` - active | draft | archived
- `description` - Plain text description
- `description_html` - Full HTML description
- `vendor` - Brand/manufacturer name
- `product_type` - Product category/type
- `tags` - Comma-separated tags
- `primary_image_url` - Main product image
- `product_url` - Full storefront URL
- `language` - Shop's primary language
- `content_hash` - SHA256 hash for change detection

**Price & Inventory (First Variant):**
- `price` - Product price
- `sku` - Stock keeping unit
- `inventory_quantity` - Current stock level

**Variant Data (JSONB Array):**
Each product stores ALL variants with:
- `id` - Variant ID
- `title` - Variant name (e.g. "Small / Red")
- `price` - Variant price
- `compareAtPrice` - Original price (for discounts)
- `sku` - Variant SKU
- `inventoryQuantity` - Stock level
- `availableForSale` - Boolean
- `image` - Variant-specific image URL
- `selectedOptions` - Array of {name, value} (e.g. [{name: "Size", value: "M"}])

**Images (From GraphQL):**
- Featured image + up to 10 additional images per product
- Image URLs and alt text

**SEO Data:**
- SEO title
- SEO description

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Products query with pagination
- **Batch Size:** 50 products per request
- **Sorting:** By UPDATED_AT desc
- **Change Detection:** Content hash comparison (title, description, handle, status, vendor, productType, tags)
- **Update Strategy:** Upsert with conflict resolution on `shop_id + shopify_product_id + language`

**Import Triggers:**
- Initial: `product_import` job (bulk import all products)
- Webhook: `products/update` → Single product re-import
- Webhook: `products/create` → Single product import
- Webhook: `products/delete` → Product deletion + embedding cleanup

**Post-Import:**
- Old embeddings deleted (if product updated)
- `chunk` job created for each product
- Products trigger `collections_import` after bulk import
- Products trigger `order_import` after bulk import (onboarding only)

---

### 2. 🛒 Orders

**Imported Fields:**
- `shopify_order_id` - Shopify numeric order ID
- `order_number` - Display name (e.g. "#1001")
- `email` - Customer email
- `customer_name` - Full name or display name
- `total_price` - Order total
- `currency` - Currency code
- `financial_status` - Payment status
- `fulfillment_status` - Shipping status
- `created_at` - Order date
- `updated_at` - Last modification

**Line Items (JSONB Array):**
- `id` - Line item ID (for refunds)
- `line_item_id` - Explicit field for dashboard operations
- `product_id` - Related product
- `variant_id` - Related variant
- `name` - Line item name
- `title` - Product title
- `product_title` - Full product name
- `variant_title` - Variant name
- `quantity` - Quantity ordered
- `price` - Unit price
- `sku` - Product SKU
- `image` - Product/variant image

**Payment Data (JSONB):**
- `gateway` - Primary payment gateway (stripe, paypal, etc.)
- `payment_methods` - All payment methods used
- `transactions` - Array of all transactions:
  - `id` - Transaction ID
  - `kind` - SALE | CAPTURE | REFUND | VOID
  - `gateway` - Payment provider
  - `status` - SUCCESS | PENDING | FAILURE
  - `amount` - Transaction amount
  - `currency` - Currency code
  - `parent_id` - Parent transaction (for refunds)

**Shipping Address (JSONB):**
- `name` - Recipient name
- `firstName` / `lastName`
- `address1` / `address2`
- `zip` - Postal code
- `city`
- `country`
- `countryCode`
- `provinceCode`
- `phone`
- `company`
- `full_address` - Human-readable combined address

**Tracking Info (JSONB Array):**
- `company` - Shipping carrier
- `number` - Tracking number
- `url` - Tracking URL

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Orders query with date filter
- **Date Range:** Last 60 days (configurable via `payload.days`)
- **Batch Size:** 50 orders per request
- **Sorting:** By CREATED_AT
- **Update Strategy:** Upsert with conflict on `shop_id + shopify_order_id`

**Import Triggers:**
- Initial: `order_import` job (last 60 days)
- Triggered by: `product_import` completion (onboarding flow)
- Webhook: `orders/create` → Single order import
- Webhook: `orders/updated` → Single order re-import

**Post-Import:**
- Triggers `customer_import` (onboarding flow only)
- No embeddings created (orders not chunked)

---

### 3. 👥 Customers

**Imported Fields:**
- `shopify_customer_id` - Full Shopify GID
- `email`
- `phone`
- `first_name`
- `last_name`
- `display_name`
- `state` - enabled | disabled | invited | declined
- `verified_email` - Boolean
- `tax_exempt` - Boolean

**Marketing Consent:**
- `accepts_marketing` - Email marketing opt-in
- `accepts_marketing_updated_at`
- `marketing_opt_in_level` - single_opt_in | confirmed_opt_in | unknown
- `email_marketing_consent` (JSONB):
  - `marketing_state` - SUBSCRIBED | UNSUBSCRIBED
  - `marketing_opt_in_level`
  - `consent_updated_at`
- `sms_marketing_consent` (JSONB):
  - Same structure as email consent

**Addresses (JSONB):**
- `default_address` - Primary address object
- `addresses` - Array of all addresses:
  - `id` - Address ID
  - `address1` / `address2`
  - `city` / `province` / `provinceCode`
  - `zip` / `country` / `countryCodeV2`
  - `phone` / `name` / `firstName` / `lastName`
  - `company`

**Customer Statistics:**
- `orders_count` - Total orders placed
- `total_spent` - Lifetime value
- `currency` - Customer's currency

**Metadata:**
- `tags` - Customer tags array
- `note` - Admin notes
- `locale` - Customer's locale
- `metafields` (JSONB) - Custom metafields

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Customers query
- **Batch Size:** 50 customers per request
- **Sorting:** By CREATED_AT
- **Update Strategy:** Upsert with conflict on `shop_id + shopify_customer_id`
- **Max Limit:** 50,000 customers per job (safety)

**Import Triggers:**
- Initial: `customer_import` job (all customers)
- Triggered by: `order_import` completion (onboarding flow)
- Webhook: `customers/create` → Single customer import
- Webhook: `customers/update` → Single customer re-import
- Webhook: `customers/delete` → Customer deletion

**Post-Import:**
- No embeddings created (customers not chunked)
- Data used for context in AI responses

---

### 4. 📦 Collections

**Imported Fields:**
- `shopify_collection_id` - Shopify numeric ID
- `title` - Collection name
- `handle` - URL slug
- `description` - Collection description (text/HTML)
- `updated_at` - Last modification
- `image_url` - Collection image
- `collection_url` - Full storefront URL
- `language` - Shop's primary language
- `content_hash` - SHA256 hash for change detection
- `raw` (JSONB) - Full Shopify response

**Products in Collection (JSONB Array):**
- `id` - Product GID
- `title` - Product name
- `handle` - Product handle

Up to 250 products per collection stored.

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Collections query with nested products
- **Batch Size:** 50 collections per request
- **Sorting:** By UPDATED_AT desc
- **Change Detection:** Title, handle, description comparison
- **Update Strategy:** Upsert with conflict on `shop_id + shopify_collection_id + language`

**Import Triggers:**
- Initial: `collections_import` job
- Triggered by: `product_import` completion (needs products first)
- Webhook: `collections/create` → Single collection import
- Webhook: `collections/update` → Single collection re-import
- Webhook: `collections/delete` → Collection deletion + embedding cleanup

**Post-Import:**
- Old embeddings deleted (if collection updated)
- `chunk` job created for each collection

---

### 5. 📄 Pages

**Imported Fields:**
- `shopify_page_id` - Shopify numeric ID
- `title` - Page title
- `handle` - URL slug
- `html` - Full HTML content
- `url` - Full storefront URL
- `created_at` - Creation date
- `updated_at` - Last modification
- `language` - Shop's primary language
- `body_hash` - SHA256 hash of content (for change detection)
- `raw` (JSONB) - Full Shopify response

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Pages query
- **Batch Size:** 50 pages per request
- **Sorting:** By UPDATED_AT desc
- **Change Detection:** Body hash, title, handle comparison
- **Update Strategy:** Upsert with conflict on `shop_id + shopify_page_id + language`

**Import Triggers:**
- Initial: `pages_import` job
- Webhook: `pages/update` → Single page re-import (if exists)
- Webhook: `pages/create` → Single page import (if exists)

**Post-Import:**
- Old embeddings deleted (if page updated)
- `chunk` job created for each page

---

### 6. 📜 Policies

**Imported Fields:**
- `shopify_policy_id` - Shopify policy ID (string)
- `policy_type` - Policy handle (refund_policy, privacy_policy, terms_of_service, shipping_policy)
- `title` - Policy title
- `body` - Policy content (HTML)
- `body_hash` - SHA256 hash of normalized content
- `url` - Policy URL
- `updated_at` - Last modification
- `language` - Shop's primary language
- `raw` (JSONB) - Full Shopify response

**Supported Policy Types:**
- Refund Policy
- Privacy Policy
- Terms of Service
- Shipping Policy
- Subscription Policy
- Legal Notice
- Contact Information

**Technical Details:**
- **API:** Shopify REST Admin API 2025-10 `/admin/api/2025-10/policies.json`
- **Method:** GET (single request, all policies)
- **Change Detection:** Normalized body hash + title + URL comparison
- **Update Strategy:** Upsert with conflict on `shop_id + policy_type + language`

**Normalization:**
- HTML tags stripped
- Entities decoded (&nbsp; → space)
- Whitespace normalized
- Hash computed on normalized text (prevents false changes)

**Import Triggers:**
- Initial: `policies_import` job
- Manual: Can target specific policy by ID or handle

**Post-Import:**
- Old embeddings deleted (if policy updated)
- `chunk` job created for each policy
- Uses policy database UUID (not Shopify ID) as source_id

---

### 7. 📰 Blog Articles

**Imported Fields:**
- `shopify_article_id` - Shopify numeric ID
- `blog_title` - Parent blog name
- `article_title` - Article title
- `handle` - URL slug
- `content_html` - Full article HTML
- `excerpt` - Article summary (deprecated in API 2025-10, stored as null)
- `tags` - Article tags array
- `author` - Author name
- `published_at` - Publication date
- `updated_at` - Last modification
- `article_url` - Full storefront URL
- `language` - Shop's primary language
- `raw` (JSONB) - Full Shopify response

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Blogs query with nested articles
- **Batch Size:** 5 blogs per request, 50 articles per blog
- **Sorting:** By blog TITLE
- **Change Detection:** Title, handle, updated_at comparison
- **Update Strategy:** Upsert with conflict on `shop_id + shopify_article_id + language`

**Import Triggers:**
- Initial: `blogs_import` job

**Post-Import:**
- Old embeddings deleted (if article updated)
- `chunk` job created for each article

---

### 8. ⚙️ Shop Metadata

**Imported Fields:**
- `shop_name` - Store name
- `updated_at` - Last sync timestamp

**Available in GraphQL (not stored separately):**
- Shop description
- Contact email
- Primary domain (host + URL)
- Currency code
- Timezone (IANA)
- Weight unit
- Shopify plan details
- Feature flags

**Technical Details:**
- **API:** Shopify GraphQL Admin API 2025-10
- **Query:** Shop query (single request)
- **Update:** Updates existing shop record

**Import Triggers:**
- Initial: `shop_metadata_import` job

**Post-Import:**
- No embeddings created
- Metadata available for context in AI responses

---

## 🤖 AI Processing Pipeline

### Step 1: Chunking

**Purpose:** Split large content into AI-digestible pieces.

**Chunk Job (`chunk` type):**
- Created for: products, collections, pages, policies, articles
- NOT created for: orders, customers, shop metadata

**Chunking Algorithm:**
- **Max Chunk Size:** 8,000 characters
- **Overlap:** 200 characters between chunks
- **Min Chunk Size:** 100 characters
- **Word Boundary Breaking:** Never splits mid-word

**Process:**
1. Load source data from database (products/pages/policies/collections/articles)
2. Extract relevant content:
   - **Products:** Title + Description + Tags + Vendor + Type
   - **Pages:** Title + HTML (stripped to text)
   - **Policies:** Title + Body (HTML stripped)
   - **Collections:** Title + Description + Product list
   - **Articles:** Title + Content HTML (stripped)
3. Strip HTML tags, decode entities, normalize whitespace
4. Split into chunks with overlap
5. Store chunks in `embeddings` table with:
   - `shop_id`
   - `source_type` (product/page/policy/collection/article)
   - `source_id` (database ID or Shopify ID depending on type)
   - `chunk_text` (actual content)
   - `chunk_index` (position in sequence)
   - `total_chunks` (total for this source)
   - `metadata` (JSONB with source details)
   - `embedding_vector` (null, filled by embedding job)

**HTML Stripping Logic:**
- Remove `<script>` and `<style>` tags
- Convert `<br>` and block tags to newlines
- Remove all HTML tags
- Decode entities (&nbsp;, &amp;, &lt;, &gt;, &quot;, &#39;)
- Collapse multiple newlines
- Trim whitespace

**Example:**
```
Product: "Summer Dress - Blue"
Description: 5000 characters

→ Chunk 1 (0-8000 chars): "Summer Dress - Blue. This beautiful..."
→ Chunk 2 (7800-15800 chars): "...comfortable fabric. Available in..."
(200 char overlap between chunks)
```

---

### Step 2: Embedding Generation

**Purpose:** Convert text chunks into semantic vectors for AI search.

**Embedding Job (`embedding` type):**
- Processes chunks created by chunk jobs
- Generates vector embeddings using OpenAI

**Configuration:**
- **Model:** `text-embedding-3-large`
- **Dimensions:** 3,072
- **Batch Size:** 32 chunks per API request
- **Max Concurrent:** 4 batches in parallel
- **Max Retries:** 8 attempts with exponential backoff
- **Timeout:** 30 seconds per request

**Process:**
1. Load chunk by ID from `embeddings` table
2. Optionally load 31 additional chunks (batch optimization)
3. Send chunk texts to OpenAI Embeddings API
4. Receive 3,072-dimensional vectors
5. Bulk update `embeddings` table:
   - Set `embedding_vector` (pgvector)
   - Set `tokens_used`
   - Set `embedding_cost`
   - Set `model_used`
   - Set `embedded_at`

**OpenAI API Request:**
```javascript
{
  model: 'text-embedding-3-large',
  input: [chunk1.chunk_text, chunk2.chunk_text, ...], // up to 32
  encoding_format: 'float'
}
```

**Response:**
```javascript
{
  data: [
    { embedding: [0.123, -0.456, ...], index: 0 },
    { embedding: [0.789, -0.012, ...], index: 1 },
    ...
  ],
  usage: {
    prompt_tokens: 15000,
    total_tokens: 15000
  }
}
```

**Cost Calculation:**
- **Pricing:** $0.13 per 1M tokens
- **Example:** 15,000 tokens = $0.00195

**Vector Storage:**
- Stored in PostgreSQL with `pgvector` extension
- Type: `vector(3072)`
- Indexed for fast similarity search
- Used for semantic search in AI responses

**Error Handling:**
- Rate limits: Exponential backoff (800ms base, up to 8s)
- API errors: Retry up to 8 times
- Timeouts: 30s per request
- Invalid vectors: Dimension validation before storage

---

### Step 3: Embedding Cleanup

**Purpose:** Remove outdated embeddings when source content changes.

**Cleanup Process:**
1. When source updated (product/page/policy/collection/article)
2. Before creating new chunk job
3. Delete all embeddings where:
   - `source_type` = (product/page/etc.)
   - `source_id` = (updated item ID)
4. Then create new chunk job
5. New chunks → new embeddings

**Why Necessary:**
- Prevents duplicate/conflicting embeddings
- Ensures AI uses latest content
- Maintains database consistency

**Example:**
```
Product #123 updated:
1. Delete embeddings (source_type='product', source_id='123')
2. Create chunk job (source_type='product', source_id='123')
3. Chunk job → new chunks in embeddings table
4. Embedding job → new vectors
```

---

## 📡 Real-Time Synchronization

### Webhook System

**Purpose:** Keep imported data synchronized with Shopify changes in real-time.

**Webhook Configuration:**
Set up automatically via `setup_webhooks` job on installation.

**Active Webhooks:**

#### Product Webhooks
- `products/create` → `product_import` job (single product)
- `products/update` → `product_update` job (single product)
- `products/delete` → `product_delete` job (deletion + cleanup)

#### Collection Webhooks
- `collections/create` → `collections_import` job (single)
- `collections/update` → `collection_update` job (single)
- `collections/delete` → `collection_delete` job (deletion + cleanup)

#### Order Webhooks
- `orders/create` → `order_import` job (single order)
- `orders/updated` → `order_update` job (single order)
- `refunds/create` → `refund_create` job (update order data)

#### Customer Webhooks
- `customers/create` → `customer_import` job (single)
- `customers/update` → `customer_update` job (single)
- `customers/delete` → `customer_delete` job (deletion)

#### Fulfillment Webhooks
- `fulfillments/create` → `fulfillment_event` job
- `fulfillments/update` → `fulfillment_update` job

#### Inventory Webhooks
- `inventory_levels/update` → `inventory_update` job

#### Other Webhooks
- `app/uninstalled` → `app_uninstalled` job (cleanup)
- `orders/transactions/create` → `transaction_create` job
- `checkouts/create` → `checkout_event` job (for analytics)
- `checkouts/update` → `checkout_event` job (for analytics)
- `carts/create` → `cart_event` job (for analytics)
- `carts/update` → `cart_event` job (for analytics)

**GDPR Webhooks:**
- `customers/data_request` → `gdpr_data_export` job
- `customers/redact` → `gdpr_customer_redact` job
- `shop/redact` → `gdpr_shop_redact` job

**Webhook Delivery:**
- Shopify sends webhook to ReplAInow endpoint
- Endpoint creates background job
- Job processed asynchronously
- Typical latency: 2-10 seconds from Shopify event to data updated

---

## 📊 Dashboard View

### AI Knowledge Page (`/knowledge`)

**URL:** `https://app.replainow.com/knowledge`

**Purpose:** Show merchants exactly what data has been imported and AI-processed.

#### Hero Section

**Displayed Information:**
- "AI Knowledge Base"
- "Your shop's complete intelligence - automatically synced and AI-ready"
- Total data points imported (sum of products + customers + pages + policies + collections + articles)
- Total AI chunks created
- Synchronization status (100% Synchronized)

**Visual:**
- Gradient background (purple to blue)
- Brain icon
- Database icon with data count
- Sparkles icon with chunks count
- Green checkmark with sync status

#### Shop Data Section

**Cards:**
1. **Products**
   - Count (formatted with locale)
   - "Product catalog & variants"
   - "✅ Fully Imported"

2. **Orders**
   - Count (last 60 days, formatted with locale)
   - "Customer orders"
   - "✅ Fully Imported"

3. **Customers**
   - Count (formatted with locale)
   - "Customer database"
   - "✅ Fully Imported"

#### Content Data Section

**Cards:**
1. **Pages**
   - Count
   - "FAQs, About, Guides, etc."

2. **Policies**
   - Count
   - "Refund, Privacy, Terms, etc."

3. **Collections**
   - Count
   - "Product categories"

4. **Blog Articles**
   - Count
   - "All blog posts"

#### AI Layer Section

**Embedding Stats Card:**
- Title: "{count} AI-Powered Semantic Chunks"
- Description: "Your content processed into {count} AI-understandable chunks"
- Status: "✅ Complete"

**Explanation Cards:**
1. **What is it?**
   - "Your content converted into mathematical vectors"

2. **Why important?**
   - "Enables semantic search - understands meaning, not just keywords"

3. **Auto-Sync**
   - "Every update automatically triggers re-embedding in real-time"

#### Status Cards

**AI Ready Card:**
- "✅ AI is Ready"
- "Your knowledge base contains {count} data points"
- Capabilities list:
  - ✓ Product questions (specs, availability, pricing)
  - ✓ Order tracking (status, shipping, delivery)
  - ✓ Policy questions (refunds, returns, shipping)
  - ✓ Customer history (past orders, preferences)

**How It Works Card:**
- Step 1: "We import all your shop data automatically"
- Step 2: "Content split into {count} semantic chunks"
- Step 3: "AI analyzes and understands each chunk"
- Step 4: "Real-time updates via Shopify webhooks"

#### Detailed Overview Section

**Four Cards (Bottom Row):**
1. Products - with count and detail
2. Orders - with count and detail
3. Customers - with count and detail
4. Total Knowledge - gradient card with combined stats

---

## ⚙️ Technical Implementation Details

### Database Tables

**Primary Tables:**
- `products` - Product catalog
- `orders` - Order data
- `customers` - Customer data
- `collections` - Product collections
- `pages` - Content pages
- `policies` - Shop policies
- `articles` - Blog articles
- `shops` - Shop metadata
- `embeddings` - Chunks + vectors
- `jobs` - Background job queue

**Key Relationships:**
- All tables link to `shops` via `shop_id` (UUID)
- `embeddings` link to source tables via `source_type` + `source_id`
- Row-level security (RLS) enforces shop isolation

### Background Job System

**Job Table Fields:**
- `id` - UUID
- `shop_id` - Shop UUID
- `type` - Job type (product_import, chunk, embedding, etc.)
- `status` - queued | in_progress | completed | failed
- `priority` - Integer (higher = more urgent)
- `payload` - JSONB (job-specific parameters)
- `created_at` - Timestamp
- `started_at` - Timestamp
- `completed_at` - Timestamp
- `error` - Error message if failed

**Job Processing:**
- Worker polls `jobs` table for queued jobs
- Updates status to `in_progress`
- Executes job handler
- Updates status to `completed` or `failed`
- Logs performance metrics

**Job Chain (Onboarding):**
1. `shop_metadata_import`
2. `product_import` (triggers #3 and #4 on completion)
3. `collections_import` (needs products first)
4. `order_import` (triggers #5 on completion)
5. `customer_import`
6. `pages_import` (parallel with above)
7. `policies_import` (parallel with above)
8. `blogs_import` (parallel with above)
9. Multiple `chunk` jobs (parallel, per source item)
10. Multiple `embedding` jobs (parallel, batched)

### API Integration

**Shopify GraphQL Admin API 2025-10:**
- Products: Pagination via cursor, batch size 50
- Orders: Date-filtered query, batch size 50
- Customers: Pagination via cursor, batch size 50
- Collections: Pagination via cursor, batch size 50
- Pages: Pagination via cursor, batch size 50
- Blogs/Articles: Nested query, 5 blogs × 50 articles

**Shopify REST Admin API 2025-10:**
- Policies: Single request `/admin/api/2025-10/policies.json`

**OpenAI Embeddings API:**
- Model: `text-embedding-3-large`
- Batch size: Up to 32 chunks per request
- Dimensions: 3,072
- Format: float array

**Rate Limiting:**
- Shopify: Built-in delays (200-400ms between requests)
- Shopify: Respects `Retry-After` headers
- OpenAI: Exponential backoff on rate limits
- OpenAI: Max 8 retries with jitter

### Security & Compliance

**Data Isolation:**
- Row-level security (RLS) on all tables
- All queries scoped by `shop_id`
- No cross-shop data access

**Encryption:**
- Access tokens encrypted at rest (AES)
- TLS 1.3 for all API communication
- Encrypted backups

**GDPR Compliance:**
- `gdpr_customer_redact` - Removes customer data
- `gdpr_shop_redact` - Removes all shop data
- `gdpr_data_export` - Exports customer data
- `app_uninstalled` - Full cleanup on uninstall

**Authentication:**
- Shopify OAuth 2.0
- Token refresh handling
- Session management

### Performance & Scale

**Tested Capacity:**
- Products: Up to 50,000 products
- Orders: Up to 100,000 orders
- Customers: Up to 50,000 customers
- Embeddings: Millions of chunks

**Import Speed:**
- Products: ~500/minute
- Orders: ~1,000/minute
- Customers: ~1,000/minute
- Embeddings: 32 chunks/second

**Typical Onboarding Times:**
- Small shop (100 products): ~30 seconds
- Medium shop (1,000 products): ~2 minutes
- Large shop (10,000 products): ~15 minutes

**Database Optimization:**
- Bulk operations (upsert batches)
- Indexed foreign keys
- pgvector indexes for similarity search
- Connection pooling

---

## 🔄 Data Flow Diagrams

### Initial Import Flow

```
Installation
    ↓
setup_webhooks job
    ↓
shop_metadata_import
    ↓
product_import (bulk)
    ↓
    ├→ collections_import
    │       ↓
    │   chunk jobs (per collection)
    │
    └→ order_import (last 60 days)
            ↓
        customer_import
            ↓
        (parallel)
        ├→ pages_import
        ├→ policies_import
        └→ blogs_import
            ↓
        chunk jobs (for all chunkable content)
            ↓
        embedding jobs (batched processing)
            ↓
        AI Knowledge Complete
```

### Real-Time Update Flow

```
Shopify Event (e.g., product updated)
    ↓
Webhook received
    ↓
Background job created (product_update)
    ↓
Fetch single product from Shopify
    ↓
Delete old embeddings (source_type='product', source_id='123')
    ↓
Upsert product data
    ↓
Create chunk job
    ↓
Chunk job processes product
    ↓
Create embedding job
    ↓
Embedding job generates vectors
    ↓
Knowledge base updated (2-10 seconds from event)
```

### AI Response Flow (Using Knowledge)

```
Customer asks question
    ↓
AI analyzes question
    ↓
Question → embedding vector
    ↓
Similarity search in embeddings table (pgvector)
    ↓
Retrieve top relevant chunks
    ↓
Load source data (products/pages/policies/etc.)
    ↓
Build context for AI
    ↓
Generate response using context
    ↓
Send to customer
```

---

## 📈 Statistics & Metrics

### Import Statistics (Example: Medium Shop)

**Shop Profile:**
- 500 products
- 2,000 orders (last 60 days)
- 3,000 customers
- 25 collections
- 15 pages
- 4 policies
- 50 blog articles

**Import Results:**
- Total data points: 6,594
- Total chunks created: 3,075
- Total embeddings: 3,075 vectors × 3,072 dimensions
- Import time: ~3 minutes
- Embedding time: ~2 minutes
- Total time: ~5 minutes

**Storage:**
- Database size: ~150 MB
- Embeddings size: ~100 MB (vectors)
- Total: ~250 MB

**Costs:**
- Shopify API calls: ~120 requests (free, rate-limited)
- OpenAI embedding tokens: ~1.2M tokens
- OpenAI cost: ~$0.16 (one-time)

### Ongoing Sync (Per Month)

**Typical Activity:**
- 100 product updates
- 500 new orders
- 50 customer updates
- 10 page updates
- 5 policy updates

**Processing:**
- Product updates: ~420 chunks, ~168K tokens, ~$0.02
- Other updates: ~50 chunks, ~20K tokens, ~$0.003
- Total monthly cost: ~$0.03

---

## 🎯 Feature Capabilities Enabled

### For AI Chat Responses

**Product Questions:**
- "Do you have [product] in [size/color]?"
- "What's the price of [product]?"
- "Is [product] in stock?"
- "Tell me about [product]"
- "Show me products similar to [product]"

**Order Questions:**
- "Where is my order #1001?"
- "When will my order arrive?"
- "Can I change my shipping address?"
- "I want to return my order"
- "What's my order status?"

**Policy Questions:**
- "What's your return policy?"
- "How long does shipping take?"
- "Do you ship internationally?"
- "What's your refund policy?"
- "What are your terms of service?"

**Customer Context:**
- Recognize returning customers
- Access order history
- Personalized greetings
- VIP customer handling

**Content Questions:**
- "How do I use [product]?"
- "Do you have a sizing guide?"
- "Tell me about your brand"
- FAQs from pages

### For Agent Dashboard

**Order Management:**
- View complete order details
- Access customer history
- See order line items
- Check fulfillment status
- Process refunds (transaction data available)

**Customer Insights:**
- Customer lifetime value
- Order count
- Purchase history
- Contact information
- Marketing preferences

**Product Lookup:**
- Find products by name/SKU
- Check inventory
- View variants
- See pricing
- Access product images

---

## 🔧 Configuration Options

### Import Configuration (Per Shop)

**Language:**
- Set via `shops.widget_language`
- Defaults to 'en'
- Used for all imported content
- Affects chunking and embedding language

**Order Import Range:**
- Default: Last 60 days
- Configurable via job payload `{days: 90}`
- Can be adjusted per shop

**Webhook Setup:**
- Automatic on installation
- Can be re-run via `setup_webhooks` job
- Webhook URL: `https://app.replainow.com/api/webhooks/[type]`

### Processing Configuration

**Chunking:**
- Max chunk size: 8,000 chars (configurable)
- Overlap: 200 chars (configurable)
- Min chunk size: 100 chars (configurable)

**Embedding:**
- Model: `text-embedding-3-large` (configurable)
- Batch size: 32 chunks (configurable via env var `EMBED_BATCH_SIZE`)
- Concurrency: 4 batches (configurable via env var `EMBED_MAX_CONCURRENCY`)
- Dimensions: 3,072 (tied to model)

---

## 📝 Summary

AI Knowledge is a fully automated system that:

1. **Imports** all Shopify store data on installation
2. **Processes** content into AI-ready chunks and embeddings
3. **Synchronizes** in real-time via webhooks
4. **Presents** clear dashboard visibility to merchants
5. **Enables** intelligent AI responses across all channels

**Zero merchant configuration required.**

**Key differentiators:**
- Complete automation
- Real-time sync
- Semantic AI understanding
- Full Shopify integration
- Enterprise-scale performance

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2024  
**Status:** ✅ Complete - Pure Feature Documentation
