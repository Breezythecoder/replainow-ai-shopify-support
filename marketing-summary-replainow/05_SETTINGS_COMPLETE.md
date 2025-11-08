# ⚙️ Settings - Complete Feature Documentation

> **Shop Configuration, Team Management, and Customization**

---

## 📋 Overview

Settings is where shop owners and administrators configure ReplAInow for their shop. It includes agent profiles, AI configuration, email settings, team management, and general shop settings.

**Access:** Settings menu in main navigation

**Tabs:**
1. Profile - Agent personal settings
2. AI - AI assistant configuration  
3. Mails - Email auto-send and template settings
4. Team - Team member management
5. General - Shop settings, timezone, widget installation
6. Notifications - Coming soon

---

## 👤 Profile (Agent Profile Settings)

### Purpose
Each agent creates their personal profile that appears in conversations and emails.

### Configuration Fields

**Display Name:**
- Text input
- Agent's full name
- Example: "Sarah Schmidt"
- Shown in:
  - Dashboard (internal team view)
  - Email signatures
  - Team member list

**Chat Name:**
- Text input
- Short name for live chat
- Example: "Sarah"
- Shown in:
  - Live chat widget (customer sees this)
  - Chat message bubbles
  - "Agent joined" notifications

**Profile Photo:**
- Image upload
- Drag & drop or file picker
- Recommended: 200×200px minimum
- Formats: JPG, PNG, WebP
- Max size: 2 MB
- Shown in:
  - Live chat widget header
  - Dashboard conversations
  - Team avatars (Home tab in widget)
  - Email signatures (if configured)

**Chat Signature:**
- Text input
- Short tagline for live chat
- Example: "Customer Success Team"
- Shown in:
  - Live chat messages (below name)
  - Widget team avatars

**Email Signature:**
- Text input (multi-line supported)
- Professional closing for emails
- Example: "Best regards,\nSarah Schmidt\nCustomer Support"
- Shown in:
  - Email responses (bottom of email)
  - Separate from chat signature

**Bio (Optional):**
- Text input
- Short description
- Example: "Spezialisiert auf Returns & Refunds"
- Shown in:
  - Team member list (internal)
  - Agent profile page (future)

**Auto-Save:**
- Saves automatically 1 second after typing stops
- Purple badge: "Auto-save enabled"
- Shows last saved time
- No manual save button needed

