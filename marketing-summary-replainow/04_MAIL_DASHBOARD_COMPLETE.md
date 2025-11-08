# 📧 Mail/Threads Dashboard - Complete Feature Documentation

> **Professional Email Support Management with AI Assistance**

---

## 📋 Overview

The Mail Dashboard is where agents manage email conversations with customers. It provides a professional 3-column thread-based interface similar to Gmail, Zendesk, or Intercom, allowing agents to view email threads, respond to customers, and access detailed customer information.

**Key Concept: Thread-Based System**
- One thread = one conversation (all emails back-and-forth grouped)
- Like Gmail threads or Zendesk tickets
- Clean organization, easy to follow conversation history

---

## 🗂️ Dashboard Sub-Navigation

The Mail section has 6 main areas accessible via sidebar:

1. **📥 Posteingang (Inbox)** - All email threads
2. **❌ Unzugewiesen (Unassigned)** - Threads not assigned to any agent
3. **✅ Meine Tickets (My Tickets)** - Your assigned threads
4. **⚠️ Prüfwarteschlange (Review Queue)** - Threads requiring agent review
5. **🤖 Auto gesendet (Auto-Sent)** - AI-sent emails for quality monitoring
6. **📊 Analytics** - Email performance metrics

---

## 📥 1. Posteingang (Inbox)

### Purpose
Main view showing ALL email threads, regardless of assignment status.

### Layout
**3-Column Design:**
- Column 1 (Left): Thread list with filters
- Column 2 (Middle): Email thread timeline with reply composer
- Column 3 (Right): Customer information, AI summary, order details

---

## 📋 Column 1: Thread List

### Header Section

**Page Title:**
- "Posteingang" heading
- "INBOX" badge (mail icon)
- Shows this is the main email inbox

**Search Bar:**
- Search by customer name
- Search by customer email
- Search by subject
- Search by message content
- Live filtering (instant results)

---

### Status Tabs

**Three Status Views:**

1. **All**
   - Shows all threads (open + closed)
   - Complete overview
   - Default view

2. **Open**
   - Active email threads
   - Awaiting response or in progress
   - Most common view for agents

3. **Closed**
   - Archived email threads
   - Resolved/completed conversations
   - Historical reference

**Behavior:**
- Click tab to switch view
- Active tab highlighted with dark background
- Counts update in real-time

---

### Category Filters

**Collapsible Filter Section:**
- Click to expand/collapse
- Shows active filter or "All Categories"
- Clear button to reset

**10 Available Categories:**

1. **Complaint** - Customer complaints, negative feedback
2. **Return** - Return requests, refund inquiries
3. **Support** - General help requests
4. **Presale** - Questions before purchase
5. **Product** - Product-specific questions
6. **Cooperation** - Business inquiries, wholesale
7. **Delivery** - Order tracking, shipping
8. **Spam** - Spam emails (auto-filtered)
9. **Billing** - Payment issues, invoices
10. **Proactive** - System-initiated (rare in email)

**Filter Behavior:**
- Click category chip to filter threads
- Shows count per category (real-time)
- Active category highlighted (black background)
- Categories auto-assigned by AI
- AI re-categorizes if conversation topic changes

---

### Thread List Items

**Each Thread Shows:**

1. **Customer Avatar**
   - Circular avatar with initials
   - Gradient background (unique per customer)

2. **Customer Name**
   - Bold text
   - Truncated if too long

3. **Ticket Number**
   - Format: "T-12345"
   - Monospace font
   - Small gray text next to name

4. **Customer Email**
   - Small text below name
   - Truncated if needed

5. **Subject Line**
   - Email subject
   - Truncated to fit
   - Bold if unread

6. **Message Preview**
   - First ~80 characters of latest email
   - Gray text
   - Shows conversation context

7. **AI Score** (if AI replied)
   - Number 0-100 (top right)
   - Green if score ≥ 90 (excellent)
   - Gray if score 80-89 (good)
   - Yellow if score 70-79 (fair)
   - Red if score < 70 (needs review)
   - Indicates AI response quality

8. **Timestamp**
   - "5 min ago", "2 hours ago", "Yesterday"
   - Relative time format
   - Auto-updates

9. **Category Badge**
   - Small pill (e.g., "Product", "Support")
   - Color-coded

10. **Assignment Badge** (if assigned)
    - Shows agent name
    - Format: "👤 Sarah"
    - Other agents see it's taken

11. **Status Indicators:**
    - **Draft Badge** (blue) - AI draft ready, awaiting agent review
    - **Auto-sent Badge** (green) - AI sent automatically
    - **Needs Review Badge** (yellow) - Requires human verification
    - **Unread Indicator** - Bold text, blue dot

12. **Mail Count**
    - Shows number of emails in thread
    - Example: "📧 3" = 3 emails in conversation
    - Helps identify long conversations

**List Behavior:**
- Click thread → Opens in Column 2
- Selected thread highlighted (blue left border)
- Auto-sort by latest email time
- Real-time updates (new emails appear instantly)
- Smooth scroll to selected

---

## 📧 Column 2: Thread Timeline & Composer

### Thread Header

**Customer Information:**
- Customer name (bold)
- Customer email
- Subject line (editable - click to change)

**Thread Actions:**

1. **Assign to Me** (Blue button)
   - Shows only in multi-agent organizations
   - Click to assign thread to yourself
   - Prevents other agents from replying
   - Your name badge appears
   - Button text: "Assign to Me"

2. **Release** (Gray button)
   - Available when thread assigned to you
   - Click to unassign yourself
   - Makes available for other agents
   - Button text: "Release"

3. **Archive** (Gray button)
   - Click to archive thread
   - Marks as closed
   - Moves to "Closed" status
   - Button text: "Archive"

4. **Back Button** (Mobile only)
   - Returns to thread list

**Assignment Lock Display:**
- **"🔒 Assigned to [Name]"** - Badge showing who's handling
- **"You're handling this"** - Blue badge, your thread
- **Input disabled if another agent assigned** - Prevents conflicts

---

### Email Timeline (Conversation History)

**Chronological Display:**
- All emails in thread shown top to bottom
- Oldest at top, newest at bottom
- Clear visual separation between emails
- Auto-scroll to bottom (latest email)

**Email Types:**

**1. Customer Emails (Incoming)**
- **Visual:**
  - Light blue background
  - Customer avatar on left
  - Customer name + email
  - Timestamp
  - Email content (HTML rendered safely)
  - Attachments (if present)
  
- **Content:**
  - Subject line (first email only)
  - Email body (HTML formatted)
  - Inline images
  - Quoted text (previous messages in thread)
  - "Show more" for quoted text

**2. AI Responses (Outgoing)**
- **Visual:**
  - White background
  - 🤖 AI badge
  - "ReplAI" sender name
  - Timestamp
  - AI score indicator

