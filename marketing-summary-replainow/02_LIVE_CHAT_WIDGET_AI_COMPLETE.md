# 💬 Live Chat Widget & AI - Complete Feature Documentation

> **Real-Time Customer Support with Intelligent AI**

---

## 📋 Overview

The Live Chat Widget is an embedded chat interface that appears on the Shopify store, allowing customers to communicate with AI and human agents in real-time. The AI automatically responds to customer questions, recommends products, tracks orders, and knows when to hand off to human agents.

---

## 🎨 Widget Design & Appearance

### Chat Bubble (Launcher)

**Visual:**
- Round floating button (bottom-right by default)
- Dark background with gradient chat icon (purple to pink)
- Size: 60px × 60px
- Premium shadow effect
- Pulse animation when there's activity
- Unread message badge (red dot with count)

**Behavior:**
- Click to open/close widget
- Keyboard accessible (Tab + Enter)
- Smooth animations (350ms)
- Mobile responsive

**Position Options:**
- Bottom-right (default)
- Bottom-left
- Top-right
- Top-left

---

### Widget Window

**Dimensions:**
- Desktop: 400px wide × 680px tall
- Mobile: Full screen
- Tablet: Optimized for touch

**Design:**
- Borderless floating card
- White background
- Rounded corners (16px)
- Multi-layer shadow (premium depth)
- Smooth slide-in animation
- Minimizable/closable

---

## 📱 Multi-Tab Navigation System

The widget features 3 main tabs that customers can switch between:

### Tab 1: 🏠 Home

**Purpose:** Starting point for new conversations and shop updates

**What Customers See:**
1. **Greeting Message**
   - Friendly welcome (e.g., "Hi 👋 How can we help?")
   - Customizable by merchant
   - Auto-translated to customer's language

2. **Start Conversation Button**
   - Large primary call-to-action
   - "Start conversation" text
   - "AI + Team" subtitle (shows both AI and human agents available)
   - Dark button with smooth hover effect

3. **Latest News Section**
   - Title: "Latest news"
   - News cards (up to 5)
   - Each news card shows:
     - Title
     - Description/excerpt
     - Optional image
     - Published date (e.g., "2 hours ago")
     - Click to read more (opens full article)
   - Empty state if no news: "No news yet - Check back later for updates"

4. **Team Avatars (Online Agents)**
   - Shows which support agents are currently online
   - Displays agent profile pictures in a row
   - Green online indicator dot
   - Shows agent name on hover
   - Only visible if agents are actually online (real-time presence)
   - Disappears if no agents online (clean UI)

**Use Cases:**
- Customer lands on shop, opens widget to see what's new
- Checks if support agents are available before starting chat
- Reads announcements (sales, updates, promotions)
- Starts new conversation

---

### Tab 2: 💬 Messages

**Purpose:** Active conversation with AI or agent

**What Customers See:**

1. **Chat Header**
   - "Chat" or "Live Support" title
   - Online status indicator
   - Agent name (if human agent joined)
   - Close button (minimize widget)

2. **Message Area**
   - Scrollable conversation history
   - Customer messages (right side, light background)
   - AI/Agent messages (left side, white background)
   - Timestamps (e.g., "14:32")
   - "Today" / "Yesterday" date separators
   - Typing indicator when AI/agent is typing
   - System messages (e.g., "Agent John joined the chat")

3. **Special Message Types:**
   - **Text Messages** - Standard chat messages
   - **Product Cards** - Visual product recommendations
   - **Discount Cards** - Coupon codes with copy button
   - **Tracking Cards** - Package tracking information
   - **Checkout Links** - Pre-filled shopping cart links

4. **Message Input Area**
   - Text input field
   - Placeholder: "Type your message..." (auto-translated)
   - Send button (paper plane icon)
   - Character counter (if enabled)
   - File upload (if enabled)
   - Emoji picker (if enabled)

5. **Connection Status Banner**
   - Shows at top if connection is lost
   - "Reconnecting..." message
   - Auto-hides when reconnected
   - "Connection restored!" success message

**Use Cases:**
- Customer asks product questions
- AI provides instant answers
- Customer requests order tracking
- Human agent takes over when needed
- Customer receives product recommendations
- Discount codes offered during conversation

---

### Tab 3: 💬 Chats (Conversation History)

**Purpose:** View previous conversations with the shop

**What Customers See:**

1. **Conversation List**
   - All past conversations shown as cards
   - Each conversation card shows:
     - Ticket number (e.g., "#12345")
     - Last message preview
     - Timestamp (e.g., "2 hours ago", "Yesterday")
     - Unread indicator (blue dot)
     - Category badge (e.g., "Product", "Support", "Delivery")
     - Status (active, closed)

2. **Sorting**
   - Most recent conversations first
   - Unread conversations highlighted

3. **Load More**
   - Shows 10 conversations initially
   - "Load more..." button at bottom
   - Pagination (loads additional 10)

4. **Empty State**
   - Shown if no conversations exist
   - Message: "No conversations yet"
   - "Start your first chat now!" button
   - Friendly icon/illustration

**Click Behavior:**
- Click on any conversation → Opens that conversation in Messages tab
- Loads full chat history
- Allows customer to continue conversation
- Unread count cleared