**Benefits:**
- Personalized customer experience
- Professional appearance
- Team accountability (customers see who they're talking to)
- Internal identification

---

## 🤖 AI (AI Profile Configuration)

### Purpose
Configure the AI assistant's identity and behavior across all channels (chat, email, WhatsApp).

**Permissions:**
- Only Owner and Admin can edit
- Agents and Viewers can view only
- Shop-wide settings (affects all agents)

### AI Identity

**AI Name:**
- Text input
- Default: "ReplAI"
- Example: "Sophie" (or keep "ReplAI")
- Shown in:
  - Live chat widget
  - Email sender name
  - WhatsApp messages
  - Dashboard (AI message bubbles)

**AI Avatar/Photo:**
- Image upload
- Drag & drop or file picker
- Recommended: 200×200px, square
- Formats: JPG, PNG, WebP
- Default: Robot icon with green gradient
- Shown in:
  - Live chat widget (AI messages)
  - Email templates (optional)
  - Dashboard (AI message bubbles)
  - Team avatars (if enabled)

**AI Signature:**
- Text input
- Tagline/role description
- Default: "Powered by [Shop Name]"
- Example: "AI Support Assistant"
- Shown in:
  - Live chat widget
  - Below AI name in messages

**Auto-Save:**
- Saves 1 second after typing stops
- Green badge: "Auto-save enabled"
- Shows last saved time

---

### AI Behavior (Optional Customization)

**AI Greeting:**
- Text input
- Custom first message
- Example: "Hey! How can I help you today?"
- Default: Standard greeting based on language
- Overrides default if set

**AI Personality (Advanced):**
- Text input
- Tone instructions
- Example: "Friendly and casual" or "Professional and formal"
- Default: Balanced professional-friendly tone
- Affects AI response style

**Auto-Escalation Threshold:**
- Number input (0-100)
- AI confidence threshold for human handoff
- Default: 70
- If AI confidence < threshold → Hands off to human
- Coming soon (placeholder)

**Benefits:**
- Branded AI assistant
- Consistent identity across channels
- Shop-specific personality
- Professional appearance

---

## 📧 Mails (Email Settings)

### Purpose
Configure how AI handles email responses and auto-sending.

**Dedicated Page:** `/settings/mails`

### Section 1: Auto-Send Configuration

**Enable/Disable Auto-Send:**
- Toggle switch (large, prominent)
- ON: AI can send emails automatically
- OFF: AI creates drafts, agent must approve
- Default: ON

**Auto-Send Threshold:**
- Slider (50-95)
- Default: 80
- Determines when AI auto-sends vs creates draft
- Range labels:
  - 50-70: Aggressive (more auto-sends, some risk)
  - 75-85: Balanced (recommended)
  - 90-95: Conservative (high quality only, more drafts)

**Threshold Explanation:**
- **80** means: AI auto-sends if score ≥ 80
- Scores below 80 → Create draft for review
- Higher threshold = fewer auto-sends, more agent review
- Lower threshold = more auto-sends, faster responses

**Current Configuration Display:**
- Shows: Status (Enabled/Disabled)
- Shows: Threshold (e.g., "80/100")
- Shows: Estimated auto-send rate
  - Threshold 80 → ~70% auto-sent
  - Threshold 85 → ~60% auto-sent
  - Threshold 90 → ~40% auto-sent

**Visual Feedback:**
- Green box: Conservative mode
- Yellow box: Balanced mode
- Orange box: Aggressive mode
- Helps understand impact

---

### Section 2: Email Template Customization

**Email Theme Color:**
- Color picker + hex input
- Default: #6B7CFF (purple-blue)
- Used for:
  - Email header accent
  - Button colors
  - Border highlights
- Live preview shown

**AI Agent Name for Emails:**
- Text input
- Default: "Support Team" or shop name
- Example: "Customer Service"
- Shown in email "From" field for AI emails
- Different from live chat AI name (can customize separately)

**Email Closing/Signature:**
- Text input
- Default: "Best regards,\n[Shop Name] Team"
- Example: "Viele Grüße,\nDein [Shop Name] Team"
- Automatically added to all emails (AI + agent)
- Can include:
  - Closing phrase
  - Company name
  - Links (optional)

**Preview:**
- Shows example email
- Displays theme color
- Shows agent name
- Shows closing signature
- Updates live as you type

---

### Section 3: Mailgun Integration

**Current Email Address:**
- Shows: Auto-generated Mailgun email
- Format: `[shop-id]@mail.replainow.com`
- Status: ✅ Active
- Read-only (system managed)
- Used for sending emails to customers

**Custom Sending Domain (Advanced):**
- Shows custom domain if configured
- Example: `support@yourshop.com`
- Status: ✅ Verified or ⚠️ Pending
- Requires DNS configuration
- Contact support to set up

**Benefits of Custom Domain:**
- Branded email address
- Higher deliverability
- Professional appearance
- Better spam score

---

### Section 4: Review Queue Settings

**Priority Rules (Informational):**
- Explains when emails go to review queue
- **Urgent:** AI score < 70 + complaint
- **High:** AI score 70-79 + complex issue
- **Medium:** AI score 70-79, standard
- **Low:** Simple emails near threshold

**Auto-Assignment (Coming Soon):**
- Placeholder for future feature
- Auto-assign threads to specific agents
- Round-robin distribution
- Load balancing

---

### Section 5: System Information

**Display Grid (4 cards):**
1. **Mailgun Email** - Current sending address
2. **Auto-Send Status** - Enabled/Disabled
3. **Current Threshold** - Score value
4. **Email Theme** - Color preview

**Read-only stats for reference**

---

## 👥 Team (Team Management)

### Purpose
Invite and manage team members who can access the dashboard.

### Team Member Roles

**4 Roles Available:**

**1. Owner**
- Full access to everything
- Can invite/remove members
- Can change all settings
- Can delete shop (ultimate permission)
- Badge: Purple "Owner"
- Icon: Shield

**2. Admin**
- Same as Owner except:
  - Cannot remove owner
  - Cannot delete shop
- Can manage team
- Can change all settings
- Full conversation access
- Badge: Blue "Admin"
- Icon: Users

**3. Agent**
- Conversation management
- Can reply to customers (chat + email)
- Can take over/release conversations
- Can use product picker, discount creator
- **Cannot:**
  - Invite team members
  - Change shop settings
  - Access analytics (full)
  - Edit AI configuration
- Badge: Green "Agent"
- Icon: Mail

**4. Viewer**
- Read-only access
- Can view conversations
- Can view analytics
- **Cannot:**
  - Reply to customers
  - Change settings
  - Invite members
  - Take actions
- Badge: Gray "Viewer"
- Icon: Eye
- Use case: Managers, observers, trainees

---

### Team Members List

**Each Member Shows:**
- Avatar (circular, gradient)
- Name (from profile or email)
- Email address
- Role badge (color-coded)
- Status badge:
  - ✅ Active (green)
  - ⏳ Invited (yellow) - Hasn't accepted yet
  - ⚫ Inactive (gray)
- "You" badge if it's logged-in user

**Empty State:**
- Shows if no team members
- Icon + message
- "Invite your first team member" button

---

### Inviting Team Members

**Invite Button:**
- Click "Invite Team Member"
- Opens invite dialog

**Invite Dialog:**

**Step 1: Enter Details**
- **Email Field:**
  - Text input
  - Required
  - Validation (must be valid email)
  - Placeholder: "colleague@example.com"
  
- **Role Selector:**
  - Dropdown
  - Options: Admin, Agent, Viewer (Owner not selectable)
  - Each role shows:
    - Role name
    - Description (what they can do)
    - Icon
  - Default: Agent

- **Send Invite Button:**
  - Creates invite
  - Generates invite link
  - Valid for 7 days

**Step 2: Share Invite Link**
- Shows success message: "✅ Invite sent to [email]!"
- Displays invite link (long URL)
- Copy button (click to copy to clipboard)
- Shows "Copied!" confirmation (2 seconds)
- Expiry notice: "Expires in 7 days"

**Next Steps Instructions:**
1. Copy the invite link
2. Send to colleague@example.com (via email, Slack, etc.)
3. They click link to accept
4. They create account or login
5. They join your shop's team

**Buttons:**
- "Done" - Closes dialog, reloads team list
- "Invite Another" - Resets form, invite more people

---

### Pending Invites Section

**Shows Invites Not Yet Accepted:**
- Email address
- Role
- Invited by (who sent invite)
- Sent date
- Expiry countdown (e.g., "3 days remaining")
- Status: "⏳ Pending"

**Actions Per Invite:**
- **Copy Link** - Get invite URL again
- **Cancel Invite** - Delete invite (confirmation required)

**Invite Expiry:**
- Auto-expires after 7 days
- Recipient must accept within 7 days
- Can re-invite if expired

---

### Removing Team Members

**Process:**
- Click three-dot menu on member
- Click "Remove from Team"
- Confirmation dialog: "Remove [Name] from team?"
- Confirm → Member removed immediately
- Member loses access to dashboard
- Member receives notification (optional)

**Restrictions:**
- Owner cannot be removed
- Cannot remove yourself
- Only Owner/Admin can remove members

---

## 🌍 General (General Settings)

### Language & Localization

**Language Selector:**
- Dropdown with all supported languages
- Options: German, English, French, Spanish, Italian, Portuguese, etc.
- Auto-detected from Shopify (default)
- Can be overridden manually
- Affects:
  - Dashboard interface language
  - AI response language (default)
  - Widget interface language
  - Email templates

**Auto-Detection:**
- Synced from Shopify's primary locale
- Shows: "Auto-detected: Deutsch (DE)"
- Can override if needed

---

### Timezone & Currency

**Timezone Selector:**
- Dropdown with common timezones
- Options:
  - Europe/Berlin (GMT+1)
  - Europe/London (GMT+0)
  - America/New_York (GMT-5)
  - Asia/Tokyo (GMT+9)
  - And 10+ more
- Affects:
  - All timestamps in dashboard
  - Email timestamps
  - Analytics date ranges
  - Conversation times
- Auto-detected from Shopify
- Can be changed
- Tip: Set to where agents are located

**Currency Display:**
- Shows shop's currency
- Example: "EUR (€)"
- Shows money format (e.g., "€1.234,56")
- Synced from Shopify (read-only)
- Cannot be changed (controlled by Shopify)

---

### Store Information

**Shop Name:**
- Shows Shopify store name
- Example: "My Amazing Shop"
- Synced from Shopify (read-only)
- Updates if shop name changes in Shopify

**Shopify Domain:**
- Shows myshopify.com domain
- Example: "my-shop.myshopify.com"
- Synced from Shopify (read-only)
- Used for integration

---

### Chat Widget Logo

**Logo Upload:**
- Image upload for widget header
- Drag & drop or file picker
- Recommended: 200×60px (landscape) or 120×120px (square)
- Formats: JPG, PNG, SVG (recommended)
- Max size: 1 MB
- Transparent background recommended (PNG/SVG)

**Where Logo Appears:**
- Live chat widget header (top of widget)
- Widget Home tab
- Optional in messages (if configured)

**Preview:**
- Shows uploaded logo
- Remove button (X) to delete
- Upload new to replace

**Auto-Save:**
- Uploads and saves immediately
- No manual save button needed
- Toast notification: "Logo updated!"

**Tip:**
- Use shop logo for brand consistency
- High-resolution for crisp display
- Transparent background looks best
- Square or horizontal orientation

---

### Widget Installation Instructions

**Purpose:**
Help merchants activate the widget in their Shopify theme.

**Shopify Theme Editor Deep Link:**
- Auto-generated link to Shopify Theme Editor
- Opens directly to App Embeds section
- Widget extension pre-selected
- Format: `https://admin.shopify.com/store/[shop]/themes/current/editor?context=apps&appEmbed=[id]`

**Copy Link Button:**
- Click to copy link to clipboard
- Shows "✅ Copied!" confirmation
- Can share link with developers

**Open in Shopify Button:**
- Opens link in new tab
- Goes directly to Theme Editor
- Widget ready to activate

**Installation Steps (Shown in UI):**
1. Click "Open in Shopify Theme Editor"
2. Find "ReplAInow Live Chat Widget" in list
3. Toggle switch to ON
4. Click "Save" in Theme Editor
5. Widget now live on storefront!

**Alternative:**
- Manual navigation instructions
- Screenshots (if needed)
- Video guide (future)

**Status Badge:**
- "✅ Ready to Install"
- Shows widget is configured
- Shop ID connected
- Ready for activation

---

## 📧 Mails Settings (Dedicated Page)

**Access:** Separate page at `/settings/mails`

### Auto-Send Configuration

**Master Toggle:**
- Large prominent toggle switch
- "Enable AI Auto-Send" label
- ON: AI can automatically send emails (if score high enough)
- OFF: AI always creates drafts, never auto-sends

**Threshold Slider:**
- Visual slider (50-95 range)
- Large number display (e.g., "80/100")
- Color-coded:
  - Green: 85-95 (conservative)
  - Yellow: 75-84 (balanced)
  - Orange: 50-74 (aggressive)

**Threshold Explanation Box:**
- Shows mode: "Conservative", "Balanced", "Aggressive"
- Explains impact
- Example: "Balanced: AI auto-sends ~70% of emails, ~30% go to review"

**Current Configuration Card:**
- ✅ Status: Enabled/Disabled
- Threshold: XX/100
- Estimated auto-send rate: ~XX%
- Quick overview

---

### Email Templates

**Theme Color:**
- Color picker (visual selector)
- Hex input field
- Default: #6B7CFF (purple-blue)
- Preview swatch
- Used in email design (headers, buttons, accents)

**AI Agent Name for Emails:**
- Text input
- Default: Shop name + "Support Team"
- Example: "Amazing Shop Support"
- Shown in email "From" field
- Can differ from live chat AI name

**Email Closing:**
- Text input
- Default: "Best regards,\n[Shop Name] Team"
- Example: "Freundliche Grüße,\nIhr [Shop] Team"
- Auto-added to ALL emails (AI + agent)
- Multi-line supported

**Email Preview:**
- Shows example email
- Theme color visible
- Agent name shown
- Closing signature shown
- Updates live as you edit

---

### Review Queue Rules

**Informational Display:**
- Shows priority system
- Explains: Urgent, High, Medium, Low
- When emails go to review queue
- Color-coded explanations

---

### System Information

**4-Card Grid:**
1. **Mailgun Email** - Sending address
2. **Auto-Send Status** - Enabled/Disabled
3. **Current Threshold** - 80/100
4. **Email Theme** - Color swatch + hex

**Quick reference stats**

---

## 🎯 Settings Tabs Summary

### Profile Tab
- Personal agent configuration
- Display name, chat name
- Profile photo
- Chat signature, email signature
- Bio
- Auto-saves

### AI Tab
- AI assistant identity
- AI name, avatar
- AI signature
- AI greeting, personality
- Shop-wide settings
- Owner/Admin only

### Mails Tab
- Links to `/settings/mails`
- Auto-send configuration
- Email templates
- Review queue rules

### WhatsApp Tab
- Links to `/settings/whatsapp`
- WhatsApp configuration
- (Coming post-launch - ignore for now)

### Team Tab
- Team member management
- Invite new members
- Set roles (Owner/Admin/Agent/Viewer)
- Remove members
- Pending invites management

### General Tab
- Language selector
- Timezone configuration
- Store information (read-only)
- Chat widget logo
- Widget installation guide

### Notifications Tab
- Coming soon
- Email notifications settings
- Push notifications (future)

---

## 🎨 User Experience

### Auto-Save System

**Fields with Auto-Save:**
- Agent profile (all fields)
- AI configuration (all fields)
- General settings (logo)

**How It Works:**
- Type in field
- Wait 1 second (no more typing)
- Auto-saves to database
- Shows saved indicator
- No manual save button

**Visual Feedback:**
- Pulsing dot (purple/green)
- "Auto-save enabled" label
- "Last saved at HH:MM:SS"
- Smooth, unobtrusive

**Benefits:**
- Never lose changes
- No need to remember to save
- Instant updates
- Modern UX

---

### Manual Save System

**Fields with Manual Save:**
- Email settings (threshold, toggles)
- Team settings (complex changes)

**How It Works:**
- Edit fields
- "Unsaved Changes" indicator appears
- Sticky "Save Changes" button (top or bottom)
- Click to save all changes at once
- Toast notification: "Settings saved!"

**Visual Feedback:**
- Orange alert: "You have unsaved changes"
- Highlighted save button
- "Discard" button to reset
- Clear call-to-action

---

### Responsive Design

**Desktop:**
- Full-width settings panels
- Side-by-side layouts
- All features visible

**Tablet:**
- Single-column layout
- Scrollable panels
- All features accessible

**Mobile:**
- Optimized touch targets
- Larger buttons
- Mobile-friendly file uploads
- Readable text

---

## 🔒 Permissions Matrix

| Feature | Owner | Admin | Agent | Viewer |
|---------|-------|-------|-------|--------|
| **View Settings** | ✅ | ✅ | ✅ | ✅ |
| **Edit Own Profile** | ✅ | ✅ | ✅ | ✅ |
| **Edit AI Config** | ✅ | ✅ | ❌ | ❌ |
| **Edit Email Settings** | ✅ | ✅ | ❌ | ❌ |
| **Invite Members** | ✅ | ✅ | ❌ | ❌ |
| **Remove Members** | ✅ | ✅ | ❌ | ❌ |
| **Edit General Settings** | ✅ | ✅ | ❌ | ❌ |
| **Delete Shop** | ✅ | ❌ | ❌ | ❌ |

**Permission Enforcement:**
- View-only mode shown for restricted users
- Disabled inputs (grayed out)
- Info banner: "View Only - Contact admin to make changes"
- Prevents accidental changes

---

## 🎯 Common Workflows

### Workflow 1: Setting Up New Agent

1. Admin goes to Settings → Team
2. Clicks "Invite Team Member"
3. Enters email: "sarah@example.com"
4. Selects role: "Agent"
5. Clicks "Send Invite"
6. Copies invite link
7. Sends to Sarah via email/Slack
8. Sarah clicks link
9. Sarah creates account or logs in
10. Sarah joins team automatically
11. Sarah appears in team list as "Active"
12. Sarah goes to Settings → Profile
13. Sets display name: "Sarah Schmidt"
14. Sets chat name: "Sarah"
15. Uploads profile photo
16. Sets chat signature: "Customer Success"
17. Sets email signature: "Best regards,\nSarah"
18. Auto-saves
19. Sarah ready to handle conversations!

---

### Workflow 2: Configuring AI Auto-Send

1. Owner goes to Settings → Mails
2. Sees auto-send currently: ON, threshold: 80
3. Wants more control (fewer auto-sends)
4. Moves slider to 85
5. Box turns green: "Conservative mode"
6. Sees: "~60% emails auto-sent, ~40% reviewed"
7. Satisfied with balance
8. Clicks "Save Changes"
9. Toast: "Settings saved!"
10. AI now only auto-sends scores ≥ 85

---

### Workflow 3: Customizing Email Template

1. Owner goes to Settings → Mails
2. Scrolls to "Email Template Customization"
3. Clicks color picker
4. Selects brand color: #FF6B9D (pink)
5. Types AI agent name: "Sophie Support"
6. Types closing: "Viele Grüße,\nDein Sophie Team ❤️"
7. Sees preview update live
8. Satisfied with look
9. Clicks "Save Changes"
10. All future emails use new template

---

### Workflow 4: Activating Widget in Shopify

1. Owner goes to Settings → General
2. Scrolls to "Widget Installation"
3. Sees: "✅ Ready to Install"
4. Clicks "Open in Shopify Theme Editor"
5. Shopify opens in new tab
6. Theme Editor shows App Embeds section
7. Finds "ReplAInow Live Chat Widget"
8. Toggles switch to ON
9. Widget preview appears on right
10. Clicks "Save" in Shopify
11. Returns to ReplAInow
12. Widget now live on shop!
13. Customers can open chat widget

---

## 📝 Summary

Settings provides:

**Agent Profile:**
- Display name, chat name
- Profile photo upload
- Chat signature, email signature
- Bio
- Auto-save (1 second delay)

**AI Configuration:**
- AI name, avatar
- AI signature
- AI greeting, personality (optional)
- Shop-wide settings
- Auto-save
- Owner/Admin only

**Email Settings:**
- Auto-send toggle (enable/disable)
- Threshold slider (50-95)
- Theme color picker
- AI agent name for emails
- Email closing signature
- Mailgun integration info
- Review queue rules
- System stats
- Manual save

**Team Management:**
- 4 roles: Owner, Admin, Agent, Viewer
- Invite members (email + role)
- Invite link generation (7 day expiry)
- Pending invites management
- Remove members
- Role-based permissions
- Status tracking (Active/Invited/Inactive)

**General Settings:**
- Language selector (30+ languages)
- Timezone configuration (affects timestamps)
- Currency display (from Shopify)
- Store information (name, domain)
- Chat widget logo upload
- Widget installation guide
- Shopify Theme Editor deep link
- Step-by-step instructions

**Key Features:**
- Auto-save for profiles
- Manual save for critical settings
- Permission-based access
- Responsive design
- Live previews
- Toast notifications
- Validation (email formats, required fields)
- Shopify integration (sync shop data)
- Invite system (7 day links)

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2024  
**Status:** ✅ Complete - Feature Documentation Only