- **AI Score Display:**
  - Large number (0-100) in circle
  - Color-coded:
    - 90-100: Green (Excellent quality, safe to send)
    - 80-89: Gray (Good quality)
    - 70-79: Yellow (Fair, may need review)
    - <70: Red (Low quality, requires review)
  - Click to see score breakdown

- **Draft States:**
  - **Blue "Draft" badge** - AI created response, awaiting approval
  - **"Send Now" button** - Agent can send AI draft
  - **"Edit Draft" button** - Agent can modify before sending
  
- **Auto-Sent:**
  - **Green "Auto-sent" badge** - AI sent automatically (high score)
  - Shows sent timestamp
  - Shows AI confidence

**3. Agent Responses (Outgoing)**
- **Visual:**
  - White background
  - Agent avatar
  - Agent name
  - Timestamp
  - Email content

- **Sent Status:**
  - Checkmark icon (green) if sent successfully
  - Clock icon (yellow) if processing
  - Error icon (red) if failed
  - Retry button if failed

**Attachment Display:**
- File icon + filename
- File size
- Download button
- Supports: PDF, images, documents
- Preview for images (click to enlarge)

---

### Reply Composer (Bottom Section)

**Rich Text Editor:**
- Full formatting toolbar
- Buttons:
  - **B** - Bold text
  - **I** - Italic text
  - **🔗** - Add link
  - **• List** - Bullet list
  - **1. List** - Numbered list
  - **" Quote** - Blockquote
  - **↶ Undo**
  - **↷ Redo**

**Editor Area:**
- Multi-line text input
- Auto-grows with content (up to certain height)
- Placeholder: "Type your reply..."
- HTML formatting supported
- Paste images (embedded)
- Paste formatted text (preserves formatting)

---

### Email Fields (Above Editor)

**To Field:**
- Displays recipient email(s)
- **Editable** - Click to change
- Can add multiple emails (comma-separated)
- Email chip design (removable tags)
- Validation (must be valid email)

**CC Field (Optional):**
- Click "CC" link to show
- Add carbon copy recipients
- Multiple emails supported
- Chip input (removable tags)
- Collapsible (hide if not needed)

**BCC Field (Optional):**
- Click "BCC" link to show
- Add blind carbon copy recipients
- Multiple emails supported
- Hidden from other recipients
- Chip input (removable tags)
- Collapsible

---

### Attachments

**Upload Section:**
- Paperclip icon button
- Click to select files
- Or drag & drop files onto editor
- Supported: All file types
- Max size: 25 MB per file
- Multiple files supported

**Uploaded Files Display:**
- Shows each file:
  - Filename
  - File size
  - Thumbnail (if image)
  - Remove button (X)
- Clean list design
- Upload progress bar (while uploading)

---

### Send Actions

**Send Button:**
- Blue button, bottom-right
- "Send Email" label
- Keyboard shortcut: Ctrl+Enter / Cmd+Enter
- Disabled if:
  - No content
  - No recipient
  - Thread assigned to another agent (multi-agent orgs)
- Loading spinner while sending

**Archive Button:**
- Gray button next to Send
- Archives thread after sending (optional)
- Marks as closed
- Moves to Closed status

**Draft Auto-Save:**
- Editor auto-saves every 10 seconds
- Saves to database
- Recoverable if browser crashes
- "Saving..." indicator

---

## 👤 Column 3: Details Panel

### Ticket Number (Top)

**Display:**
- Large card at top
- Format: "Ticket T-12345"
- Monospace font
- Prominent, always visible
- Used for customer reference

---

### Customer Insights Section

**Customer Avatar & Name:**
- Large avatar with initials
- Customer name (bold)
- Verified badge (green) if customer found in database
- Unknown badge (gray) if not in database

**Customer Email:**
- Displayed below name
- **Editable** (like Live Chat dashboard)
- Click pencil icon to edit
- Useful if customer made typo

**Customer Stats (if found in database):**
- **Phone Number** - Clickable (calls on mobile)
- **Total Orders** - Lifetime order count
- **Total Spent** - Lifetime value (e.g., "EUR 450.00")

**Customer Tags:**
- **VIP** (orange) if total spent > €200
- **Returning** (green) if orders > 1

**Shopify Link:**
- External link icon
- Opens customer in Shopify Admin
- New tab

---

### Order Details Section

**Shown When:**
- AI detected order number in email
- Customer asks about order
- Order number in subject or body

**Order Card:**
- Order number (e.g., "#1234")
- Order status badge (Fulfilled/Unfulfilled/Partial)
- Order date
- Item count
- Total price

**Order Products:**
- Each line item:
  - Product thumbnail
  - Product name
  - Quantity × Price
  - Variant (size, color)

**Order Actions:**

1. **View in Shopify**
   - Opens order in Shopify Admin
   - New tab
   - Direct link

2. **Refund Order** (if configured)
   - Button to create refund
   - Opens refund dialog
   - Select items to refund
   - Partial or full refund
   - Confirmation required

3. **Cancel Order** (if unfulfilled)
   - Cancel entire order
   - Confirmation dialog
   - Updates Shopify
   - Notifies customer (optional)

4. **Cancel Line Items**
   - Cancel individual products
   - Partial order cancellation
   - Useful for out-of-stock items

5. **Update Shipping Address** (if unfulfilled)
   - Edit address fields
   - Save updates to Shopify
   - Useful for address corrections

**Shipping Address:**
- Full address display
- Formatted properly
- Copyable
- Editable (before fulfillment)

**Tracking Information:**
- Carrier name
- Tracking number (copyable)
- Tracking link (click to open)
- Estimated delivery (if available)

---

### AI Summary Section

**What It Shows:**

**Issue Summary (What Customer Wants):**
- AI-generated summary of the customer's request
- Bullet points of key information
- Written when `needs_human = true` (agent action needed)
- Example:
  - "Customer received wrong color (ordered blue, received red)"
  - "Wants to return item and get correct color"
  - "Order #1234, item: Summer Dress"
  - "Prefers replacement over refund"
- Concise (2-3 sentences)
- Agent sees full context at a glance

**Missing Information (What We Still Need):**
- Shows if AI is still collecting info
- List of missing details
- Examples:
  - "Photo of damaged item"
  - "Preferred return method"
  - "Phone number for callback"
- Only shown if `info_collection_status = "in_progress"`
- Helps agent know what to ask for

**Agent Action Required (What To Do):**
- Specific actions agent must take
- List format, clear and actionable
- Examples:
  - "process_refund"
  - "callback_customer"
  - "cancel_order"
  - "send_replacement"
  - "escalate_to_manager"
- Color-coded badges (yellow/orange)
- Agent knows exactly what to do