**Use Cases:**
- Customer returns to check previous support request
- Looking up past order tracking conversations
- Continue abandoned conversation
- Reference previous product recommendations

---

## 🤖 AI Intelligence Features

### Automatic Language Detection

**How It Works:**
- AI automatically detects customer's language from their first message
- Responds in the same language
- Supports 100+ languages (German, English, French, Spanish, etc.)
- No manual selection needed

**Supported Languages:**
- All major European languages (German, English, French, Spanish, Italian, Portuguese, Dutch, Swedish, etc.)
- Asian languages (Chinese, Japanese, Korean, Thai, Vietnamese, Indonesian, etc.)
- Arabic, Hebrew, Russian, Turkish, Greek, Romanian, Hungarian, Czech, Polish, Finnish, Danish, Norwegian
- And many more

---

### Intent Detection

**What AI Understands:**
- **Product Inquiry** - Customer asking about products, features, availability
- **Order Tracking** - "Where is my order?"
- **Support Request** - General help needed
- **Billing Question** - Payment, invoices, refunds
- **Complaint** - Customer is unhappy
- **Smalltalk** - Greetings, thank you, casual conversation
- **Human Request** - Customer explicitly asks for human agent
- **Upselling Opportunity** - Customer shows purchase intent
- **Cross-Selling** - Customer might be interested in related products
- **Retention Risk** - Customer considering leaving/canceling

---

### Sentiment Analysis

**AI Detects Customer Emotion:**
- **Positive** - Happy, satisfied, excited
- **Neutral** - Informational, calm
- **Negative** - Frustrated, angry, disappointed
- **Confused** - Needs clarification

**Why This Matters:**
- Frustrated customers get higher priority
- Negative sentiment triggers human handoff faster
- Positive sentiment = upselling opportunity
- Merchants can see customer mood in dashboard

---

### Customer Segmentation

**AI Automatically Identifies:**
- **New Customer** - First-time visitor
- **Returning Customer** - Has previous orders
- **VIP Customer** - High lifetime value
- **At-Risk Customer** - Signs of dissatisfaction
- **High-Value Customer** - High cart value or order history
- **Unknown** - Not enough data

**Benefits:**
- VIP customers get white-glove treatment
- New customers get extra help and onboarding
- At-risk customers get retention offers

---

### Conversation Categories

**AI Assigns Conversations to Categories:**
- **Product** - Product questions, features, availability
- **Presale** - Questions before purchase (shipping, policies)
- **Support** - General help and assistance
- **Delivery** - Order tracking, shipping questions
- **Return** - Return requests, refund questions
- **Billing** - Payment issues, invoice questions
- **Complaint** - Customer complaints and issues
- **Cooperation** - Business inquiries, wholesale
- **Spam** - Spam messages (auto-filtered)
- **Proactive** - System-initiated conversations (re-categorized when customer replies)

**Benefit for Merchants:**
- Dashboard shows conversations filtered by category
- Agents can prioritize by type
- Analytics show category distribution

---

## 💳 Interactive Message Cards

### Product Cards

**What Customers See:**
- Product image (large, high quality)
- Product title
- Price (formatted with currency)
- Short description (2-3 lines)
- Stock status (if low stock: "Only 3 left!")
- "View Product" button

**Behavior:**
- Click button → Opens product page in new tab
- Click image → Opens product page
- Smooth hover effects
- Responsive on mobile

**When AI Sends Product Cards:**
- Customer asks "Do you have [product]?"
- AI recommends products based on conversation
- Customer shows interest in product category
- Up to 3 products per response

---

### Discount Cards

**What Customers See:**
- 🎁 Gift icon
- "Discount Code" title
- The actual code (e.g., "AI20-XYZ123")
- Discount value (e.g., "20% OFF" or "€10 OFF")
- Expiry date (e.g., "Valid for 7 days")
- Copy button (click to copy code)
- "Apply to Cart" button (automatically applies code)

**Behavior:**
- Click "Copy" → Code copied to clipboard, shows "Copied!" confirmation
- Click "Apply to Cart" → Code applied to Shopify cart, ready for checkout
- Shows green success state when copied
- Expiry countdown (e.g., "Expires in 6 days")

**When AI Offers Discounts:**
- Customer explicitly asks: "Do you have a discount?"
- Customer seems hesitant about price
- First-time customer incentive
- Cart abandonment prevention
- Configured by merchant (can be disabled)

**Rate Limiting:**
- Maximum 1 discount per customer per conversation
- Maximum X discounts per day (shop-wide, merchant configurable)
- AI won't spam discount codes

---

### Tracking Cards

**What Customers See:**
- 📦 Package icon
- "Package Tracking" title
- Carrier logo (DHL, UPS, FedEx, etc.)
- Carrier name
- Tracking number (click to copy)
- "Track Package" button with link

**Behavior:**
- Click tracking number → Copies to clipboard
- Click "Track Package" button → Opens carrier's tracking page
- Auto-detects carrier from order data
- Smooth hover effects

**When AI Sends Tracking Cards:**
- Customer asks "Where is my order?"
- AI finds order by order number
- AI verifies customer email (security)
- Tracking info available in order data

**Security:**
- Customer must provide correct email address
- Order number alone is not enough
- Prevents unauthorized order tracking

---

### Checkout Link Cards

