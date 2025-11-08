# 📊 Live Chat Dashboard - Complete Feature Documentation

> **Agent Interface for Managing Real-Time Customer Conversations**

---

## 📋 Overview

The Live Chat Dashboard is where agents and shop owners manage customer conversations. It provides a professional 3-column interface for viewing conversations, chatting with customers, and accessing detailed customer information.

---

## 🗂️ Dashboard Sub-Navigation

The Live Chat section has 4 main areas accessible via tabs:

1. **Live Chats** - Main conversation management area
2. **Proactive Chat** - Configure automated messages
3. **Newsfeed** - Manage news items shown in widget
4. **AI Discounts** - Configure AI discount code generation

---

## 💬 Live Chats (Main Dashboard)

### Layout Overview

**3-Column Design:**
- **Column 1 (Left):** Conversation list with filters
- **Column 2 (Middle):** Active conversation with chat messages
- **Column 3 (Right):** Customer information and insights

**Responsive:**
- Desktop: All 3 columns visible
- Tablet: Columns 1+2 visible, Column 3 hidden
- Mobile: One column at a time (back button to return to list)

---

## 📋 Column 1: Conversation List

### Header Section

**Page Title:**
- "Live Chats" heading
- "LIVE" badge (green dot, pulsing animation)
- Shows real-time nature of dashboard

**Search Bar:**
- Search by customer name
- Search by email
- Search by message content
- Live filtering (instant results)

---

### Status Tabs

**Two Status Views:**

1. **Active**
   - Shows open/pending conversations
   - Customers waiting for response
   - Default view when opening dashboard
   - Count badge shows number of active chats

2. **Resolved**
   - Shows closed conversations
   - Archived/completed chats
   - Historical reference
   - Count badge shows total resolved

**Behavior:**
- Click tab to switch view
- Active highlighted with dark background
- Counts update in real-time
- Smooth transition between views

---

### Category Filters

**Collapsible Filter Section:**
- Click to expand/collapse category chips
- Shows active filter or "All Categories"
- Clear button to reset filters

**Available Categories:**

1. **🎯 Proactive** (Purple highlight)
   - Automated proactive messages
   - System-initiated conversations
   - High visibility (separate from other categories)

2. **😡 Complaint**
   - Customer complaints
   - Negative feedback
   - Priority handling needed

3. **↩️ Return**
   - Return requests
   - Refund inquiries
   - Order cancellations

4. **💬 Support**
   - General help requests
   - Questions and assistance
   - Default category

5. **🛍️ Presale**
   - Questions before purchase
   - Shipping inquiries
   - Policy questions

6. **📦 Product**
   - Product questions
   - Feature inquiries
   - Availability checks

7. **🤝 Cooperation**
   - Business inquiries
   - Wholesale requests
   - Partnership opportunities

8. **🚚 Delivery**
   - Order tracking
   - Shipping status
   - Delivery questions

9. **🚫 Spam**
   - Spam messages
   - Auto-filtered
   - Low priority

10. **💳 Billing**
    - Payment issues
    - Invoice questions
    - Billing disputes

**Filter Behavior:**
- Click category chip to filter
- Shows count per category
- Active category highlighted (black background)
- Multiple filters not supported (one at a time)
- Categories assigned automatically by AI

---

### Agent Request Toggle

**Checkbox Filter:**
- "Show only agent requests"
- Shows conversations where `wants_human_agent = true`
- Customer explicitly asked for human agent
- Or AI determined human handoff needed

**Use Cases:**
- Agent wants to see only urgent requests
- Filter out AI-handled chats
- Focus on human-needed conversations

---

### Conversation List Items

**Each Conversation Shows:**

1. **Customer Avatar**
   - Circular avatar with initials
   - Gradient background (unique per customer)
   - Visual identification

2. **Customer Name**
   - Bold text
   - Truncated if too long
   - Click to open conversation

3. **Email Address**
   - Small gray text below name
   - Truncated if too long

4. **Last Message Preview**
   - First ~50 characters of last message
   - Gray text
   - Shows what conversation is about

5. **Timestamp**
   - "2 minutes ago", "1 hour ago", "Yesterday"
   - Relative time format
   - Auto-updates (e.g., "2 min" becomes "3 min")

6. **Category Badge**
   - Small pill (e.g., "Product", "Support")
   - Color-coded by category
   - Assigned by AI, can change during conversation

7. **Handler Badge (if agent handling):**
   - Shows agent name
   - "👤 Sarah" format
   - Indicates conversation is taken
   - Other agents see it's occupied

8. **Wants Human Agent Indicator:**
   - 🙋 Red badge "Agent Request"
   - Shows if customer requested human
   - High visibility for agents

9. **Unread Indicator:**
   - Blue dot for unread messages
   - Bold text for unread conversations
   - Count badge (e.g., "3") if multiple unread

10. **Online Status:**
    - Green dot if customer currently online
    - Real-time presence tracking
    - Updates instantly

**List Behavior:**
- Click conversation → Opens in Column 2
- Selected conversation highlighted
- Smooth scroll to selected item
- Real-time updates (new messages appear instantly)
- Auto-sort by last message time (most recent first)

**Loading States:**
- Skeleton placeholders while loading
- Smooth transition to actual data

**Empty States:**
- "No conversations" if no chats
- "No results" if filters return nothing
- Helpful message with icon

---

## 💬 Column 2: Chat Window

### Chat Header

**Customer Information:**
- Customer name (bold)
- Customer email (small text)
- Online status indicator (green dot if online)

**Action Buttons:**

1. **Take Over** (Blue button)
   - Available when: AI is handling conversation
   - Click to take control of conversation
   - AI stops responding, agent can type
   - Other agents see conversation is now handled by you
   - Button text: "Take Over"

2. **Transfer** (Gray button)
   - Available when: You are handling conversation
   - Click to release conversation
   - Makes available for other agents
   - Your name removed from conversation
   - Button text: "Transfer"