**Information Collection Status:**
- **Not Applicable** (gray) - Simple question, no collection needed
- **In Progress** (blue) - AI is collecting info from customer
- **Complete** (green) - All info collected, ready for agent

**Collected Contact Information:**

**Phone Number:**
- Shows if customer provided phone
- Clickable (tap to call on mobile)
- Example: "+49 123 456789"
- Extracted by AI from any format:
  - "My number is 0123456789"
  - "Call me at +49-123-456-789"
  - "Phone: 0123 / 456789"
- Context-aware detection (AI knows it's phone, not order number)

**Callback Time:**
- Preferred time for callback
- Extracted from customer email
- Examples:
  - "Between 2-4 PM"
  - "Tomorrow morning"
  - "After 6 PM on weekdays"
- Free text (as customer wrote it)

**Order Number:**
- Detected order number (if mentioned)
- Format: Always with # prefix (e.g., "#1234")
- Used to link order data in Column 3
- Context-aware detection (AI knows it's order, not phone)

**AI Intelligence Fields:**
- **Priority:** Urgent, High, Medium, Low (set by AI based on sentiment + content)
- **Category:** Auto-assigned (Product, Return, Complaint, etc.)
- **Language:** Auto-detected (DE, EN, FR, etc.)
- **Intent:** What customer wants (product_inquiry, order_tracking, complaint, etc.)

**Benefits:**
- Agents understand issue in 5 seconds (not 5 minutes)
- No need to read full email thread
- Know exactly what to do (action items)
- Have all info needed (collected data)
- Can respond immediately
- Better customer experience

---

### Mail Info Section

**Thread Metadata:**
- **Category:** Product, Support, Return, etc.
- **Language:** Detected language code
- **Priority:** Urgency level (set by AI)
- **Received:** Date & time of first email
- **Replied:** Date & time of last agent reply (if any)

---

### AI Quality Section

**Shown For:**
- AI responses only (not agent responses)

**AI Score Display:**
- Large number: XX/100
- Color-coded (green/gray/yellow/red)
- Score label: "Excellent", "Good", "Fair", "Needs Review", "Low Quality"

**Auto-sent Badge:**
- Green checkmark badge
- "Auto-sent by AI" label
- Shows AI sent without agent review
- Only appears if AI score was ≥ 90

**Why Score Matters:**
- 90-100: Safe for auto-send
- 80-89: Good, but agent should verify
- 70-79: Fair, review recommended
- <70: Requires review before sending

---

### Thread Intelligence Section

**AI-Collected Information:**

**Needs Human Action Flag:**
- Red alert badge
- "Agent Action Required"
- AI determined human response needed
- High priority

**Info Collection Status:**
- Blue badge if AI is collecting info
- "AI Collecting Information"
- AI asking customer for missing details

**Collected Data Display:**
- **Phone Number** (if customer provided)
  - Clickable (call on mobile)
  - Extracted by AI from email

- **Callback Time** (if customer mentioned)
  - "Call me between 2-4 PM"
  - Extracted by AI

- **Order Number** (if mentioned)
  - Detected from email content
  - Used to link order data

**Agent Actions Required:**
- Shows list of actions AI identified
- Examples:
  - "Process refund"
  - "Update shipping address"
  - "Check inventory"
  - "Escalate to manager"
- Color-coded badges
- Helps agents know what to do

**Issue Summary:**
- AI-written summary of the problem
- Short paragraph (2-3 sentences)
- What customer wants
- Current status
- What needs to be done

---

### Quick Actions Section

**Export Thread:**
- Download button
- Exports entire email thread
- PDF or text format
- Includes all emails, timestamps, metadata
- Useful for records/compliance

---

## 📧 Column 2: Email Thread View

### Thread Timeline

**Email Display Order:**
- Chronological (oldest to newest)
- Top to bottom
- Latest email at bottom
- Auto-scroll to latest

**Each Email Shows:**

**Customer Emails:**
- Light blue/gray background
- Customer avatar (left)
- Customer name
- Email address
- Sent timestamp
- Subject (first email only)
- Email body (full HTML)
- Attachments (downloadable)
- Quoted text (collapsed by default, expandable)

**AI Responses:**
- White background
- Robot icon 🤖
- "ReplAI" sender name
- AI score badge (color-coded circle)
- Response text (HTML formatted)
- Suggested products (if AI recommended)
- Draft or Sent status

**Agent Responses:**
- White background
- Agent avatar
- Agent name
- Sent timestamp
- Email body (HTML)
- Attachments
- Sent status (checkmark)

**Visual Distinction:**
- Incoming (customer) vs Outgoing (AI/agent) clear
- Color-coded backgrounds
- Different avatars
- Status indicators

---

### AI Draft Handling

**When AI Creates Draft:**
1. AI analyzes customer email
2. AI generates response
3. AI assigns quality score
4. If score ≥ 90 → Auto-send (if enabled)
5. If score < 90 → Create draft, wait for agent review

**Agent Options for Drafts:**

**Option 1: Send as-is**
- Click "Send Now" button
- AI draft sent without changes
- Fast response time
- Good for high-quality AI responses

**Option 2: Edit then send**
- Click "Edit Draft" button
- AI draft loads into editor
- Agent modifies content
- Agent adds personal touch
- Click "Send" when ready

**Option 3: Discard and write new**
- Ignore AI draft
- Write completely new response
- Use editor normally

---

### Reply Composer

**Rich Text Formatting:**

**Toolbar Buttons:**
- **Bold** (Ctrl+B)
- **Italic** (Ctrl+I)
- **Link** (Ctrl+K)
- **Bullet List**
- **Numbered List**
- **Blockquote**
- **Undo** (Ctrl+Z)
- **Redo** (Ctrl+Shift+Z)

**Editor Features:**
- Multi-line input
- Auto-grows with content
- Paste preserves formatting
- Paste images (embedded)
- Spell check (browser default)
- Keyboard shortcuts

**Placeholder:**
- "Type your reply..." (when empty)
- Gray text
- Disappears when typing

---

### Email Header Fields

**To: Field**
- **Editable email chips**
- Default: Customer's email
- Click to add/remove emails
- Multiple recipients supported
- Comma-separated input
- Validation (must be valid email)
- Invalid emails shown in red

**CC: Field** (Optional)
- Click "CC" to show field
- Add carbon copy recipients
- Email chip input
- Removable (click X on chip)
- Collapsible (hide if not used)

**BCC: Field** (Optional)
- Click "BCC" to show field
- Add blind carbon copy
- Recipients hidden from each other
- Email chip input
- Collapsible

**Subject: Field**
- Shows email subject (from thread)
- Displayed but typically not editable in reply
- Maintained throughout thread

---

### Attachments

**Add Attachments:**
- Click paperclip icon
- File picker opens
- Select one or multiple files
- Or drag & drop onto composer
- Upload progress shown

**Attachment Display:**
- Each file shown as chip:
  - File icon (based on type)
  - Filename
  - File size (e.g., "2.5 MB")
  - Remove button (X)
- Clean list below editor

**Supported Files:**
- Documents (PDF, DOC, DOCX, XLS, XLSX)
- Images (JPG, PNG, GIF, WebP)
- Archives (ZIP, RAR)
- Text (TXT, CSV)
- Max 25 MB per file
- Max 10 files per email

---

### Send & Archive

**Send Email Button:**
- Large blue button (bottom right)
- "Send Email" label
- Keyboard shortcut: Ctrl+Enter
- Disabled if:
  - No content
  - No recipient
  - Thread assigned to another agent
- Shows spinner while sending
- Toast notification on success

**Archive After Send:**
- Checkbox option
- "Archive thread after sending"
- If checked: Thread archived automatically after send
- Moves to Closed status
- Saves extra click

**Archive Button:**
- Gray button next to Send
- Archives without sending
- Marks thread as closed
- Useful for spam or no-response-needed emails

---

## ❌ 2. Unzugewiesen (Unassigned Threads)

### Purpose
Shows only threads NOT assigned to any agent yet.

### Why This Matters
- **Fair Distribution:** All agents see same unassigned pool
- **No Tickets Forgotten:** Clear "Action Required" view
- **SLA Management:** Unassigned = highest priority
- **Team Coordination:** Everyone knows what needs attention

### Display

**Header:**
- "Unzugewiesen" title
- ⚠️ Warning badge: "Needs Attention"
- Description: "Threads not yet assigned to any agent"

**Thread List:**
- Shows only threads where `assigned_to_user_id = NULL`
- Sorted by priority (urgent first)
- Then by received time (oldest first)
- Same thread list format as Inbox

**Filters:**
- Status filter (Open/All/Closed)
- Category filter
- Search

**Agent Action:**
- Click thread to open
- Click "Assign to Me" button
- Thread disappears from Unassigned view
- Appears in "My Tickets" view

**Badge on Thread Items:**
- **"Unassigned" badge** (red/orange)
- Shows it needs assignment
- High visibility

---

## ✅ 3. Meine Tickets (My Tickets)

### Purpose
Shows only threads assigned to the logged-in agent.

### Why This Matters
- **Personal Queue:** Agent sees only their work
- **Focus:** No distraction from other agents' tickets
- **Workload:** Clear view of personal workload
- **Accountability:** Agent owns these threads

### Display

**Header:**
- "Meine Tickets" title
- Description: "Threads assigned to you"
- Shows agent's personal queue

**Thread List:**
- Shows only threads where `assigned_to_user_id = [current user]`
- Sorted by priority + time
- Same thread list format as Inbox

**Filters:**
- Status filter (Open/All/Closed)
- Category filter
- Search

**Badge on Thread Items:**
- **"You" badge** (blue)
- Shows thread belongs to logged-in agent
- Other agents see agent's name instead

**Empty State:**
- If no assigned threads:
- "No tickets assigned to you"
- "Visit Unassigned to claim tickets"

---

## ⚠️ 4. Prüfwarteschlange (Review Queue)

### Purpose
Shows threads where agent review is recommended.

### When Threads Appear Here

**Triggers:**
1. **AI Score < 80** - AI response quality below threshold
2. **Needs Human Flag** - AI determined human response needed
3. **Customer Complaint** - Negative sentiment detected
4. **High Priority** - Urgent issues
5. **Multiple Follow-ups** - Customer wrote multiple times
6. **Complex Issues** - AI confidence low

### Display

**Header:**
- "Prüfwarteschlange" title
- ⚠️ Alert icon (warning)
- Description: "Threads requiring human review before sending"

**Thread List:**
- Shows threads with `requires_review = true` OR `ai_score < 80`
- Sorted by priority (urgent first)
- Red/yellow badges for urgency

**Review Workflow:**
1. Agent clicks thread
2. Sees AI draft with score
3. Reviews AI response
4. Options:
   - Send draft as-is (if acceptable)
   - Edit draft and send
   - Write completely new response
5. After handling → Thread disappears from queue

**Filters:**
- Category filter
- Search
- No status filter (only open threads need review)

---

## 🤖 5. Auto gesendet (Auto-Sent Monitoring)

### Purpose
Quality assurance view - see what AI sent automatically.

### Why This Exists
- **Quality Control:** Managers verify AI is sending good responses
- **Training:** Learn what good AI responses look like
- **Debugging:** Find issues in AI responses
- **Reporting:** Show stakeholders AI performance

### Display

**Header:**
- "Auto gesendet" title
- 🤖 Robot icon (green)
- Description: "Monitor AI-sent emails for quality assurance"

**Date Range Filter:**
- Three buttons:
  - **Today** - Emails sent today
  - **This Week** - Last 7 days
  - **This Month** - Current month
- Toggle between views
- Counts shown per period

**Thread List:**
- Shows only threads where:
  - `auto_sent = true`
  - `status = 'sent'`
  - Within selected date range
- Each thread shows:
  - Customer name
  - Subject
  - AI score (prominent)
  - Timestamp
  - "AI sent" badge (green)

**Sorting:**
- By score (lowest first) - shows potential issues
- Or by time (newest first)

**Stats Summary:**
- Total emails sent in period
- Average AI score
- Distribution graph (if implemented)

**Use Case:**
- Manager checks daily: "What did AI send today?"
- Reviews low-scoring emails
- Identifies patterns
- Adjusts AI if needed

---

## 📊 6. Analytics

### Purpose
Email performance metrics and insights.

### Metrics Displayed

**Volume:**
- Total threads
- Emails sent/received
- Per day/week/month

**Performance:**
- Average response time
- First response time
- Resolution time
- SLA compliance

**AI Metrics:**
- AI auto-send rate
- Average AI score
- Agent edit rate (how often agents edit AI drafts)
- Auto-send accuracy

**Categories:**
- Thread distribution by category
- Trending topics
- Common issues

**Agents:**
- Threads per agent
- Response times per agent
- Quality scores

**Graphs:**
- Line charts (trends over time)
- Bar charts (category distribution)
- Pie charts (status breakdown)

---

## 🎯 Thread Assignment System

### Single-Agent Organizations

**Behavior:**
- No assignment needed
- All agents can reply to any thread
- No "Assign to Me" button shown
- Simple workflow
- Good for small teams (1-3 agents)

---

### Multi-Agent Organizations

**Assignment Required:**
- Agent must assign thread to themselves before replying
- Prevents multiple agents from replying to same customer
- "Assign to Me" button shown prominently

**Assignment Workflow:**
1. Agent opens unassigned thread
2. Sees message: "Assign this thread to reply"
3. Clicks "Assign to Me" button
4. Thread now locked to that agent
5. Other agents see "Assigned to [Name]" badge
6. Other agents cannot reply (input disabled)
7. Agent can reply normally

**Release Thread:**
- Assigned agent can release thread
- Click "Release" button
- Thread becomes unassigned again
- Available for any agent to claim

**Real-Time Sync:**
- Agent A assigns thread → All dashboards update instantly
- Agent B sees assignment badge immediately
- Prevents conflicts

**Visual Indicators:**
- **Your threads:** "You" badge (blue)
- **Other agent's threads:** Agent name badge
- **Unassigned:** No badge or "Unassigned" badge (red)

---

## 📝 Email Response Features

### AI-Assisted Responses

**AI Response Generation Process:**

**Step 1: AI Analyzes Email**
- Reads customer email
- Understands intent and emotion
- Checks previous conversation history
- Looks up order data (if order number detected)
- Retrieves relevant shop information (products, policies)

**Step 2: AI Decides Strategy**

Three possible scenarios:

**Scenario A: AI Can Fully Resolve**
- Simple question with clear answer
- AI has all needed information
- No agent action required
- Example: "What's your return policy?"
- Result: AI writes complete answer, high confidence

**Scenario B: AI Needs to Collect Information**
- Issue requires agent action
- Missing critical details
- AI asks targeted questions
- Example: Customer wants refund but no order number
- AI asks: "What's your order number so we can help?"
- Status: `info_collection_status = "in_progress"`
- AI continues conversation to gather all needed info

**Scenario C: All Info Collected, Agent Must Act**
- AI has complete information
- Agent action required (refund, callback, cancellation)
- AI writes professional handoff email
- Example: AI collected order number, phone, preferred solution
- AI confirms details and says "Our team will process refund within 24 hours"
- Status: `info_collection_status = "complete"` + `needs_human = true`

**Step 3: AI Self-Scores Response**

AI evaluates its own response on 5 dimensions:

1. **Response Quality** (0-100)
   - Is response helpful and professional?
   - Would customer find value?

2. **Context Coverage** (0-100)
   - Did AI address EVERY question?
   - Anything left unanswered?

3. **Information Accuracy** (0-100)
   - How confident in stated facts?
   - Only verified information used?
   - If ANY uncertainty → Scores LOW

4. **Language Fluency** (0-100)
   - Sounds natural in customer's language?
   - Culturally appropriate?

5. **Overall Confidence** (0-100)
   - Combined confidence score
   - Conservative (AI underscores when uncertain)

**Final AI Score:**
- Weighted average of all 5 scores
- 0-100 scale
- Determines auto-send vs review

**Step 4: Auto-Send Decision**

**Auto-Send Criteria (ALL must be met):**
- Shop has auto-send enabled
- AI score ≥ threshold (default: 80)
- AI recommends auto-send
- Either:
  - Simple resolution (no agent needed), OR
  - Information collection (helpful), OR
  - Professional handoff (all info complete + high score)

**AI Score Ranges:**

- **90-100 (Excellent - Green):**
  - Auto-sent automatically
  - High quality, confident
  - Safe without review
  - Example: Perfect policy explanation

- **80-89 (Good - Gray):**
  - Auto-sent if threshold ≤ 80
  - Good quality, minor room for improvement
  - Generally safe
  - Example: Standard order tracking response

- **70-79 (Fair - Yellow):**
  - Sent to Review Queue
  - Acceptable but needs verification
  - May need edits
  - Example: Complex return explanation

- **<70 (Low Quality - Red):**
  - Always flagged for review
  - Uncertain or incomplete
  - Requires agent rewrite
  - Example: AI couldn't find answer

**Auto-Send Feature:**
- Configurable by shop owner in settings
- Default threshold: 80
- Can be set to 70-95
- Can be completely disabled (all drafts)

**Information Collection Emails:**
- AI asking for missing info (phone, order number, etc.)
- These auto-send even with `needs_human = true`
- Because they're helpful (moving conversation forward)
- High quality scores (confident questions)

**Professional Handoff Emails:**
- AI collected all info + hands off to agent
- Can auto-send if high score (≥85)
- Customer satisfied (received confirmation)
- Agent has everything needed
- Win-win situation

---

### Rich Text Editor Features

**Formatting Options:**
- Bold, italic text
- Hyperlinks
- Bullet lists
- Numbered lists
- Blockquotes
- Headings (optional)

**Smart Features:**
- Auto-save drafts (every 10s)
- Paste preserves formatting
- Paste images (inline)
- Undo/redo
- Keyboard shortcuts

**Templates (future):**
- Pre-written response templates
- Quick replies
- Signature insertion

---

## 🔄 Thread Categories (AI Auto-Assignment)

### How It Works

**Automatic Categorization:**
- AI reads customer email
- AI analyzes content and intent
- AI assigns category automatically
- Category shown as badge on thread

**Dynamic Re-Categorization:**
- Customer's second email changes topic
- AI re-evaluates category
- Updates automatically
- Example: "Product" → "Return" if customer wants refund

**10 Categories:**
1. **Complaint** - Negative feedback, issues
2. **Return** - Return/refund requests
3. **Support** - General help
4. **Presale** - Pre-purchase questions
5. **Product** - Product info requests
6. **Cooperation** - B2B inquiries
7. **Delivery** - Shipping/tracking
8. **Spam** - Spam emails
9. **Billing** - Payment issues
10. **Proactive** - System-initiated (rare)

### Filtering by Category

**Use Cases:**
- Agent specializes in returns → Filter to "Return" category
- Manager wants to see complaints → Filter to "Complaint"
- Focus on specific issue type
- Workflow organization

---

## 🔍 Search & Filter System

### Search Capabilities

**Search Fields:**
- Customer name
- Customer email
- Subject line
- Email content (body)
- Ticket number

**Search Behavior:**
- Live search (instant results)
- Case-insensitive
- Partial matches
- Searches across all emails in thread

---

### Filter Combinations

**Multiple Filters Work Together:**
- Status + Category + Assignment + Search
- AND logic (all filters must match)
- Real-time count updates

**Example:**
- Status: Open
- Category: Return
- Assignment: Unassigned
- Result: All open return threads not yet assigned

**Filter Persistence:**
- Filters saved during session
- Clearing browser resets filters
- URL parameters (shareable filtered views)

---

## 🎨 Design & User Experience

### Visual Hierarchy

**Urgent Items Highlighted:**
- Red badges for complaints
- Yellow for review needed
- Green for auto-sent
- Blue for assigned to you

**Typography:**
- Bold for customer names
- Regular for content
- Small for metadata
- Monospace for ticket numbers, emails

**Color Coding:**
- AI scores: Traffic light system (green/yellow/red)
- Badges: Semantic colors
- Backgrounds: Subtle grays
- Active states: Blue accents

---

### Responsive Design

**Desktop (1920px+):**
- All 3 columns visible
- Full feature set
- Wide thread view

**Laptop (1366px):**
- 3 columns visible
- Narrower columns
- All features accessible

**Tablet (768px):**
- 2 columns (list + thread)
- Details panel in modal (click info icon)
- Touch-optimized

**Mobile (< 768px):**
- 1 column (full screen)
- Thread list OR thread view (not both)
- Back button to return
- Mobile-first interactions

---

## ⌨️ Keyboard Shortcuts

**Thread Navigation:**
- Arrow Up/Down: Navigate threads
- Enter: Open selected thread
- Escape: Close thread, return to list

**Composer:**
- Ctrl/Cmd + B: Bold
- Ctrl/Cmd + I: Italic
- Ctrl/Cmd + K: Add link
- Ctrl/Cmd + Enter: Send email
- Ctrl/Cmd + Z: Undo
- Ctrl/Cmd + Shift + Z: Redo

**General:**
- Ctrl/Cmd + F: Focus search
- Ctrl/Cmd + /: Show shortcuts

---

## 🔄 Real-Time Updates

### Ably Integration

**What Updates in Real-Time:**
- New incoming emails (appear instantly)
- AI responses generated (show as drafts)
- Thread assignments (badge updates)
- Agent replies sent (checkmarks)
- Thread status changes (open → closed)
- Category updates (AI re-categorizes)

**All Dashboards Sync:**
- Multiple agents can be online
- Everyone sees same state
- No conflicts
- No duplicate replies
- Professional collaboration

**Latency:**
- New email appears in <1 second
- AI draft ready in 5-15 seconds
- Assignment updates instant
- Status changes instant

---

## 👥 Multi-Agent Collaboration

### Assignment-Based Workflow

**Prevents Conflicts:**
- Only assigned agent can reply
- Other agents see lock indicator
- No double-replies to same customer

**Assignment Badge Visibility:**
- Clear "Assigned to [Name]" badges
- Real-time updates across all dashboards
- Color-coded (your threads vs others')

**Transfer Option:**
- Assigned agent can release thread
- Thread becomes unassigned
- Any agent can then claim it

---

## 🎯 Common Agent Workflows

### Workflow 1: Responding to New Email

1. Agent goes to "Unassigned" view
2. Sees new thread from customer
3. Clicks thread to open
4. Reads customer email (Column 2)
5. Checks AI summary in Column 3
6. Sees AI draft with score 85
7. Clicks "Assign to Me" (if multi-agent org)
8. Reviews AI draft
9. Clicks "Edit Draft"
10. Makes minor improvements
11. Clicks "Send Email"
12. Thread archived automatically
13. Dashboard auto-selects next unassigned thread

---

### Workflow 2: Handling Return Request

1. Customer emails: "I want to return order #1234"
2. AI categorizes as "Return"
3. AI detects order number
4. Thread appears in Inbox with "Return" badge
5. Agent clicks thread
6. Column 3 shows order details automatically
7. Agent sees order products, shipping address
8. Agent types: "I'll process your return. Here's the return label..."
9. Agent clicks "Create Refund" in Column 3 (if needed)
10. Selects items to refund
11. Confirms refund in Shopify
12. Sends email
13. Archives thread

---

### Workflow 3: Quality Check (Auto-Sent Emails)

1. Manager goes to "Auto gesendet" view
2. Selects date range: "Today"
3. Sees 25 emails AI sent automatically
4. Checks AI scores (all 90+)
5. Clicks thread with score 92 (lowest)
6. Reviews AI response
7. Verifies response quality
8. Notes: "AI correctly explained return policy"
9. Closes thread
10. Manager satisfied with AI quality

---

### Workflow 4: Review Queue Processing

1. Agent goes to "Prüfwarteschlange" view
2. Sees 3 threads needing review
3. Clicks first thread (AI score: 75)
4. Reads customer email: "Your product broke after 2 days!"
5. Sees AI draft: Generic apology
6. Agent knows this needs personal touch
7. Discards AI draft
8. Writes empathetic, personalized response
9. Offers refund + replacement
10. Sends email
11. Archives thread
12. Thread removed from Review Queue

---

### Workflow 5: AI Information Collection (Advanced)

**Email 1 - Customer Complaint:**
- Customer: "The product I received is broken!"
- AI analyzes: Needs agent action (refund), but missing info
- AI checks information checklist:
  - ✗ Order number (don't have)
  - ✗ Product identification (unclear which product)
  - ✗ Photo of damage (not provided)
  - ✗ Preferred solution (refund/replacement?)
- AI decision: Collect info first
- AI response: "I'm sorry to hear that! To help you quickly, could you share:
  1. Your order number
  2. Which product is damaged?
  3. Would you prefer a refund or replacement?"
- AI score: 92 (high quality question)
- Status: Auto-sent
- Thread shows: Info Collection Status = "In Progress"

**Email 2 - Customer Provides Info:**
- Customer: "Order #5678, it's the Blue Sneakers. I want a refund please."
- AI analyzes: Got order number, product, preference!
- AI checks information checklist:
  - ✓ Order number (#5678)
  - ✓ Product identification (Blue Sneakers)
  - ✗ Photo (helpful but not critical)
  - ✓ Preferred solution (refund)
- AI decision: Almost complete, ask for photo
- AI response: "Thank you! I've noted that for our team. For the refund process, could you send a quick photo of the damage? Then we can process this right away."
- AI score: 90
- Status: Auto-sent
- Thread Intelligence Updated:
  - `collected_order_number`: "#5678"
  - `agent_action_required`: ["process_refund"]
  - `missing_information`: ["photo_of_damage"]

**Email 3 - Customer Sends Photo:**
- Customer: "Here's the photo" (attachment included)
- AI analyzes: ALL info collected!
- AI checks information checklist:
  - ✓ Order number (#5678)
  - ✓ Product (Blue Sneakers)
  - ✓ Photo attached
  - ✓ Preferred solution (refund)
- AI decision: Ready for agent handoff
- AI response: "Perfect! I've documented everything for our team:
  - Order #5678 (Blue Sneakers)
  - Issue: Product received damaged
  - Photo attached for review
  - You prefer: Full refund
  
  Our team will process your refund within 24 hours and send confirmation to this email."
- AI score: 94 (professional handoff)
- Status: Auto-sent
- Thread Intelligence Updated:
  - `info_collection_status`: "complete"
  - `has_collected_all_info`: true
  - `needs_human`: true
  - `agent_action_required`: ["process_refund"]
  - `issue_summary`: "Customer received damaged Blue Sneakers (Order #5678), has photo, wants refund"

**Agent Sees Thread:**
- Opens thread
- Column 3 shows:
  - Issue Summary: Full context instantly
  - Order Details: Order #5678 loaded automatically
  - Action Required Badge: "process_refund"
  - All collected info visible
- Agent creates refund in Shopify (direct from Column 3)
- Agent sends confirmation: "Refund processed! You'll see €89.90 back in 3-5 days."
- Archives thread
- Total time: 2 minutes (vs. 15 minutes without AI collection)

---

## 🎨 Thread List Badges & Indicators

### Badge Types

**Status Badges:**
- **Draft** (blue) - AI draft ready
- **Sent** (green) - Email sent successfully
- **Auto-sent** (green) - AI sent automatically
- **Failed** (red) - Send failed (rare)

**Assignment Badges:**
- **You** (blue) - Assigned to logged-in agent
- **Agent Name** (gray) - Assigned to other agent
- **Unassigned** (red/orange) - No assignment yet

**Priority Badges:**
- **Urgent** (red) - Immediate attention
- **High** (orange) - Important
- **Medium** (yellow) - Normal
- **Low** (gray) - Can wait

**Category Badges:**
- Different color per category
- Small pill design
- Example: "Return" (purple), "Product" (blue)

**Special Indicators:**
- **Unread dot** (blue) - New emails not yet opened
- **Mail count badge** - Number of emails in thread (e.g., "5")
- **Needs Review** (yellow triangle) - Review required
- **Locked** (lock icon) - Assigned to another agent

---

## 📧 Email vs Live Chat Differences

### Email-Specific Features

**Threading:**
- Multiple emails grouped together
- Reply = adds to thread
- Subject line maintained
- Email headers preserved

**Attachments:**
- File uploads supported
- Multiple files per email
- Large files (up to 25 MB)
- Download from thread

**CC/BCC:**
- Multiple recipients
- Carbon copy support
- Blind carbon copy
- Professional email features

**Formatting:**
- Rich text editor (HTML)
- Professional email formatting
- Signatures
- Quoted text

**Async Communication:**
- Customers expect delayed responses (hours/days)
- No typing indicators
- No real-time presence
- No read receipts

---

### Similar to Live Chat

**3-Column Layout:**
- Same professional design
- Column 1: List
- Column 2: Conversation
- Column 3: Customer info + orders

**Customer Info Panel:**
- Identical to Live Chat
- Customer stats, orders, journey
- Order actions (refund, cancel, track)

**AI Intelligence:**
- Same AI categories
- Same sentiment analysis
- Same priority scoring

---

## 📊 Thread Metrics

### Per-Thread Stats

**Email Count:**
- Total emails in thread
- Shows conversation length

**Response Time:**
- Time from customer email to agent reply
- Important for SLA tracking

**Resolution Time:**
- Time from first email to thread close
- Measures efficiency

**Agent Time:**
- How long agent spent on thread
- Tracked automatically

---

## 🔒 Permissions & Roles

### Role-Based Access

**Owner & Admin:**
- View all threads
- Reply to any thread
- Assign/unassign threads
- Archive threads
- Access analytics
- Configure auto-send settings

**Agent:**
- View all threads
- Reply to threads (if single-agent org)
- Reply to assigned threads only (if multi-agent org)
- Assign threads to themselves
- Release own threads
- Cannot access analytics

**Viewer:**
- View threads only
- Cannot reply
- Cannot assign
- Read-only access

---

## 💡 AI Intelligence System

### The 5-Step Intelligence Framework

**AI Thinks Through Every Email:**

**Step 1: Deep Understanding**
- What does customer actually need? (read between lines)
- What's their emotional state? (calm, frustrated, angry, happy)
- What happened in previous emails? (full thread context)
- What info have they already provided? (don't ask twice)

**Step 2: Capability Assessment**
- Can AI fully resolve this? (yes/no)
- Or does agent need to take action? (refund, call, cancel)
- Honest about limitations (better to escalate than disappoint)

**Step 3: Information Completeness**
- If agent action needed: Do I have ALL required info?
- Check information checklist:
  - Clear problem description? ✓/✗
  - Product/order identified? ✓/✗
  - Evidence/photo if relevant? ✓/✗
  - Customer's preferred solution? ✓/✗
  - Contact details if callback needed? ✓/✗
- If NO → Keep collecting (ask targeted questions)
- If YES → Hand off to agent (all info ready)

**Step 4: Intelligent Decision**
- Choose scenario:
  - A) Resolve myself (answer question)
  - B) Collect more info (ask questions)
  - C) Hand off to agent (info complete)
  - D) Escalate if uncertain (safety first)

**Step 5: Craft Quality Response**
- Natural greeting (culture-appropriate)
- Empathy/acknowledgment (if problem exists)
- Main content (answer or questions)
- Next steps explained (what happens now)
- No signature (system adds automatically)

---

### Information Collection Intelligence

**What AI Collects:**

**Phone Numbers:**
- Extracted from any format
- Examples: "0123456789", "+49 123 456789", "0123 / 456789"
- Stored in `collected_phone_number`
- Shown in Column 3 (clickable to call)

**Callback Times:**
- Customer's preferred time
- Examples: "Between 2-4 PM", "Tomorrow morning", "After 6 PM"
- Stored in `collected_callback_time`
- Shown in Column 3

**Order Numbers:**
- Detected from email content
- Format normalized (always #1234)
- Stored in `collected_order_number`
- Used to load order data in Column 3

**Context-Aware Number Detection:**
- **Problem:** Number "12345" - Is it phone or order?
- **Solution:** AI uses thread context!
- AI checks: "What did I ask for in previous email?"
- If AI asked for phone → It's phone number
- If customer asks about order → It's order number
- If customer says "My number is..." after callback request → Phone
- Confidence score + reasoning provided
- Prevents confusion

**Information Checklist:**
- AI tracks what it has:
  - ✓ Problem description
  - ✓ Product/order ID
  - ✗ Photo/evidence (still need)
  - ✓ Customer preference
  - ✗ Contact details (still need)
- Shows in `missing_information` list

---

### Agent Handoff Intelligence

**When AI Hands Off to Agent:**

**Issue Summary for Agent:**
- Brief summary (2-3 sentences)
- What customer wants
- What's been collected
- What needs to be done
- Example:
  - "Customer received defective product (Order #1234, Blue Sneakers)"
  - "Has photos of defect, wants full refund"
  - "Phone: +49 123 456789, prefers call today after 6 PM"

**Agent Action Required:**
- Specific action list
- Examples:
  - `process_refund` - Create refund in Shopify
  - `callback_customer` - Call customer back
  - `cancel_order` - Cancel unfulfilled order
  - `send_replacement` - Ship replacement product
  - `escalate_to_manager` - Complex issue
  - `update_shipping_address` - Fix address
  - `check_inventory` - Verify stock
- Shown as badges in Column 3
- Agent knows exactly what to do

**Professional Handoff Email:**
- AI confirms all collected information
- Lists key details clearly
- Explains what team will do
- Sets timeline expectations
- Reassures customer
- Example:
  ```
  Perfect, thank you for those details! I've documented everything for our team:
  - Order #1234 (Blue Sneakers, Size 42)
  - Issue: Received wrong color (received red instead of blue)
  - Your phone: +49 123 456789
  - Preferred callback: Today after 6 PM
  - You'd like: Full refund
  
  Our team will process your refund within 24 hours and you'll receive confirmation by email.
  ```
- Customer feels heard
- Agent has everything needed
- Smooth handoff

---

### AI Self-Scoring System

**AI Evaluates Its Own Response:**

**5 Quality Scores (each 0-100):**

1. **Response Quality**
   - Is this helpful and professional?
   - Real value for customer?

2. **Context Coverage**
   - Addressed EVERY question?
   - Nothing left unanswered?

3. **Information Accuracy**
   - Confident in stated facts?
   - Only verified info used?
   - **If ANY uncertainty → Score drops**

4. **Language Fluency**
   - Natural in customer's language?
   - Culturally appropriate?
   - Right formality level (Du/Sie, Tu/Vous)?

5. **Overall Confidence**
   - Combined confidence
   - Conservative scoring
   - Better to underscore than overscore

**Final AI Score:**
- Weighted average: `(Quality×30% + Coverage×25% + Accuracy×25% + Fluency×20%)`
- Converted to 0-100 scale
- Shown prominently in dashboard
- Color-coded (green/gray/yellow/red)

**Auto-Send Recommendation:**
- AI decides: "Should this be auto-sent?"
- Boolean: true/false
- Considers:
  - Response quality
  - Customer sentiment
  - Issue complexity
  - Information completeness
- Conservative (safety first)

**Review Priority:**
- If not auto-sending, how urgent is review?
- **Urgent:** Complaints, angry customers, critical issues
- **High:** Complex questions, unclear situations
- **Medium:** Standard emails needing review
- **Low:** Simple emails below threshold

---

### Context-Aware Intelligence

**Thread History Analysis:**
- AI reads ALL previous emails in thread
- Understands conversation flow
- Never asks for info already provided
- Remembers what was discussed
- Adapts based on customer's previous responses

**Order Status Intelligence:**
- AI checks order in database
- Translates technical statuses to human language:
  - Shopify: "fulfilled" → AI says: "versendet" (German) or "shipped" (English)
  - Shopify: "partially_refunded" → AI says: "teilweise erstattet" / "partially refunded"
- Communicates naturally, not robotically
- Includes tracking info if available

**Product Recommendation Intelligence:**
- AI has product catalog in context
- Decides WHEN to recommend (not automatic)
- Recommends when:
  - Customer asks for recommendations
  - Pre-sale questions (shopping mode)
  - Positive conversation
  - After successful delivery
- Does NOT recommend when:
  - Customer has complaint
  - During returns/refunds
  - Customer frustrated
  - Support situation (not shopping)
- Smart timing = better conversions

---

### Multi-Language Intelligence

**100+ Languages Supported:**
- AI auto-detects language from email
- Responds in same language
- Native fluency (not robotic translations)
- Culturally appropriate:
  - German: Du vs Sie (formal/informal)
  - French: Tu vs Vous
  - Spanish: Tú vs Usted
  - Japanese: Proper honorifics
- Adapts tone to culture

**No Language Configuration Needed:**
- Customer writes in German → AI responds in German
- Customer writes in Arabic → AI responds in Arabic
- Customer switches language → AI adapts
- Works for ANY language automatically

**Benefits:**
- Global shop support
- No manual language selection
- No translation errors
- Natural, not robotic
- Cultural sensitivity built-in

---

## 📝 Summary

The Mail Dashboard provides:

**For Agents:**
- 3-column thread-based interface (Gmail/Zendesk pattern)
- AI-generated response drafts with quality scores
- Rich text email composer (TipTap editor)
- Thread assignment system (multi-agent support)
- Email threading (all emails grouped by conversation)
- Attachment support (send & receive files)
- CC/BCC fields (professional email features)
- **AI Intelligence Panel:**
  - Issue summary (what customer wants)
  - Missing information list (what to ask for)
  - Agent action required (what to do)
  - Collected contact info (phone, callback time, order number)
  - Information collection status tracker
- Order information integrated (inline in Column 3)
- Customer insights (orders, lifetime value, VIP status)
- Real-time updates (Ably)

**For Managers:**
- Auto-sent monitoring view (quality assurance)
- AI score analytics (performance tracking)
- Review queue oversight
- Team performance metrics
- Category distribution analytics

**Advanced AI Features:**
- **5-Step Intelligence Framework** (how AI thinks)
- **Information Collection System** (multi-turn info gathering)
- **Context-Aware Number Detection** (phone vs order number)
- **Agent Action Tracking** (specific tasks for agents)
- **Issue Summaries** (instant context for agents)
- **Professional Handoffs** (smooth AI → agent transition)
- **Multi-dimensional Scoring** (5 quality metrics)
- **Adaptive Reasoning** (complex emails get more AI thinking time)
- **Multi-language Support** (100+ languages, auto-detect)

**Key Capabilities:**
- Filter by status, category, assignment
- Search across all fields (name, email, subject, content)
- Assign threads to agents (multi-agent orgs)
- Release threads for reassignment
- Send AI drafts as-is or edit first
- Archive threads
- View customer orders inline
- Process refunds/cancellations directly
- Track packages
- Update shipping addresses
- Rich text formatting (bold, italic, lists, links)
- File attachments (upload/download, up to 25 MB)
- Multi-recipient emails (To/CC/BCC)
- Real-time collaboration (all dashboards sync)
- Ticket numbering system (T-12345)

**5 Sub-Navigation Views:**
- **Posteingang (Inbox):** All threads
- **Unzugewiesen (Unassigned):** Needs assignment (action required)
- **Meine Tickets (My Tickets):** My assigned threads
- **Prüfwarteschlange (Review Queue):** Needs review before sending
- **Auto gesendet (Auto-Sent):** Quality monitoring (AI performance)

**AI Intelligence Outputs:**
- Category (auto-assigned, dynamic)
- Priority (urgent/high/medium/low)
- Quality score (0-100, 5-dimensional)
- Issue summary (agent context)
- Collected information (phone, callback, order)
- Agent actions list (what to do)
- Missing information (what to ask)
- Auto-send recommendation (yes/no)

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2024  
**Status:** ✅ Complete - Feature Documentation Only