**What Customers See:**
- "Ready to Checkout" title
- List of products (up to 3 shown)
  - Product thumbnail
  - Product name
  - Quantity × Price
- "And X more items" (if cart has more than 3 products)
- Discount applied badge (if discount included)
- Total price (large, prominent)
- "Checkout Now" button (gradient purple-pink)
- "Secure checkout" label

**Behavior:**
- Click "Checkout Now" → Redirects to Shopify checkout with pre-filled cart
- If discount included → Automatically applied
- Click product → Opens product page
- Smooth hover effects

**When Agents Send Checkout Links:**
- Agent creates custom cart for customer
- Agent adds recommended products
- Agent applies discount code
- One-click checkout experience

---

## 🧠 AI Response Capabilities

### What AI Can Do

#### 1. Answer Product Questions

**Examples:**
- "Do you have blue shoes?" → AI searches knowledge base, shows products
- "What size is this available in?" → AI checks variant data, lists sizes
- "Is this in stock?" → AI checks inventory, provides stock status
- "Tell me about [product]" → AI provides description, features, pricing

**Data Sources:**
- Imported product catalog
- Variant information
- Inventory levels
- Product descriptions
- SEO data

---

#### 2. Track Orders

**Examples:**
- "Where is my order #1234?" → AI looks up order, shows status
- "When will it arrive?" → AI provides fulfillment status + tracking
- "Can I change my shipping address?" → AI checks order status, advises

**Security:**
- Customer must provide email address
- Email must match order email in database
- If mismatch, AI asks for correct email
- Prevents unauthorized access

**Tracking Information Shown:**
- Order number
- Order status (paid, processing, shipped, delivered)
- Fulfillment status
- Tracking number (if shipped)
- Carrier name (DHL, UPS, FedEx, etc.)
- Tracking link

---

#### 3. Explain Policies

**Examples:**
- "What's your return policy?" → AI quotes refund policy
- "How long does shipping take?" → AI explains shipping policy
- "Do you ship internationally?" → AI checks shipping policy

**Policy Types Covered:**
- Refund Policy
- Shipping Policy
- Privacy Policy
- Terms of Service
- Any custom policies