3. **Give to AI** (Green button)
   - Available when: You are handling conversation
   - Click to hand conversation back to AI
   - AI resumes automatic responses
   - Useful after answering complex question
   - Button text: "Give to AI"

4. **Close** (Red button)
   - Available always
   - Click to close conversation
   - Marks as resolved
   - Also closes chat on customer side (widget)
   - Customer sees "Chat has been closed" message
   - Conversation moves to "Resolved" tab
   - Button text: "Close"

5. **Back Button** (Mobile only)
   - Arrow icon
   - Returns to conversation list
   - Mobile navigation

6. **Info Button** (Mobile only)
   - Info icon
   - Opens customer details panel in modal
   - Shows Column 3 content on mobile

**Handler Status Display:**
- **"🤖 AI is handling"** - Green badge, AI auto-responding
- **"👤 Handled by [Name]"** - Blue badge, shows agent name
- **"You are handling this chat"** - Blue badge, your conversation
- **"🙋 Customer wants agent"** - Red badge, handoff requested

**Real-Time Updates:**
- Handler status updates instantly across all dashboards
- Multiple agents see same status simultaneously
- Prevents double-handling

---

### Messages Area

**Message Display:**

**Customer Messages (Right side):**
- Light gray background
- Customer name above message
- Timestamp below (e.g., "14:32")
- Text content
- Right-aligned

**AI Messages (Left side):**
- White background
- "ReplAI" sender name
- 🤖 AI badge
- Timestamp
- Text content
- Left-aligned

**Agent Messages (Left side):**
- White background
- Agent name (e.g., "Sarah")
- Agent profile picture (if uploaded)
- Timestamp
- Text content
- Left-aligned
- Optional signature (if agent configured)

**System Messages (Center):**
- Gray background
- Centered text
- No avatar
- Examples:
  - "👤 Sarah has joined the conversation"
  - "🤖 AI is now handling this conversation"
  - "💬 Chat has been closed"

**Special Message Types:**

1. **Product Cards**
   - Product image
   - Product title
   - Price
   - Stock status
   - "View Product" button
   - Click to open product page

2. **Discount Cards**
   - 🎁 Gift icon
   - Discount code (e.g., "SAVE20")
   - Discount value (e.g., "20% OFF")
   - Expiry date
   - Copy button
   - Apply to cart button

3. **Tracking Cards**
   - 📦 Package icon
   - Carrier logo
   - Tracking number
   - "Track Package" button
   - Clickable link to carrier site

4. **Checkout Link Cards**
   - Product thumbnails
   - Total price
   - "Checkout Now" button
   - Pre-filled cart for customer

**Message Features:**
- Clickable links (open in new tab)
- Emoji support
- Multi-line text
- HTML sanitization (safe rendering)
- Timestamps for each message
- Date separators ("Today", "Yesterday")

**Typing Indicator:**
- Shows when customer is typing
- Three bouncing dots
- "[Customer name] is typing..."
- Real-time via Ably
- Disappears when customer stops

**Auto-Scroll:**
- Automatically scrolls to bottom on new message
- Smooth scroll animation
- "Jump to latest" button if scrolled up

**Connection Status:**
- Green banner: "Connected"
- Yellow banner: "Reconnecting..."
- Red banner: "Disconnected" (rare)
- Auto-reconnect handled

---

### Composer (Message Input Area)

**Input Field:**
- Multi-line text area
- Placeholder: "Type your message..."
- Auto-grows with text (up to 5 lines)
- Shift+Enter for new line
- Enter to send

**Toolbar (Above Input):**

1. **😊 Emoji Picker**
   - Click to open emoji selector
   - Full emoji library
   - Click emoji → Inserts into message
   - Search emojis

2. **🎁 Discount Creator**
   - Click to open discount modal
   - Quick discount codes
   - Options: 10%, 15%, 20%, or custom
   - Sends discount card to customer
   - One click creation

3. **🛍️ Product Picker**
   - Click to open product selector modal
   - Full product catalog
   - Search products
   - Select multiple products
   - Choose variant (size, color, etc.)
   - Set quantity
   - Two send options:
     - Send as product cards (visual recommendations)
     - Create checkout link (pre-filled cart with optional discount)

**Send Button:**
- Paper plane icon
- Disabled when input empty
- Loading spinner while sending
- Keyboard shortcut: Enter

**Input Hints:**
- "Press Enter to send • Shift+Enter for new line"
- Shows "You are typing..." when agent types
- Small gray text below input

**Disabled States:**

1. **Conversation Closed:**
   - Shows: "✅ Conversation Closed"
   - Input disabled
   - Message: "Conversation was resolved at [time]"

2. **Another Agent Handling:**
   - Shows: "👤 [Agent Name] is handling this chat"
   - Input disabled
   - Message: "Only the assigned agent can reply"
   - Prevents conflicts

3. **AI Auto-Mode Active:**
   - Shows: "🤖 AI is handling this chat"
   - Input enabled (agent can still send if they take over)
   - Informational banner

---

## 📦 Product Picker Modal

### Interface

**Modal Appearance:**
- Large dialog (600px wide)
- Clean white background
- Header: "Send Products"
- Close button (X)

**Search Section:**
- Search bar at top
- 🔍 Search icon
- Placeholder: "Search products..."
- Live search (debounced)
- Searches: title, SKU, tags

**Product Grid:**
- 2-3 columns depending on screen size
- Product cards showing:
  - Product image
  - Product title
  - Price
  - Stock status (e.g., "23 in stock")
  - Checkmark if selected

**Product Selection:**
- Click product card to select
- Checkmark appears
- Click again to deselect
- Maximum 10 products per send
- Count shown in footer

**Selected Products Panel:**
- Shows all selected products
- Each selected product shows:
  - Product thumbnail
  - Product title
  - Variant selector (dropdown)
    - Options: Size, Color, etc.
    - Shows all available variants
    - Default: First available variant
  - Quantity selector
    - Number input (1-100)
    - Plus/minus buttons
  - Remove button (X)