**Response Style:**
- AI summarizes key points (doesn't copy entire policy word-for-word)
- Stays conversational and friendly
- Answers specific question, not generic policy dump

---

#### 4. Product Recommendations

**Intelligent Recommendation Engine:**

**Based on Conversation:**
- Customer asks "Do you have summer dresses?" → AI shows summer dresses
- Customer mentions specific product → AI shows that exact product
- Customer browsing category → AI recommends popular items from that category

**Based on Customer Journey:**
- Customer viewed Product A → AI prioritizes Product A in recommendations
- Customer added items to cart → AI knows cart contents
- Customer scrolled deeply on product page → AI knows serious interest

**Recommendation Quality:**
- AI explains WHY it recommends each product
- Matches customer's stated preferences (color, size, style)
- Considers price range mentioned by customer
- Adapts to shop type (fashion, electronics, beauty, etc.)

---

#### 5. Handle Multi-Language Conversations

**Automatic Language Detection:**
- Customer types "Hallo!" → AI responds in German
- Customer types "Hello!" → AI responds in English
- Customer switches language mid-conversation → AI adapts
- No language selector needed (fully automatic)

**Quality:**
- Native-level fluency in each language
- Culturally appropriate responses
- Correct formality level (Du/Sie in German, Tu/Vous in French)
- Natural expressions, not robotic translations

---

#### 6. Know When to Hand Off to Humans

**AI Triggers Human Handoff When:**
- Customer explicitly asks: "Can I speak to a human?"
- Customer is frustrated (negative sentiment detected)
- Question is too complex (AI confidence low)
- Issue requires manual intervention (special requests, custom orders)
- After X failed responses (AI couldn't help)

**Handoff Process:**
- AI sends message: "I'll connect you with a colleague. One moment please."
- Conversation marked for agent attention
- Dashboard shows "Wants Human Agent" flag
- Agent can join conversation immediately
- Smooth transition (customer doesn't need to repeat themselves)

---

## 🎯 Customer Journey Intelligence

### Session Tracking

**What Gets Tracked:**
- Pages visited (URLs, page types, product pages)
- Time spent on each page
- Scroll depth (how far down page customer scrolled)
- Cart actions (add to cart, remove from cart)
- Cart value (total items and price)
- Device type (mobile, tablet, desktop)
- Screen size
- Traffic source (where customer came from)
- UTM parameters (marketing campaigns)

**Privacy:**
- All data shop-specific (isolated)
- No cross-shop tracking
- GDPR compliant
- Deleted on shop uninstall

---

### How AI Uses Journey Data

**Cart Context:**
- Customer: "What's in my cart?"
- AI: "You have 3 items: Summer Dress (€39.90), Sunglasses (€19.90), Beach Bag (€29.90). Total: €89.70"
- Source: Live cart snapshot from session tracking

**Product Interest Detection:**
- Customer viewed "Blue Sneakers" for 45 seconds, scrolled 80%
- Customer asks: "Do you have comfortable shoes?"
- AI prioritizes "Blue Sneakers" in response (journey-aware RAG boost)

**Purchase Intent Scoring:**
- High cart value (€100+) = Ready to buy (score: 70-100)
- Visited cart page + multiple products = Considering (score: 40-70)
- Browsing products, low engagement = Interested (score: 20-40)
- Just landed on homepage = Browsing (score: 0-20)

**Conversion Signals:**
- High cart value → AI offers discount (if configured)
- Deep scroll on product → AI asks "Would you like help with sizing?"
- Removed item from cart → AI asks "Can I help you find something else?"
- Long session time → AI recognizes serious buyer

---

### Page Type Detection

**Tracked Page Types:**
- **Product** - Specific product pages (captures product handle, title, price)
- **Collection** - Category/collection pages
- **Cart** - Shopping cart page
- **Checkout** - Checkout page
- **Home** - Homepage
- **Search** - Search results page
- **Account** - Customer account pages
- **Blog** - Blog articles
- **Page** - Custom pages (About, FAQ, etc.)
- **Other** - Any other page type

**How AI Uses This:**
- Customer on product page opens chat → AI knows which product they're viewing
- Customer on cart page → AI knows they're considering purchase
- Customer on checkout → AI can offer help with checkout issues

---

## 🎁 AI Discount Code Generation

### Automatic Discount Offers

**Merchant Configuration:**
- Enable/disable discount feature
- Set discount type: Percentage (e.g., 20% OFF) or Fixed Amount (e.g., €10 OFF)
- Set discount value
- Set validity period (e.g., 7 days)
- Set max uses per customer (e.g., 1)
- Set max uses per day (shop-wide limit)

**AI Triggers (Configurable):**
1. **Explicit Ask** - Customer asks: "Do you have a discount?"
2. **Hesitant Customer** - Customer says "Too expensive" AND cart value > €30
3. **First-Time Only** - Only offer to new customers
4. **Returning Only** - Only offer to returning customers

**Discount Creation:**
- AI creates unique code (e.g., "AI20-XYZ123")
- Code auto-generated with merchant prefix
- Valid for configured days
- Linked to customer email (tracking)
- One-time use per customer (if configured)

**Customer Experience:**
- AI mentions discount naturally: "I've got 20% off for you! 🎁"
- Discount card appears with code
- Customer can copy code or apply directly to cart
- Expiry countdown shown

**Rate Limiting:**
- AI won't offer multiple discounts to same customer
- Shop-wide daily limit prevents abuse
- AI informs customer if they already received code

---

## 🔔 Proactive Chat Notifications

### Behavioral Triggers

**What Merchants Can Configure:**
1. **Welcome Message**
   - Fires when: Customer lands on homepage
   - Delay: After X seconds (e.g., 10 seconds)
   - Message: "Welcome! Need any help finding something?"

2. **Product Page Help**
   - Fires when: Customer on specific product or category
   - Delay: After browsing for X seconds
   - Message: "Questions about this product? I'm here to help!"

3. **Cart Abandonment**
   - Fires when: Customer on cart page for X seconds
   - Message: "Need help with checkout? Or maybe a discount? 😊"

4. **Checkout Assistance**
   - Fires when: Customer on checkout page
   - Message: "Almost there! Any questions before you complete your order?"

5. **Sale Announcements**
   - Fires when: Customer visits site (sitewide)
   - Message: "🔥 Flash Sale: 25% OFF everything until midnight!"

**Trigger Configuration:**
- **Fire Mode:**
  - Sitewide (any page)
  - Specific path (e.g., /collections/summer)
  - Homepage only
  - Product pages only
  - Cart page only
  - Checkout page only

- **Delay:** Time before message appears (seconds)

- **Frequency:**
  - Once per session (shows once, won't repeat)
  - Always (shows every time conditions met)

- **Priority:** If multiple triggers match, highest priority fires first

---

### Proactive Message Appearance

**Visual Design:**
- Purple gradient background (distinctive proactive messages)
- Different from regular AI messages (customer knows it's proactive)
- Smooth slide-in animation
- Widget auto-opens with bounce effect
- Message appears instantly

**Customer Experience:**
1. Customer browsing shop
2. Trigger condition met (e.g., 10 seconds on homepage)
3. Chat bubble bounces/pulses
4. Widget auto-opens
5. Proactive message appears with purple gradient
6. Customer can reply or dismiss
7. If customer replies → Conversation continues normally
8. AI responds based on customer's reply

**Dismissal:**
- Customer can close widget
- Message persists (not spam)
- Won't trigger again that session (if frequency = once per session)

---

## 👥 Team Agent Features

### Online Agent Presence

**What Customers See:**
- Row of agent profile pictures on Home tab
- Green online indicator dot
- Agent name on hover
- Real-time updates (agents come online/offline)

**How It Works:**
- Real-time presence detection (Ably)
- Only shows agents currently online
- Updates instantly (no page refresh needed)
- If no agents online → Section hidden (clean UI)

**Agent Information:**
- Profile picture (uploaded by merchant)
- Agent name
- Online status (green dot)
- Role/title (if configured)

**Benefits:**
- Customers know support is available
- Increases trust and engagement
- Shows human touch (not just AI)
- Encourages starting conversation

---

### Agent Join Notifications

**What Customers See:**
- System message: "👤 John has joined the conversation"
- Agent profile picture appears in header
- "AI + Team" label updates to agent name
- Online indicator shows green

**Behavior:**
- Smooth transition from AI to human
- Previous messages stay visible
- Customer doesn't need to repeat information
- Agent has full conversation history

---

## 📰 News & Updates

### Widget News Feed

**What Merchants Can Configure:**
- News title
- News description/excerpt
- Optional image
- Link URL (optional)
- Published date
- Enable/disable individual news items

**What Customers See:**
- News cards on Home tab
- Latest news first
- Up to 5 news items shown
- Click to read more (opens link in new tab)
- Beautiful card design with images

**Use Cases:**
- Announce sales and promotions
- Share new product launches
- Highlight featured collections
- Seasonal campaigns
- Store updates and announcements

**Example News Items:**
- "🔥 Summer Sale - 30% OFF Everything!"
- "✨ New Arrivals: Fall Collection 2024"
- "📦 Free Shipping on Orders Over €50"
- "💝 Holiday Gift Guide Now Available"

---

## ⚡ Real-Time Features

### Instant Message Delivery

**Technology:**
- Powered by Ably Chat SDK
- Messages delivered in <100ms
- No page refresh needed
- WebSocket connection (always-on)

**Features:**
- Typing indicators (customer sees "AI is typing...")
- Read receipts (if enabled)
- Online/offline status
- Connection status banner
- Auto-reconnect if connection lost

---

### Message Batching

**Smart Batching:**
- Customer sends multiple messages quickly:
  - "Hello"
  - "Do you have lipstick?"
  - "And lip gloss?"
- AI waits 2.5 seconds after last message
- Responds to ALL messages together in one response
- Better UX (one comprehensive answer vs. three fragmented ones)

**Benefits:**
- Reduces API costs (1 call instead of 3)
- Better AI context (sees full question)
- Cleaner conversation flow
- No race conditions

---

### Connection Resilience

**Network Issues Handled:**
- Lost connection → "Reconnecting..." banner
- Auto-retry (exponential backoff)
- Message queue (sends when reconnected)
- No messages lost
- Success banner when restored

**Offline Support:**
- Messages stored locally if offline
- Sent when connection restored
- Graceful degradation

---

## 🎯 Advanced AI Features

### Context-Aware Responses

**AI Has Access To:**
1. **Complete Product Catalog**
   - All products, descriptions, prices, variants, stock levels

2. **Customer's Order History**
   - All orders (last 60 days)
   - Order status, tracking, line items
   - Purchase patterns

3. **Shop Policies**
   - Return policy, shipping policy, terms of service, privacy policy

4. **Content Pages**
   - FAQ pages, about us, sizing guides, care instructions

5. **Blog Articles**
   - All blog posts and guides

6. **Current Session**
   - Pages viewed this visit
   - Products viewed
   - Cart contents (live)
   - Time on site
   - Device type

7. **Conversation History**
   - All messages in current conversation
   - Previous conversations (if returning customer)

**Result:**
- AI gives highly specific, accurate answers
- No generic responses
- Understands full context
- Personalized to each customer

---

### Adaptive Response Style

**AI Adapts Based on Shop Type:**

**Fashion Shops:**
- Mentions sizes, colors, fit
- Suggests style combinations
- Uses fashion terminology
- "Das passt super zu Jeans!"

**Electronics Shops:**
- Mentions technical specs
- Checks compatibility
- Highlights warranty
- "Funktioniert mit iPhone und Android!"

**Food & Beauty Shops:**
- Highlights ingredients
- Mentions certifications (vegan, organic)
- Notes allergens
- "Tierversuchsfrei und vegan!"

**Home & Furniture:**
- Mentions dimensions
- Material information
- Care instructions
- "Aus Massivholz, pflegeleicht!"

**Auto-Detection:**
- AI analyzes product catalog
- Detects shop type automatically
- Adapts response style accordingly

---

### Urgency Scoring

**AI Calculates Urgency (0-10 scale):**
- Low urgency (0-3): General questions, browsing
- Medium urgency (4-6): Product questions, pre-sale
- High urgency (7-8): Order issues, delivery questions
- Critical urgency (9-10): Complaints, urgent problems

**Impact:**
- High urgency → Faster handoff to humans
- Critical urgency → Immediate agent notification
- Low urgency → AI handles completely
- Merchants see urgency in dashboard

---

### Confidence Scoring

**AI Rates Its Own Answers (0-100):**
- High confidence (80-100): "I have specific info from your shop data"
- Medium confidence (50-79): "I can answer based on general knowledge"
- Low confidence (0-49): "I'm not sure, let me connect you with an agent"

**Benefits:**
- AI knows when it doesn't know
- Prevents hallucinations
- Triggers human handoff when uncertain
- Quality control built-in

---

### Resolution Status

**AI Tracks Conversation Status:**
- **Resolved** - Question fully answered, customer satisfied
- **Needs Human** - Recommend human agent takeover
- **Pending** - Waiting for more information

**Impact:**
- Dashboard shows resolution rate
- Merchants see which conversations need attention
- AI learns from successful resolutions

---

## 💡 Smart Features

### Email Collection (Proactive Chats)

**Scenario:**
- Customer receives proactive notification
- Customer doesn't fill intro form (no email provided)
- Customer replies to proactive message

**AI Behavior:**
1. AI responds warmly to customer's message first
2. AI asks for name and email naturally: "Gerne! Wie heißt du und was ist deine E-Mail?"
3. Customer provides: "Max, max@example.com"
4. AI extracts name and email intelligently
5. AI confirms: "Super, danke Max! Hab's gespeichert. 😊 Was kann ich für dich tun?"
6. Conversation continues normally

**Name Extraction Intelligence:**
- Handles any format: "Max, max@...", "max@... (Max)", "Name: Max, Email: max@..."
- Works in all languages
- Capitalizes names properly ("max" → "Max")
- Validates email format
- Stores in database

---

### Message Batching Intelligence

**Problem:** Customer sends rapid messages
- "Hello"
- "Do you have lipstick?"
- "And lip gloss?"

**Old Behavior:**
- 3 separate AI responses (fragmented, confusing)

**New Behavior:**
- AI waits 2.5 seconds after last message
- Combines all 3 messages
- Sends one comprehensive response
- Better UX, lower costs

---

### Order Number Detection

**AI Automatically Detects:**
- Order numbers in any format: "#1234", "1234", "Bestellung 1234", "Order #1234"
- Works in all languages
- Stores parsed order number
- Uses for future tracking requests

**Email Verification:**
- Customer provides order number
- AI asks for email if not already provided
- Verifies email matches order
- If mismatch: "Email doesn't match, please provide correct email"
- If match: Shows order details + tracking

**Security:**
- Prevents unauthorized order access
- Email verification required
- Partial email logging (privacy)

---

### Product Interest Signals

**AI Detects Purchase Intent:**
- Cart value > €50 → High intent (score: +40 points)
- Visited cart page → Considering purchase (+30 points)
- 5+ page views → Highly engaged (+15 points)
- Deep scroll on products → Serious interest (+10 points)
- 3+ minutes on site → Time invested (+10 points)
- Added to cart 2+ times → Strong intent (+15 points)
- Removed from cart → Hesitation (-10 points)

**Total Score Ranges:**
- 70-100: Ready to buy
- 40-70: Considering
- 20-40: Interested
- 0-20: Browsing

**AI Uses This For:**
- Personalized recommendations
- Discount timing (offer when hesitant)
- Response urgency
- Agent handoff priority

---

## 🎭 Message Types & Rendering

### Text Messages

**Standard Messages:**
- Plain text responses
- Markdown support (bold, italic, lists)
- Hyperlinks (clickable, open in new tab)
- Emojis supported
- Multi-line messages
- Code blocks (if needed)

**System Messages:**
- "Agent joined" notifications
- "AI takeover" notifications
- "Chat closed" notifications
- Connection status updates

---

### Product Cards (Visual)

**Structure:**
- Product image (full width, 16:9 ratio)
- Product title (bold, 2 lines max)
- Price (large, formatted with currency)
- Stock status (if low: "Only 3 left!")
- Description (2-3 lines, truncated with "...")
- "View Product" button (dark, full width)

**Interactions:**
- Hover effect on button
- Click anywhere on card → Opens product page
- Smooth animations
- Mobile-optimized (touch-friendly)

**Rendering:**
- Up to 3 products per AI response
- Stacked vertically
- Proper spacing (16px gap)
- Responsive width

---

### Discount Cards (Visual)

**Structure:**
- 🎁 Gift icon
- "Discount Code" title
- Code display (large, monospace font)
- Discount value ("20% OFF" or "€10 OFF")
- Validity ("Valid for 7 days")
- Copy button
- "Apply to Cart" button

**Interactions:**
- Click code → Copies to clipboard
- Shows "Copied!" feedback (green checkmark)
- Click "Apply to Cart" → Code applied, shows success
- Hover effects on buttons
- Expiry countdown

**Visual States:**
- Default: White card, dark text
- Copying: Green highlight
- Applied: Green border, checkmark
- Expired: Gray, disabled

---

### Tracking Cards (Visual)

**Structure:**
- 📦 Package icon + "Package Tracking" title
- Carrier logo (DHL, UPS, FedEx, etc.)
- Carrier name
- Tracking number (clickable to copy)
- "Track Package" button (gradient purple-pink)

**Interactions:**
- Click tracking number → Copies to clipboard, shows "Copied!"
- Click "Track Package" → Opens carrier's tracking page in new tab
- Hover effects (card lifts slightly)
- Smooth transitions

**Carrier Logos:**
- Auto-detected from carrier name
- Shows logo for: DHL, UPS, FedEx, DPD, Hermes, GLS, Deutsche Post
- Fallback: 🚚 emoji if carrier unknown

---

### Checkout Link Cards (Visual)

**Structure:**
- "Ready to Checkout" title
- Product list:
  - Each product: thumbnail + name + quantity×price
  - Up to 3 products shown
  - "And X more items" if more products
- Discount badge (if discount applied)
- Total price (large, bold)
- "Checkout Now" button (gradient purple-pink)
- "Secure checkout" label

**Interactions:**
- Click product → Opens product page
- Click "Checkout Now" → Redirects to Shopify checkout
- Pre-filled cart (all products added)
- Discount auto-applied
- One-click purchase experience

---

## 🌍 Internationalization (i18n)

### Supported Languages

**Full Interface Translation:**
- German (de)
- English (en)
- French (fr)
- Spanish (es)
- Italian (it)
- Portuguese (pt, pt-br)
- Dutch (nl)
- Swedish (sv)
- Norwegian (no)
- Danish (da)
- Polish (pl)
- Finnish (fi)
- Czech (cs)
- Turkish (tr)
- Greek (el)
- Romanian (ro)
- Hungarian (hu)
- Hebrew (he)
- Arabic (ar)
- Russian (ru)
- Hindi (hi)
- Japanese (ja)
- Korean (ko)
- Chinese Simplified (zh-cn)
- Chinese Traditional (zh-tw)
- Thai (th)
- Indonesian (id)
- Vietnamese (vi)
- Malay (ms)
- And more...

**What Gets Translated:**
- Tab labels ("Home", "Messages", "Chats")
- Button text ("Send", "Copy", "View Product")
- Placeholders ("Type your message...")
- System messages ("Agent joined", "Reconnecting...")
- Empty states ("No conversations yet")
- Date formatting ("Today", "Yesterday", "2 hours ago")
- All UI elements

**Language Selection:**
- Automatic based on shop's primary language
- Can be overridden per shop
- Customer sees interface in their language
- AI responds in detected customer language (separate from UI language)

---

## 📊 Conversation Management

### Conversation Persistence

**How It Works:**
- Each conversation gets unique ID
- All messages stored in database
- Conversation survives page refresh
- Customer can leave site and return
- History preserved across sessions

**Conversation States:**
- **Active** - Currently ongoing
- **Closed** - Manually closed by agent
- **Auto-closed** - No activity for X days (configurable)

**Customer Experience:**
- Open widget → See active conversation
- Switch tabs → Conversation state preserved
- Close browser → Conversation saved
- Return next day → Continue where left off

---

### Unread Message Tracking

**Visual Indicators:**
- Red badge on chat bubble (shows count)
- Blue dot on Messages tab
- Blue dot on Chats tab
- Bold text for unread conversations
- Unread count per conversation

**Behavior:**
- Badge updates in real-time
- Cleared when customer opens widget
- Cleared when customer reads message
- Persists across page reloads
- Stored in local storage

---

### Conversation List Features

**Sorting:**
- Most recent first
- Unread conversations prioritized
- Active conversations at top

**Filtering:**
- Show all conversations
- Filter by category (if implemented)
- Search conversations (if implemented)

**Pagination:**
- 10 conversations per page
- "Load more" button
- Infinite scroll (if configured)
- Performance optimized

---

## 🔐 Security & Privacy

### Data Protection

**Customer Messages:**
- Encrypted in transit (TLS 1.3)
- Stored securely in database
- Shop-isolated (no cross-shop access)
- GDPR compliant

**Email Verification:**
- Required for order tracking
- Prevents unauthorized access
- Email matching required
- Privacy-preserving logging

**XSS Protection:**
- All customer input sanitized
- HTML escaped
- Safe link handling
- No script injection possible

**Session Security:**
- Secure session IDs
- Local storage encryption (if sensitive)
- Auto-logout after inactivity (optional)

---

## 📱 Mobile Optimization

### Responsive Design

**Mobile Phones:**
- Full-screen widget
- Native app feeling
- Bottom input bar (always visible)
- Proper keyboard handling
- Safe area respect (notch support)
- Thumb-friendly buttons

**Tablets:**
- Optimized for touch
- Larger tap targets
- Split-screen support
- Landscape mode optimized

**Desktop:**
- 400px × 680px floating window
- Fixed position (bottom-right)
- Resizable (if configured)
- Keyboard shortcuts (Esc to close)

---

### Mobile-Specific Features

**Viewport Handling:**
- Dynamic height calculation (real viewport, not 100vh)
- Keyboard resize handling (input stays visible)
- iOS Safari specific fixes
- Android Chrome optimizations

**Performance:**
- 60 FPS animations (GPU-accelerated)
- Smooth scrolling
- Touch gestures optimized
- No lag or jank

**Accessibility:**
- Large touch targets (44px minimum)
- High contrast text
- Screen reader support
- Focus management

---

## 🎨 Customization Options

### Merchant Configuration

**Visual Customization:**
- Widget position (bottom-right, bottom-left, etc.)
- Theme (light/dark - if implemented)
- Primary color (brand color)
- Logo display (show shop logo)
- Agent avatars (upload agent photos)

**Behavior Configuration:**
- Auto-open on page load (yes/no)
- Auto-open delay (seconds)
- Show online agents (yes/no)
- Show news feed (yes/no)
- Max news items (1-10)
- Enable file uploads (yes/no)
- Enable emoji picker (yes/no)

**Content Customization:**
- Home greeting message (custom text)
- Intro form fields (name, email, order number, message)
- Placeholder texts
- Button labels
- Empty state messages

**AI Configuration:**
- Enable/disable AI auto-response
- Enable/disable discount codes
- Discount triggers (explicit ask, hesitant customer, etc.)
- Discount type (percentage, fixed amount, free shipping)
- Discount value
- Discount validity days
- Max discounts per customer/day

**Proactive Chat:**
- Create unlimited triggers
- Configure fire conditions
- Set delays and frequency
- Assign priorities
- Enable/disable per trigger

---

## 📈 What Merchants See (Brief)

**Note:** Full dashboard documentation in separate file. This section covers only what relates to widget functionality.

**Conversation Indicators:**
- "Wants Human Agent" flag (when customer requests human)
- Category badges (Product, Support, Delivery, etc.)
- Sentiment indicators (Positive, Neutral, Negative)
- Urgency score (visual priority)
- Unread count
- Active/closed status

**AI Insights:**
- Customer segment (New, Returning, VIP)
- Purchase intent score
- Detected language
- Confidence score
- Resolution status

---

## 🎯 Customer Experience Flow

### Scenario 1: Product Question

1. Customer opens chat widget
2. Sees Home tab (greeting, news, online agents)
3. Clicks "Start conversation"
4. Types: "Do you have red sneakers?"
5. AI responds in 1-2 seconds: "Yes! We have several red sneakers. Here are my top picks for you:"
6. 3 product cards appear (Red Sneaker A, B, C)
7. Customer clicks product card → Opens product page in new tab
8. Returns to chat: "Do you have size 42?"
9. AI: "Yes! Size 42 is available for the Nike Air Max. Still 15 in stock!"
10. Customer: "Perfect, thanks!"
11. AI: "You're welcome! Anything else I can help with?"

---

### Scenario 2: Order Tracking

1. Customer opens widget
2. Types: "Where is my order #5678?"
3. AI: "I'd be happy to help! What's your email address for verification?"
4. Customer: "max@example.com"
5. AI verifies email matches order
6. AI: "Found your order! It was shipped on Nov 3rd via DHL and should arrive today."
7. Tracking card appears (DHL logo, tracking number, "Track Package" button)
8. Customer clicks "Track Package" → Opens DHL tracking page
9. Customer: "Thanks!"
10. AI: "You're welcome! Let me know if you need anything else!"

---

### Scenario 3: Discount Request

1. Customer on cart page (€85 in cart)
2. Customer opens chat: "Do you have any discount codes?"
3. AI (if discounts enabled): "Absolutely! Let me create a code for you! 🎁"
4. Discount card appears: "AI20-XYZ123", "20% OFF", "Valid for 7 days"
5. Customer clicks "Apply to Cart"
6. Success message: "Discount applied!"
7. Customer proceeds to checkout with discount active

---

### Scenario 4: Human Handoff

1. Customer: "I received the wrong color. I need to return this."
2. AI: "I understand you received the wrong color. Our return policy allows returns within 30 days. I'll connect you with a colleague who can help with the return process right away."
3. System message: "👤 Sarah has joined the conversation"
4. Agent Sarah: "Hi! I'm sorry about the mix-up. I'll help you with the return. Can you tell me your order number?"
5. Customer provides details
6. Agent processes return
7. Seamless handoff (customer didn't need to repeat issue)

---

### Scenario 5: Proactive Engagement

1. Customer lands on homepage
2. After 10 seconds, chat bubble pulses
3. Widget auto-opens with bounce animation
4. Purple gradient message appears: "🔥 Welcome! We're having a flash sale - 25% OFF everything today!"
5. Customer: "Really? Even on the summer collection?"
6. AI (re-categorizes conversation to "Presale"): "Yes! The discount applies to everything including our summer collection. Want me to show you some highlights?"
7. Customer: "Yes please!"
8. AI sends 3 product cards from summer collection
9. Conversation continues...

---

## 🎯 Key Differentiators

### 1. Zero Configuration for Customers
- No account needed
- No email required upfront (collected naturally if needed)
- No forms to fill (optional intro form)
- Just click and chat

### 2. Multi-Tab Interface
- Clean separation of concerns
- Easy navigation
- Familiar UX pattern
- Professional appearance

### 3. Intelligent AI
- Understands context
- Knows shop's products
- Access to customer's orders
- Aware of customer journey
- Adapts response style

### 4. Visual Cards
- Product recommendations with images
- Discount codes with one-click apply
- Order tracking with carrier logos
- Checkout links for instant purchase

### 5. Seamless Human Handoff
- AI knows when to escalate
- Agent has full context
- No information loss
- Smooth transition

### 6. Real-Time Everything
- Instant message delivery
- Live typing indicators
- Real-time agent presence
- Connection status

### 7. Proactive Engagement
- Behavioral triggers
- Automated messages
- Cart abandonment prevention
- Welcome messages

---

## 📝 Summary

The Live Chat Widget is a comprehensive real-time support solution that combines:

**For Customers:**
- Easy-to-use chat interface
- Instant AI responses
- Product recommendations
- Order tracking
- Discount codes
- Human agent support
- Multi-device support
- Previous conversation access

**For Merchants:**
- Automated customer support
- Reduced agent workload
- Increased conversions (discounts, recommendations)
- Customer insights (sentiment, intent, journey)
- Real-time agent handoff
- Proactive engagement
- Zero maintenance

**Core Capabilities:**
- Multi-tab navigation (Home, Messages, Chats)
- AI responses in <2 seconds
- Product, discount, tracking, checkout cards
- 100+ language support
- Session tracking & customer journey
- Proactive chat triggers
- Real-time presence
- Email collection
- Order verification
- Smart message batching
- Offline resilience

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2024  
**Status:** ✅ Complete - Feature Documentation Only