**Variant Selection:**
- Dropdown per product
- Shows: "Size M / Color Red" or "Default"
- Updates price if variant price differs
- Shows stock for selected variant
- Variant-specific product URL generated

**Quantity Selection:**
- Number input field
- Min: 1, Max: 100
- Arrows to increment/decrement
- Validation (must be > 0)

---

### Send Options

**Bottom of Modal:**

**Option 1: Send as Product Cards**
- Button: "Send Products" (Blue button)
- Sends each product as visual card
- Customer sees product images, prices, descriptions
- Each card has "View Product" button
- Variant-specific URLs included

**Option 2: Create Checkout Link**
- Button: "Create Checkout Link" (Green button)
- Creates pre-filled Shopify cart
- All selected products + variants + quantities added
- Optional discount:
  - Click "Add Discount" toggle
  - Choose: 10%, 15%, 20%, or custom %
  - Discount auto-applied to cart
- Sends checkout link card to customer
- Customer clicks → Redirected to checkout with full cart

**Send Behavior:**
- Products sent instantly
- Appears in chat immediately
- Customer receives via widget
- Real-time delivery (Ably)
- Toast notification: "Products sent!"
- Modal closes automatically

---

## 🎁 Discount Creator Modal

### Interface

**Modal Appearance:**
- Clean dialog
- Header: "Create Discount Code"
- Close button

**Discount Type:**
- Radio buttons:
  - **Percentage** (e.g., 20% OFF)
  - **Fixed Amount** (e.g., €10 OFF)

**Quick Options:**
- Pre-defined buttons:
  - 10% OFF
  - 15% OFF
  - 20% OFF
  - Custom (enter custom value)

**Configuration Fields:**

1. **Discount Value**
   - Number input
   - If percentage: 1-100
   - If fixed: Any euro amount
   - Validation shown if invalid

2. **Validity Period**
   - Number input (days)
   - Default: 7 days
   - Expiry date calculated automatically
   - Shows: "Expires on [date]"

3. **Code Prefix** (Advanced)
   - Text input
   - Default: "AGENT"
   - Creates codes like: "AGENT20-XYZ123"
   - Uppercase letters only (2-10 chars)

4. **Usage Limit** (Advanced)
   - Once per customer
   - Unlimited
   - Custom number

**Preview:**
- Shows example code: "AGENT20-ABC123"
- Shows discount label: "20% OFF"
- Shows expiry: "Valid for 7 days"
- Visual preview of discount card

**Send Button:**
- "Create & Send Discount"
- Creates code in Shopify
- Saves to database
- Sends discount card to customer
- Toast: "Discount code sent!"
- Modal closes

**Error Handling:**
- Shopify API errors shown
- Rate limit warnings
- Invalid input validation
- Retry option

---

## 📝 Column 2: Conversation View

### Message Rendering

**Text Messages:**
- Plain text displayed
- Line breaks preserved
- URLs automatically clickable (open in new tab)
- Emojis rendered
- HTML escaped (security)

**Product Cards:**
- Full-width cards
- Product image (16:9 ratio)
- Title (bold, 2 lines)
- Price (large)
- Description (3 lines)
- Stock status if low
- "View Product" button (dark)
- Hover effects

**Discount Cards:**
- Gift icon 🎁
- "Discount Code" title
- Code display (large, monospace)
- Discount value badge
- Expiry countdown
- Copy button (click to copy code)
- "Apply to Cart" button
- Success states (green when copied)

**Tracking Cards:**
- Package icon 📦
- "Package Tracking" title
- Carrier logo (DHL, UPS, FedEx, etc.)
- Carrier name
- Tracking number (clickable to copy)
- "Track Package" button (purple-pink gradient)
- Opens carrier site in new tab

**Checkout Link Cards:**
- "Ready to Checkout" title
- Product list (thumbnails + names + quantities)
- Shows up to 3 products, "And X more" if more
- Discount applied badge (if discount included)
- Total price (large, bold)
- "Checkout Now" button (gradient)
- "Secure checkout" label

**Loading States:**
- Skeleton placeholders while loading messages
- Smooth fade-in when loaded
- "Loading conversation..." text

**Empty State:**
- If no messages yet (rare)
- Icon + message
- "No messages yet - Start the conversation!"

---

### Real-Time Features

**Instant Updates:**
- New messages appear without refresh
- Sent messages appear immediately
- Real-time via Ably Chat SDK
- <100ms latency

**Typing Indicators:**
- Shows when customer is typing
- Three animated dots
- "Customer is typing..."
- Disappears when customer stops

**Message Delivery:**
- Optimistic UI (message appears instantly)
- Checkmark when delivered
- Error state if failed (red)
- Retry button if error

**Connection Status:**
- Banner at top if connection issue
- "Reconnecting..." message
- Auto-reconnect attempts
- Success message when restored

---

## 👤 Column 3: Customer Info Panel

### Customer Header

**Customer Avatar:**
- Large circular avatar (64px)
- Initials displayed
- Gradient background (unique per customer)

**Customer Name:**
- Bold, large text
- Verified badge (green) if customer found in database
- Unknown badge (gray) if customer not in database
- Shopify link icon → Opens customer in Shopify Admin

**Email Address:**
- Displayed below name
- **Editable by Admin/Owner:**
  - Click pencil icon
  - Edit email inline
  - Save button (green)
  - Cancel button (gray)
  - Validation (must be valid email)
  - Updates conversation + re-fetches customer data
- Use case: Customer made typo in intro form

**Customer Tags:**
- **VIP Badge** (Orange)
  - Shows if total spent > €200
  - Indicates valuable customer
  
- **Returning Badge** (Green)
  - Shows if orders count > 1
  - Indicates repeat customer

**Customer Not Found Warning:**
- Yellow warning box
- Shows if email doesn't match any customer in database
- "⚠️ Unknown Customer"
- Message: "Email not found in customer database. May be first-time visitor."

---

### Customer Stats (if found)

**Information Rows:**
- **Phone:** Customer phone number (if available)
- **Total Orders:** Count of all orders
- **Total Spent:** Lifetime value in shop currency (e.g., "EUR 450.00")

**Shopify Link:**
- External link icon
- Opens customer profile in Shopify Admin
- New tab

---

### Current Order Section

**Displayed When:**
- AI found order number in conversation
- Customer asked about order
- Order linked to customer email

**Collapsible:**
- Click header to expand/collapse
- Arrow icon indicates state
- Default: Expanded

**Order Card:**
- Order number (e.g., "#1234")
- Fulfillment status badge (Fulfilled, Unfulfilled, Partial)
- Order date
- Item count

**Order Products List:**
- Each line item shows:
  - Product thumbnail (if available)
  - Product name
  - Quantity × Price
  - Variant info (size, color)
- Hover effects
- Clean card design

**Order Actions:**
- **View in Shopify** button
  - Opens order in Shopify Admin
  - New tab
  - Direct link to order details

- **Cancel Order** button (if supported)
  - Red button
  - Confirmation dialog
  - Calls Shopify API
  - Updates status
  - Toast notification

- **Cancel Line Item** buttons (if supported)
  - Per product
  - Partial cancellation
  - Refund handling

- **Tracking Info** display
  - Carrier name
  - Tracking number (copyable)
  - Tracking link

**Shipping Address:**
- Full address display
- Formatted nicely
- Collapsible section
- Copy button for full address

**Order Action History:**
- Shows previous actions taken
  - Cancellations
  - Refunds
  - Status changes
- Timestamp per action
- Agent who performed action

---

### AI Insights Section

**Collapsible:**
- Click header to expand/collapse
- Default: Expanded

**Insights Displayed:**

1. **Sentiment Journey**
   - Start sentiment → End sentiment
   - Visual: Emoji arrows (e.g., 😊 → 🤩)
   - Shows emotional progression
   - Updates as conversation continues

2. **Topic/Category**
   - Badge with category name
   - Examples: "Product", "Support", "Return"
   - Auto-assigned by AI
   - Can change during conversation

3. **AI Confidence**
   - Progress bar (0-100%)
   - Green bar
   - Percentage shown
   - Higher = AI more confident in responses

4. **Action Required**
   - Badge: "✅ Handled" (green) or "👋 Agent Request" (orange)
   - Shows resolution status
   - Indicates if human needed

5. **Conversation Stats**
   - Message count (💬 12 msg)
   - Duration (e.g., "15 min" or "2h 30m")
   - Quick overview

6. **Resolution Status**
   - Badge: "✓ Resolved" or "⏳ Pending"
   - Green if resolved, gray if pending

7. **Detected Language**
   - Language code (e.g., "DE", "EN", "FR")
   - Auto-detected by AI
   - Used for responses

**Visual Design:**
- Clean card design
- Row-based layout
- Labels on left, values on right
- Animated progress bars
- Color-coded badges

---

### Customer Journey Section

**Collapsible:**
- Click header to expand/collapse
- Default: Expanded

**Session Statistics:**

1. **Session Duration**
   - Total time on site
   - Format: "15m" or "2h 30m"
   - Real-time tracking

2. **Pages Visited**
   - Count of page views
   - Shows browsing depth

3. **Device Type**
   - Mobile, Tablet, or Desktop
   - Icon indicator

**Page Views Timeline:**
- Shows last 10 pages visited
- Each page shows:
  - Page type icon (🏠 Home, 📦 Product, 🛒 Cart, etc.)
  - Page title or product name
  - Price (if product page)
  - Time spent on page (e.g., "45s")
  - Scroll depth (e.g., "80% scrolled")
- Sorted chronologically (recent first)
- Clean card design per page
- Hover effects

**Page Types:**
- 🏠 Home - Homepage
- 📦 Product - Specific product
- 🗂️ Collection - Category page
- 🛒 Cart - Shopping cart
- 💳 Checkout - Checkout page
- 🔍 Search - Search results
- 👤 Account - Customer account
- 📰 Blog - Blog article
- 📄 Page - Other page

**Cart Contents (At Chat Start):**
- Shows what was in cart when customer opened chat
- Total value (e.g., "€89.70")
- Item count (e.g., "3 items")
- Product list:
  - Product thumbnail
  - Product title
  - Price × Quantity
- Clean card design matching order products

**Empty Cart:**
- If cart empty: "Cart: Empty"
- Simple text, no card

**Traffic Source:**
- Shows where customer came from
- Examples:
  - "Direct" (typed URL)
  - "Google / Organic"
  - "Facebook / Social"
  - "Email Campaign"
- UTM parameters parsed
- Referrer domain shown

**Conversion Tracking:**
- If customer purchased:
  - 💰 "Customer Converted!" banner (green)
  - Order number
  - Order value
  - Attribution score (0-100)
  - How much conversation contributed to sale

---

## 🎯 Proactive Chat Management

### Triggers List Page

**Header:**
- "Proactive Chat" title
- Description: "Automated messages triggered by customer behavior"
- Info: "Conversations auto-close after 3 hours if no reply"
- "Create Trigger" button (green, plus icon)

**Search & Filters:**
- Search bar (search by trigger name)
- Status filter tabs:
  - All
  - Enabled
  - Disabled

**Triggers Table:**

**Columns:**
1. **Status**
   - Toggle switch (enable/disable)
   - Instant update
   - No confirmation needed

2. **Name**
   - Trigger name (e.g., "Homepage Welcome")
   - Bold text
   - Click to edit

3. **Type**
   - Badge showing fire mode:
     - "Sitewide" (fires on any page)
     - "Specific Path" (fires on specific URL)
   - Color-coded

4. **Message**
   - Preview of message text
   - Truncated to ~50 chars
   - Gray text

5. **Sent**
   - Count of how many times trigger fired
   - Number (e.g., "147")

6. **Priority**
   - Priority number (1-10)
   - Higher = fires first if multiple triggers match
   - Outlined badge

7. **Actions**
   - Three-dot menu:
     - Edit (opens edit page)
     - Duplicate (creates copy)
     - Delete (confirmation dialog)

**Empty State:**
- Shows if no triggers
- Icon + message
- "Create your first automated proactive message"
- "Create First Trigger" button

---

### Create/Edit Trigger Page

**Configuration Fields:**

**1. Basic Settings:**

**Trigger Name**
- Text input
- Required
- Example: "Homepage Welcome Message"
- Internal label (customers don't see this)

**Enable/Disable**
- Toggle switch
- Trigger active or inactive
- Can configure while disabled, enable when ready

---

**2. Fire Conditions:**

**Fire Mode** (Dropdown)
- **Sitewide:** Fires on any page
- **Specific Path:** Fires on pages matching path
  - Additional field: Path contains (e.g., "/products/", "/collections/summer")
  - Matches if URL contains text

**Delay**
- Number input (seconds)
- How long to wait after page load before firing
- Example: "10" = fires 10 seconds after customer lands on page
- Min: 0, Max: 300 (5 minutes)

**Frequency**
- Radio buttons:
  - **Once per session:** Shows only once, won't repeat during same visit
  - **Always:** Shows every time conditions are met
- Use case: "Once" for welcome messages, "Always" for urgent announcements

**Priority**
- Number input (1-10)
- Default: 5
- If multiple triggers match, highest priority fires first
- Only one trigger fires per page load

---

**3. Message Content:**

**Message Text**
- Textarea (multi-line)
- Required
- The message customer sees
- Can include emojis
- Example: "🔥 Welcome! We're having a flash sale - 25% OFF everything today!"
- Preview shown below

**Button Configuration (Optional):**
- Add action button to message
- Button text (e.g., "Shop Now", "Learn More")
- Button action:
  - Open URL (e.g., "/collections/sale")
  - Apply coupon code (auto-applies to cart)
  - Start conversation (opens chat input)

---

**4. Preview:**
- Live preview of how message will look in widget
- Shows purple gradient proactive message design
- Button preview (if configured)
- Updates as you type

---

**5. Analytics (Edit Only):**
- Shown when editing existing trigger
- Statistics:
  - Times fired
  - Click-through rate (if button configured)
  - Conversations started
  - Conversion rate (if tracked)
- Graphs/charts showing performance over time

**Save Button:**
- "Save Trigger" (green)
- Validates all fields
- Shows errors if invalid
- Creates/updates trigger
- Toast notification: "Trigger saved!"
- Returns to triggers list

**Cancel Button:**
- "Cancel" (gray)
- Returns to triggers list
- Prompts if unsaved changes

---

## 📰 Newsfeed Management

### News Items List Page

**Header:**
- "Newsfeed Management" title
- Description: "Manage news items shown in widget Home tab"
- "Create News Item" button (green, plus icon)

**Search & Filters:**

**Search Bar:**
- Search by title
- Live filtering

**Status Filter Tabs:**
- **All:** All news items
- **Active:** Currently showing in widget
- **Scheduled:** Future publish date
- **Expired:** Past expiry date

**Category Filters:**
- Dynamic (based on existing news categories)
- Buttons show category name + count
- Multi-select (can select multiple categories)
- Auto-discovered from news items
- Examples: "Sale", "New Products", "Updates"
- "Clear filters" button

---

### News Items Grid

**Layout:**
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Card design per news item

**Each News Card Shows:**

1. **Banner Image**
   - 16:9 aspect ratio
   - Full-width image
   - Fallback: Newspaper icon if no image
   - Hover: Slight zoom effect

2. **Content:**
   - Title (bold)
   - Subtitle (if set)
   - Status badge (Active/Scheduled/Expired/Draft)
     - 🟢 Active (green)
     - 🟡 Scheduled (yellow)
     - 🔴 Expired (red)
     - ⚫ Draft (gray)

3. **Analytics Row:**
   - 👁 Views count
   - 🖱 Clicks count
   - CTR percentage (click-through rate)
   - Green if CTR > 10%, gray otherwise

4. **Priority Badge:**
   - "Priority: 5" label
   - Higher priority shown first in widget

5. **Actions Menu:**
   - Three-dot menu:
     - Edit (opens edit page)
     - Preview (shows modal with preview)
     - Duplicate (creates copy)
     - Delete (confirmation dialog)

**Empty State:**
- Shows if no news items
- Icon + message
- "Create engaging content for your customers"
- "Create First News Item" button

---

### Create/Edit News Item Page

**Configuration Fields:**

**1. Basic Information:**

**Title**
- Text input
- Required
- Max 100 characters
- Shown in widget news card
- Example: "🔥 Summer Sale - 30% OFF!"

**Subtitle** (Optional)
- Text input
- Max 200 characters
- Shown below title in widget
- Example: "On all summer collection items"

**Content** (Optional)
- Textarea (multi-line)
- Full description/article
- Shown when customer clicks "Read more"
- Supports line breaks
- Max 2000 characters

---

**2. Visual:**

**Banner Image** (Optional but recommended)
- Upload button
- Drag & drop support
- Accepts: JPG, PNG, WebP
- Max size: 5 MB
- Recommended: 1200×630px (2:1 ratio)
- Preview shown
- Delete button to remove

**Image Optimization:**
- Auto-resized for widget
- Compressed for fast loading
- Cached on CDN

---

**3. Link Settings:**

**Link URL** (Optional)
- Text input
- Full URL (internal or external)
- Example: "/collections/summer" or "https://..."
- Opens when customer clicks news card or "Read more" button
- Opens in new tab if external

**Link Text** (Optional)
- Text input
- Button label (default: "Read more")
- Example: "Shop Now", "Learn More", "View Products"

---

**4. Publishing:**

**Status**
- Toggle switch: Draft / Active
- Draft: Saved but not shown in widget
- Active: Shown to customers

**Published Date** (Optional)
- Date + time picker
- Schedule for future publish
- Example: Publish on Nov 10, 2024 at 09:00
- If date is future: Status shows "Scheduled"
- If blank: Publishes immediately when set to Active

**Expiry Date** (Optional)
- Date + time picker
- Auto-hide after date
- Example: Expire on Nov 20, 2024 at 23:59
- Status shows "Expired" after date
- Useful for time-limited promotions

---

**5. Organization:**

**Category** (Optional)
- Text input or dropdown
- Examples: "Sale", "New Products", "Update", "Announcement"
- Used for filtering in dashboard
- Free text (merchants can create any category)

**Priority**
- Number input (1-10)
- Default: 5
- Higher priority shown first in widget
- If widget shows max 5 news items, highest 5 priorities shown

---

**6. Preview:**
- Live preview of news card
- Shows how it will look in widget Home tab
- Updates as you type
- Desktop + mobile preview

**7. Analytics (Edit Only):**
- **Views:** How many customers saw this news item
- **Clicks:** How many clicked "Read more" or link
- **CTR:** Click-through rate percentage
- **Performance graph** (if enough data)

**Save Button:**
- "Save News Item" or "Publish Now" (green)
- Validates fields
- Creates/updates news item
- Toast: "News item saved!"
- Returns to news list

**Cancel Button:**
- Returns to news list
- Prompts if unsaved changes

---

## 🎁 AI Discount Settings

### Settings Page

**Header:**
- 🎁 Gift icon (large)
- "AI Discount Settings" title
- Description: "Configure automatic discount codes offered by AI"

---

### Master Switch

**Enable/Disable Feature:**
- Large toggle switch (top of page)
- "AI Discount Generation" label
- "✅ Active" badge when enabled
- Description: "Allow AI to automatically create and offer discount codes to customers"

**When Enabled:**
- All settings below become active
- AI can create discount codes during conversations
- Codes sent as discount cards

**When Disabled:**
- All settings grayed out
- AI cannot offer discounts
- AI will politely decline if customer asks for discount

---

### Discount Configuration

**Discount Type:**
- Radio buttons:
  1. **Percentage** - e.g., 20% OFF
  2. **Fixed Amount** - e.g., €10 OFF

**Discount Value:**
- Number input
- If Percentage: 1-100 (%)
- If Fixed Amount: Any amount (€)
- Example: "20" = 20% OFF or €20 OFF
- Validation shown if invalid
- Help text: "The discount value customers will receive"

**Validity Period:**
- Number input (days)
- Default: 7 days
- Range: 1-365 days
- Example: "7" = code valid for 7 days after creation
- Expiry date calculated automatically

**Code Prefix:**
- Text input
- 2-10 uppercase letters
- Default: "AI"
- Creates codes like: "AI20-ABC123"
- Examples: "SAVE", "DEAL", "VIP"
- Validation: Letters only, uppercase

---

### Trigger Conditions

**When Should AI Offer Discounts?**

Checkboxes (can enable multiple):

1. **✅ Explicit Ask**
   - Customer asks: "Do you have a discount code?"
   - Customer asks: "Any coupons available?"
   - Direct question about discounts

2. **✅ Hesitant Customer**
   - Customer says: "That's too expensive"
   - Customer shows price concern
   - **AND** cart value > €30
   - AI offers discount to convert sale

3. **✅ First-Time Customers Only**
   - Only offer to new customers
   - Checks if `customer_segment = "new_customer"`
   - Encourages first purchase

4. **✅ Returning Customers Only**
   - Only offer to existing customers
   - Checks if `customer_segment = "returning_customer"`
   - Reward loyalty

**Validation:**
- At least one trigger must be enabled
- Error shown if none selected

---

### Rate Limits

**Purpose:** Prevent discount abuse

**Max Per Customer:**
- Number input
- Default: 1
- How many discounts one customer can receive
- Tracked by email address
- Example: "1" = customer can get one discount code, then no more

**Max Per Day (Shop-Wide):**
- Number input
- Default: 50
- Total discounts shop can give per day
- Across all customers
- Resets at midnight
- Example: "50" = after 50 codes created today, AI stops offering
- Prevents budget overrun

**Minimum Cart Value:**
- Number input (optional)
- Default: 0 (no minimum)
- Only offer discount if cart value ≥ this amount
- Example: "30" = only offer if cart has €30 or more
- Prevents discounts on small orders

---

### Preview

**Code Preview:**
- Shows example: "AI20-ABC123"
- Shows label: "20% OFF"
- Shows validity: "Valid for 7 days"
- Visual preview of discount card
- Exactly how customer will see it

---

### How It Works Section

**Explanation for Merchants:**
- Step 1: Customer has conversation with AI
- Step 2: AI detects trigger condition (e.g., customer asks for discount)
- Step 3: AI checks rate limits
- Step 4: If allowed, AI creates unique Shopify discount code
- Step 5: AI sends discount card to customer
- Step 6: Customer can copy code or apply directly to cart
- Step 7: Code tracked in database
- All automatic, zero manual work

---

### Permissions

**Who Can Edit:**
- Shop Owner
- Admins

**Other Roles:**
- Can view settings
- Cannot edit
- "View Only" badge shown

---

### Save Button

**Behavior:**
- "Save Settings" button (green, bottom right)
- Validates all fields
- Shows errors if invalid:
  - Value out of range
  - Invalid prefix format
  - No triggers enabled
  - Invalid rate limits
- Success toast: "Discount settings saved!"
- AI immediately starts using new settings
- No restart needed

**Unsaved Changes:**
- "You have unsaved changes" warning
- "Save" button highlighted
- "Reset" button to discard changes
- Prompt when leaving page

---

## 🎯 Conversation Filtering & Organization

### Filter System

**Multiple Filter Types:**
- Status filter (Active/Resolved)
- Category filter (Product, Support, Delivery, etc.)
- Agent request toggle
- Search query
- All work together (AND logic)

**Real-Time Counts:**
- Each filter shows count badge
- Updates instantly when conversation changes
- Example: "Product (7)" means 7 product-related chats
- Count badges color-coded

**Filter Persistence:**
- Filters remain when refreshing page
- Saved in URL parameters
- Shareable filtered views

---

### Conversation Sorting

**Default Sort:**
- Last message time (most recent first)
- Conversations with new messages bubble to top
- Real-time re-sorting

**Unread Priority:**
- Unread conversations always on top
- Within unread, sorted by time
- Within read, sorted by time

**Handler Priority:**
- Your handled conversations highlighted
- Easy to find your own chats
- Other agents' chats visually distinct

---

## 🔄 Agent Collaboration Features

### Multi-Agent Support

**Conversation Locking:**
- When agent takes over → Conversation locked to them
- Other agents see: "Handled by [Name]"
- Other agents cannot type (input disabled)
- Prevents conflicting responses
- Clean handoff system

**Transfer System:**
- Current handler can transfer conversation
- Conversation becomes available to all agents
- Anyone can then take over
- No specific assignment (first come, first served)

**Real-Time Sync:**
- All dashboards update instantly
- Agent takes over → All agents see it immediately
- Message sent → All agents see it
- Status changed → All dashboards reflect it
- Powered by Ably broadcasts

---

### Agent Presence

**Online Indicators:**
- Green dot if agent online
- Gray dot if agent offline
- Real-time presence tracking
- Shows in team list
- Customer sees online agents in widget

**Typing Indicators:**
- Agent sees when customer is typing
- Customer sees when agent is typing
- Real-time via Ably
- Professional UX

---

## 📊 Analytics & Insights

### Per-Conversation Insights

**AI Insights Card (Column 3):**
- Sentiment journey (start → end)
- Topic/category
- AI confidence score
- Action required indicator
- Conversation stats (message count, duration)
- Resolution status
- Detected language

**Customer Journey Card (Column 3):**
- Pages visited timeline
- Cart contents at chat start
- Session duration
- Device type
- Traffic source
- Conversion tracking

---

### Dashboard-Level Analytics

**Category Distribution:**
- See how many chats per category
- Shows in filter chip counts
- Identify common topics

**Agent Request Rate:**
- How many chats want human agents
- Shows effectiveness of AI
- Identify gaps in AI knowledge

**Response Time:**
- How fast agents respond
- Average time to first response
- Average time to resolution

**Conversion Attribution:**
- Which conversations led to sales
- Revenue per conversation
- ROI of live chat

---

## 🎨 Design & User Experience

### Visual Design

**Color System:**
- Clean, professional
- Neutral grays for backgrounds
- Dark text for readability
- Color-coded badges (category-specific)
- Purple accent for branding (minimal)

**Typography:**
- Clear hierarchy
- Bold for names and titles
- Regular for content
- Small for metadata (timestamps, counts)

**Spacing:**
- Consistent padding (4px grid)
- Comfortable touch targets (44px minimum)
- Proper whitespace
- Not cramped, not excessive

**Shadows:**
- Subtle elevation for cards
- Premium depth feel
- Smooth transitions on hover

---

### Animations

**Smooth Transitions:**
- Opening/closing modals (300ms)
- Tab switches (200ms)
- Filter chips (150ms)
- Hover effects (150ms)
- All GPU-accelerated

**Loading States:**
- Skeleton placeholders (pulsing animation)
- Spinners for actions
- Progress bars
- Never blank/jarring

**Interactive Feedback:**
- Buttons change on hover
- Click effects (slight scale)
- Toast notifications for actions
- Success/error states

---

## ⌨️ Keyboard Shortcuts

**Conversation List:**
- Arrow Up/Down: Navigate conversations
- Enter: Open selected conversation
- Escape: Close modals/dialogs

**Chat Window:**
- Enter: Send message
- Shift+Enter: New line in message
- Escape: Close product picker/discount creator
- Tab: Navigate between input and buttons

**General:**
- Ctrl/Cmd + K: Focus search bar
- Ctrl/Cmd + F: Open filters

---

## 📱 Mobile Optimization

**Mobile Layout:**
- One column view (full screen)
- Conversation list OR chat view (not both)
- Back button to return to list
- Bottom navigation for tabs
- Touch-friendly buttons (larger)
- Native app feel

**Tablet Layout:**
- Two column view
- List + Chat visible
- Customer panel in modal (tap icon to open)
- Optimized for touch

**Desktop Layout:**
- All three columns visible
- Full feature set
- Keyboard shortcuts
- Mouse hover effects

---

## 🔒 Permissions & Roles

### Role-Based Access

**Owner:**
- Full access to everything
- Edit all settings
- Manage triggers, news, discounts
- Close conversations
- Edit customer emails
- View all analytics

**Admin:**
- Same as Owner (full access)
- Edit all settings
- Manage all features

**Agent:**
- View conversations
- Send messages
- Take over conversations
- Use product picker, discount creator
- Cannot edit shop settings (proactive triggers, news, AI discounts)
- Cannot edit customer emails

**Viewer:**
- View-only access
- See conversations
- Cannot send messages
- Cannot take actions
- Read-only mode

---

## 🎯 Common Agent Workflows

### Workflow 1: Answering Customer Question

1. Agent sees new conversation in list (unread badge)
2. Click conversation to open
3. Read customer's question
4. Check AI's previous responses (if any)
5. Check customer info panel (order history, journey)
6. Click "Take Over" button
7. Type response
8. Press Enter to send
9. Click "Give to AI" to hand back
10. AI continues handling

---

### Workflow 2: Sending Product Recommendations

1. Customer asks: "Do you have blue dresses?"
2. Agent clicks Product Picker button
3. Search for "blue dress"
4. Select 3 products
5. Choose variants (size, color)
6. Click "Send Products"
7. Product cards appear in chat
8. Customer sees visual recommendations with images
9. Customer clicks product → Opens product page

---

### Workflow 3: Creating Checkout Link with Discount

1. Customer interested in multiple products
2. Agent clicks Product Picker
3. Selects products (e.g., Dress + Shoes + Bag)
4. Sets quantities
5. Chooses variants
6. Clicks "Create Checkout Link"
7. Toggles "Add Discount"
8. Selects "20% OFF"
9. Clicks "Create Checkout"
10. Checkout link card sent to customer
11. Customer clicks "Checkout Now"
12. Redirected to Shopify with full cart + 20% discount applied
13. One-click purchase experience

---

### Workflow 4: Handling Order Tracking

1. Customer asks: "Where is my order #1234?"
2. Agent sees order auto-loaded in Column 3
3. Checks order status (Fulfilled)
4. Sees tracking info (DHL, tracking number)
5. AI already sent tracking card (automatic)
6. Agent can verify tracking manually in Column 3
7. Can click "View in Shopify" to see full details
8. Can update customer if needed

---

### Workflow 5: Closing Conversation

1. Customer's issue resolved
2. Customer says: "Thank you!"
3. Agent responds: "You're welcome! Have a great day!"
4. Agent clicks "Close" button
5. Confirmation: "Close conversation?"
6. Click "Confirm"
7. Conversation marked as resolved
8. Moved to "Resolved" tab
9. Customer widget shows "Chat has been closed"
10. Dashboard auto-selects next conversation (if available)
11. Smooth transition, no empty screen

---

### Workflow 6: Setting Up Proactive Message

1. Go to "Proactive Chat" tab
2. Click "Create Trigger"
3. Name: "Homepage Welcome"
4. Fire Mode: "Sitewide"
5. Delay: 10 seconds
6. Frequency: "Once per session"
7. Priority: 8
8. Message: "👋 Welcome! Need help finding something?"
9. No button (let customer type freely)
10. Click "Save Trigger"
11. Enable toggle ON
12. Done! Now every customer will see message after 10s on any page (once)

---

### Workflow 7: Creating News Item

1. Go to "Newsfeed" tab
2. Click "Create News Item"
3. Title: "🔥 Black Friday Sale!"
4. Subtitle: "Up to 70% OFF everything"
5. Upload banner image (sale graphic)
6. Link URL: "/collections/black-friday"
7. Link text: "Shop Now"
8. Category: "Sale"
9. Priority: 10 (highest)
10. Published: Today
11. Expiry: Nov 30, 2024
12. Toggle Active: ON
13. Click "Save News Item"
14. Immediately visible in widget Home tab
15. Customers see it when opening chat

---

## 📈 Performance & Scale

### System Capacity

**Concurrent Conversations:**
- Supports 100+ simultaneous chats per shop
- No lag or slowdown
- Real-time updates stay fast

**Agent Capacity:**
- Supports 10+ agents per shop
- All dashboards sync perfectly
- No conflicts
- Smooth collaboration

**Message History:**
- Loads last 50 messages initially
- Lazy load older messages on scroll
- Infinite scroll support
- Fast rendering

**Real-Time Latency:**
- New message appears in <100ms
- Typing indicators <50ms delay
- Status updates instant
- Powered by Ably (enterprise WebSocket)

---

### Offline Handling

**Connection Loss:**
- Dashboard shows "Disconnected" banner
- Auto-reconnect attempts (exponential backoff)
- Message queue (sent when reconnected)
- No messages lost
- Success banner when restored

**Message Reliability:**
- Messages saved to database first
- Then broadcast via Ably
- Guaranteed delivery
- No duplicate messages
- No lost messages

---

## 🎯 Key Features Summary

### For Agents

**Conversation Management:**
- View all active conversations
- Filter by category, status, agent requests
- Search by customer name/email
- Take over from AI
- Transfer to other agents
- Give back to AI
- Close conversations
- Multi-select bulk actions

**Communication Tools:**
- Send text messages
- Send product recommendations
- Create discount codes
- Create checkout links
- Send emojis
- Multi-line messages
- Real-time delivery

**Customer Intelligence:**
- View order history
- See customer journey (pages visited, cart, device)
- AI sentiment analysis
- Purchase intent scoring
- Session tracking data
- Customer lifetime value
- VIP/Returning badges

**Order Management:**
- View linked orders
- Access tracking info
- Cancel orders (if configured)
- Cancel line items (if configured)
- View in Shopify (direct link)

---

### For Shop Owners

**Configuration:**
- Set up proactive messages
- Create news for widget
- Configure AI discount settings
- Customize widget behavior

**Team Management:**
- Invite agents
- Set roles and permissions
- Monitor agent performance
- View response times

**Analytics:**
- Conversation volume
- Category distribution
- AI vs Human handling ratio
- Customer sentiment trends
- Conversion rates
- Revenue attribution

---

## 🎨 Accessibility & UX

**Accessibility Features:**
- WCAG AA compliant colors
- Keyboard navigation
- Screen reader support
- Focus indicators
- High contrast mode
- Readable font sizes (minimum 12px)

**User Experience:**
- Instant feedback for all actions
- Loading states for all operations
- Error messages with clear instructions
- Success confirmations
- Undo options (where applicable)
- Responsive on all devices
- Fast performance (60 FPS)

---

## 📝 Summary

The Live Chat Dashboard provides:

**For Agents:**
- Professional conversation management
- 3-column layout (list, chat, customer info)
- Real-time messaging
- Product picker with variants
- Instant discount code creation
- Checkout link builder
- Customer journey insights
- Order information
- AI collaboration (take over, give back)
- Multi-agent support

**For Shop Owners:**
- Proactive chat triggers
- News feed management
- AI discount configuration
- Team collaboration
- Analytics and insights
- Complete customization

**Key Capabilities:**
- Filter conversations by category, status, agent requests
- Take over from AI or give back to AI
- Send products with variant selection
- Create checkout links with optional discounts
- View customer order history
- See customer journey (pages, cart, device)
- Close conversations (closes widget too)
- Transfer between agents
- Real-time updates across all dashboards
- Mobile, tablet, desktop optimized

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2024  
**Status:** ✅ Complete - Feature Documentation Only

