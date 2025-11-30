# 🎯 ULTRA ENTERPRISE DASHBOARD DESIGN EXTRACTION PROMPT
## Für Dashboard Repo Agent - KOMPLETTE Design Specification

**Datum**: 29. November 2025  
**Zweck**: 1:1 Dashboard Replication für Marketing Website  
**Wichtigkeit**: KRITISCH - Wir brauchen JEDES PIXEL!  
**Umfang**: Live Chat Dashboard + Mail Dashboard + ALLES!

---

## 📋 EXECUTIVE SUMMARY

Wir bauen die **Marketing Website** für ReplAInow und wollen das **KOMPLETTE DASHBOARD** integrieren - nicht nur Screenshots, sondern **nachbaubare, funktionierende UI**!

### Was wir brauchen:

1. ✅ **Komplettes CSS** - Jeder Style, jede Farbe, jeder Shadow
2. ✅ **Alle HTML Structures** - Jedes Element, jede Klasse
3. ✅ **React Components** - TypeScript ready, copy-paste fertig
4. ✅ **Live Chat Dashboard** - Komplettes UI mit allen Elementen
5. ✅ **Mail Dashboard** - Komplettes UI mit allen Elementen
6. ✅ **Navigation/Sidebar** - Tabs, Menü, alles
7. ✅ **Alle Tabellen** - Conversations, Tickets, Analytics
8. ✅ **Alle Charts/Stats** - Graphs, Metriken, Dashboards
9. ✅ **Alle Modals/Popups** - Settings, Filters, etc.
10. ✅ **Testdaten** - Realistische Beispieldaten für Demo
11. ✅ **Screenshots** - Vom echten Dashboard für Referenz
12. ✅ **TypeScript Types** - Alle Interfaces & Types

**NICHTS auslassen!** Wir wollen es **1:1** nachbauen können!

---

## 🎨 PART 1: DESIGN SYSTEM & FARBEN

### 1.1 **Complete Color Palette**

```
❓ Was sind ALLE Farben die im Dashboard verwendet werden?

PRIMARY COLORS:
- Brand Primary: #___
- Brand Secondary: #___
- Brand Accent: #___

GRAYS (Full Scale):
- Gray 50: #___
- Gray 100: #___
- Gray 200: #___
- Gray 300: #___
- Gray 400: #___
- Gray 500: #___
- Gray 600: #___
- Gray 700: #___
- Gray 800: #___
- Gray 900: #___
- Gray 950: #___

SEMANTIC COLORS:
- Success: #___
- Warning: #___
- Danger/Error: #___
- Info: #___

STATUS COLORS:
- Unread: #___
- Read: #___
- Answered: #___
- Pending: #___
- Closed: #___
- AI Handled: #___
- Agent Handled: #___

BACKGROUND COLORS:
- Main Background: #___
- Sidebar Background: #___
- Card Background: #___
- Hover Background: #___
- Active Tab Background: #___
- Inactive Tab Background: #___

TEXT COLORS:
- Primary Text: #___
- Secondary Text: #___
- Muted Text: #___
- Link Color: #___
- Link Hover: #___

BORDER COLORS:
- Default Border: #___
- Card Border: #___
- Table Border: #___
- Divider: #___

❓ Bitte als CSS Variables exportieren:
:root {
  --dashboard-primary: ___;
  --dashboard-bg: ___;
  /* ALLE Farben! */
}
```

### 1.2 **Typography System**

```
❓ Welche Fonts verwendet ihr?
- Font Family: ___ (Inter? SF Pro? Custom?)
- Font Weights: 300, 400, 500, 600, 700?
- Font URL: ___ (Google Fonts Link?)

❓ Font Sizes für alle Elemente:
- H1 (Page Title): ___ px
- H2 (Section Title): ___ px
- H3 (Card Title): ___ px
- H4 (Subsection): ___ px
- Body Text: ___ px
- Small Text: ___ px
- Tiny Text (Timestamps): ___ px
- Table Headers: ___ px
- Table Cells: ___ px
- Button Text: ___ px
- Tab Text: ___ px
- Sidebar Items: ___ px

❓ Line Heights:
- Headlines: ___
- Body: ___
- UI Elements: ___

❓ Letter Spacing:
- Headlines: ___
- Body: ___
- UI: ___
```

### 1.3 **Spacing & Layout**

```
❓ Spacing System (Grid):
- Base Unit: ___ px (4px? 8px?)
- Space Scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24?

❓ Container/Layout:
- Max Width: ___ px
- Sidebar Width: ___ px
- Content Width: ___ px
- Padding Standard: ___ px
- Gap between Cards: ___ px
- Gap between Sections: ___ px

❓ Border Radius:
- Cards: ___ px
- Buttons: ___ px
- Inputs: ___ px
- Modals: ___ px
- Badges: ___ px
- Avatars: ___ px (round? oder radius?)
```

### 1.4 **Shadow System**

```
❓ Alle Shadow Styles:
- Card Shadow (resting): ___
- Card Shadow (hover): ___
- Modal Shadow: ___
- Dropdown Shadow: ___
- Button Shadow: ___
- Table Shadow: ___
- Sidebar Shadow: ___

Bitte als CSS Variables:
--shadow-sm: ___;
--shadow-md: ___;
--shadow-lg: ___;
--shadow-xl: ___;
```

---

## 🏗️ PART 2: DASHBOARD LAYOUT STRUCTURE

### 2.1 **Overall Layout**

```
❓ Wie ist das Dashboard aufgebaut?

┌─────────────────────────────────────┐
│  Header (Top Bar)                   │
├──────┬──────────────────────────────┤
│      │                              │
│ Side │   Main Content               │
│ bar  │   Area                       │
│      │                              │
└──────┴──────────────────────────────┘

Oder anders?

❓ Layout Details:
- Header Height: ___ px
- Sidebar Width: ___ px (collapsed? expanded?)
- Content Padding: ___
- Is it responsive? Breakpoints?
- Sticky Header? Ja/Nein
- Fixed Sidebar? Ja/Nein
```

### 2.2 **Header/Top Bar**

```
❓ Header Complete Design:
- Height: ___ px
- Background: ___
- Border Bottom: ___
- Box Shadow: ___

❓ Header Elements (von links nach rechts):
1. Logo? Size? Link?
2. Navigation Items? Welche?
3. Search Bar? Style?
4. Notifications? Icon? Badge?
5. User Avatar? Size? Dropdown?
6. Settings? Icon?

❓ Bitte komplettes Header HTML + CSS!
```

### 2.3 **Sidebar/Navigation**

```
❓ Sidebar Complete Design:
- Width: ___ px
- Background: ___
- Border Right: ___
- Padding: ___

❓ Navigation Items:
1. Welche Tabs/Links gibt es?
   - Live Chat (Icon? Text? Active State?)
   - Mail (Icon? Text? Active State?)
   - Analytics? Settings? Team? etc.

❓ Active Tab Style:
- Background: ___
- Text Color: ___
- Border/Indicator: ___
- Icon Color: ___

❓ Inactive Tab Style:
- Background: ___
- Text Color: ___
- Hover State: ___

❓ Unread Badges:
- Background: ___
- Text Color: ___
- Size: ___
- Position: ___

❓ Bitte komplettes Sidebar HTML + CSS!
```

---

## 💬 PART 3: LIVE CHAT DASHBOARD

### 3.1 **Layout & Structure**

```
❓ Live Chat Dashboard Layout:

┌──────────────┬────────────────┬──────────────┐
│              │                │              │
│ Conversation │  Chat Thread   │  Customer    │
│ List         │  (Messages)    │  Info        │
│ (Left)       │  (Center)      │  (Right)     │
│              │                │              │
└──────────────┴────────────────┴──────────────┘

Oder anders?

❓ Column Widths:
- Left (Conversation List): ___ px oder ___%
- Center (Chat Thread): ___ px oder ___%
- Right (Customer Info): ___ px oder ___%

❓ Responsive Behavior:
- Mobile: Wie angezeigt?
- Tablet: Layout?
- Desktop: Full 3-column?
```

### 3.2 **Conversation List (Left Column)**

```
❓ Complete Design:
- Background: ___
- Padding: ___
- Border: ___

❓ Header (Tabs: All/Unread/AI/Agent):
- Tab Height: ___ px
- Tab Padding: ___
- Active Tab: Background ___, Color ___
- Inactive Tab: Background ___, Color ___
- Tab Border/Indicator: ___
- Font Size: ___
- Font Weight: ___

❓ Conversation Item:
┌─────────────────────────────────┐
│ [Avatar] [Name] [Unread Badge]  │
│          [Last Message...]       │
│          [Timestamp]             │
└─────────────────────────────────┘

- Height: ___ px
- Padding: ___
- Background: ___
- Border: ___
- Hover Background: ___
- Selected Background: ___

❓ Avatar:
- Size: ___ px
- Border Radius: ___
- Border: ___
- Fallback Background: ___

❓ Customer Name:
- Font Size: ___
- Font Weight: ___
- Color: ___

❓ Last Message Preview:
- Font Size: ___
- Color: ___
- Max Lines: ___
- Truncation: ...?

❓ Timestamp:
- Font Size: ___
- Color: ___
- Format: "vor 2 Min" oder "14:32"?

❓ Unread Badge:
- Background: ___
- Text Color: ___
- Size: ___ px
- Font Size: ___
- Border Radius: ___
- Position: top-right?

❓ Status Indicators:
- AI Icon? Color? Size?
- Agent Icon? Color? Size?
- Unread Dot? Color? Size?

❓ Bitte KOMPLETTES HTML + CSS für Conversation Item!
```

### 3.3 **Chat Thread (Center Column)**

```
❓ Chat Thread Header:
- Customer Name: Font ___, Size ___, Color ___
- Email/Info: Font ___, Size ___, Color ___
- Status Badge: "Open/Closed" - Style?
- Action Buttons: Welche? (Close, Assign, etc.)

❓ Messages Container:
- Background: ___
- Padding: ___
- Scroll Behavior: ___
- Max Height: ___

❓ Message Bubbles (Customer vs Agent vs AI):

CUSTOMER MESSAGE:
- Background: ___
- Text Color: ___
- Padding: ___
- Border Radius: ___
- Max Width: ___%
- Alignment: Right oder Left?
- Shadow: ___

AGENT MESSAGE:
- Background: ___
- Text Color: ___
- Padding: ___
- Border Radius: ___
- Max Width: ___%
- Avatar angezeigt? Size?
- Agent Name angezeigt? Style?

AI MESSAGE:
- Background: ___
- Text Color: ___
- Border: ___
- Different from Agent? Wie?
- AI Badge/Icon? Style?

❓ Timestamps:
- Position: Under message? Inside?
- Font Size: ___
- Color: ___

❓ Message Actions (Hover):
- Edit? Delete? Copy?
- Icons? Size? Color?

❓ Product/Discount/Tracking Cards in Chat:
- Selbe wie im Widget? Oder anders?
- Bitte komplett beschreiben!

❓ Chat Input (Agent Reply):
- Height: ___
- Background: ___
- Border: ___
- Placeholder: ___
- Buttons: Send, Attach, Emoji?
- Button Styles: ___

❓ Bitte KOMPLETTES Chat Thread HTML + CSS!
```

### 3.4 **Customer Info Panel (Right Column)**

```
❓ Panel Design:
- Background: ___
- Padding: ___
- Border: ___
- Width: ___ px

❓ Customer Card:
- Avatar: Size ___, Style ___
- Name: Font ___, Size ___, Color ___
- Email: Font ___, Size ___, Color ___
- Location: Font ___, Size ___, Icon?
- Created: Font ___, Size ___

❓ Stats/Metrics:
- Order Count: Style?
- Total Spent: Style?
- Last Order: Style?
- Layout: Grid? Vertical?

❓ Order History:
- List Style: ___
- Order Item: Height ___, Padding ___
- Order Number: Font ___, Color ___
- Date: Font ___, Color ___
- Total: Font ___, Color ___
- Status Badge: Style per Status?

❓ Tags/Segments:
- Tag Style: Background ___, Color ___, Padding ___
- Add Tag Button: Style?

❓ Notes Section:
- Background: ___
- Text Area: Style?
- Add Note Button: Style?

❓ Bitte KOMPLETTES Customer Info HTML + CSS!
```

---

## 📧 PART 4: MAIL DASHBOARD

### 4.1 **Mail Layout**

```
❓ Ist Mail Dashboard anders als Live Chat?
- Gleiche 3-Column Layout?
- Oder anders?

❓ Mail List (Left):
- Unterschied zu Chat List?
- Subject Line angezeigt?
- Preview Text: Wie viele Zeilen?
- Attachments Icon?
- Priority Flag?

❓ Mail Thread (Center):
- Email Header: From, To, Subject - Style?
- Email Body: Font ___, Size ___, Padding ___
- Reply Box: Style?
- Toolbar: Bold, Italic, Link - Style?
- Attachments: How displayed?

❓ Bitte KOMPLETTES Mail Dashboard HTML + CSS!
```

---

## 📊 PART 5: TABLES & DATA DISPLAY

### 5.1 **Conversation/Ticket Table**

```
❓ Table Design:
- Background: ___
- Border: ___
- Border Radius: ___
- Box Shadow: ___

❓ Table Header:
- Background: ___
- Text Color: ___
- Font Size: ___
- Font Weight: ___
- Height: ___ px
- Padding: ___
- Border Bottom: ___
- Sticky? Ja/Nein

❓ Table Columns (welche?):
1. Checkbox? Style?
2. Status? Icon? Color?
3. Customer? Avatar + Name?
4. Subject/Message? Truncation?
5. Channel? (Chat/Mail) Icon?
6. Assigned? Agent avatar?
7. Last Updated? Format?
8. Actions? Buttons? Icons?

❓ Table Row:
- Height: ___ px
- Padding: ___
- Background: ___
- Hover Background: ___
- Selected Background: ___
- Border Bottom: ___
- Cursor: pointer?

❓ Table Cell Styles:
- Padding: ___
- Vertical Align: ___
- Font Size: ___
- Color: ___

❓ Empty State:
- Illustration? Text?
- Style: ___

❓ Pagination:
- Style: ___
- Position: ___
- Buttons: ___

❓ Bitte KOMPLETTE Table HTML + CSS!
```

---

## 📈 PART 6: STATISTICS & CHARTS

### 6.1 **Stats Cards/KPIs**

```
❓ Stat Card Design:
┌──────────────────┐
│ 📊 Total Chats   │
│                  │
│    1,247         │ ← Number Style?
│    +12% today    │ ← Subtitle Style?
└──────────────────┘

- Card Background: ___
- Card Border: ___
- Card Padding: ___
- Card Border Radius: ___
- Card Shadow: ___

❓ Stat Number:
- Font Size: ___
- Font Weight: ___
- Color: ___
- Line Height: ___

❓ Stat Label:
- Font Size: ___
- Color: ___
- Position: above or below number?

❓ Stat Change ("+12%"):
- Font Size: ___
- Color (positive): ___
- Color (negative): ___
- Icon: Arrow up/down?

❓ Icon/Emoji in Card:
- Position: ___
- Size: ___
- Background: ___

❓ Bitte KOMPLETTES Stat Card HTML + CSS!
```

### 6.2 **Charts & Graphs**

```
❓ Welche Charts habt ihr?
- Line Chart? (Response times over time?)
- Bar Chart? (Messages per day?)
- Donut Chart? (AI vs Agent split?)
- Area Chart? (Conversations over time?)

❓ Chart Library:
- Recharts? Chart.js? D3? Custom?
- Dependencies: ___

❓ Chart Styling:
- Colors: ___
- Grid Lines: ___
- Axis Colors: ___
- Tooltip Style: ___
- Legend Style: ___

❓ Bitte komplette Chart Config + Styles!
```

---

## 🎛️ PART 7: BUTTONS & INTERACTIVE ELEMENTS

### 7.1 **All Button Types**

```
❓ PRIMARY BUTTON (Main Actions):
- Background: Gradient? Solid?
- Color: ___
- Padding: ___
- Border Radius: ___
- Font Size: ___
- Font Weight: ___
- Shadow: ___
- Hover: Background ___, Transform ___, Shadow ___
- Active: ___
- Disabled: ___

❓ SECONDARY BUTTON:
- Background: ___
- Border: ___
- Color: ___
- Hover: ___

❓ GHOST BUTTON:
- Background: ___
- Color: ___
- Hover: ___

❓ DANGER BUTTON:
- Background: ___
- Color: ___
- Hover: ___

❓ ICON BUTTON:
- Size: ___ px
- Background: ___
- Hover: ___
- Active: ___

❓ Bitte ALLE Button CSS Styles!
```

### 7.2 **Form Elements**

```
❓ INPUT FIELD:
- Background: ___
- Border: ___
- Border Radius: ___
- Padding: ___
- Font Size: ___
- Height: ___ px
- Focus: Border ___, Shadow ___
- Placeholder Color: ___

❓ TEXTAREA:
- Same as Input? Oder anders?
- Min Height: ___
- Resize: allowed?

❓ SELECT/DROPDOWN:
- Style: ___
- Dropdown Background: ___
- Option Hover: ___
- Selected Option: ___
- Arrow Icon: ___

❓ CHECKBOX:
- Size: ___ px
- Border: ___
- Checked Background: ___
- Checkmark Color: ___

❓ RADIO BUTTON:
- Size: ___ px
- Style: ___

❓ TOGGLE/SWITCH:
- Width: ___ px
- Height: ___ px
- Background (off): ___
- Background (on): ___
- Knob Size: ___

❓ Bitte ALLE Form Element HTML + CSS!
```

---

## 💼 PART 8: CONVERSATION/TICKET ITEM DETAILS

### 8.1 **Conversation List Item**

```
❓ EXACT Layout:

┌───────────────────────────────────────────┐
│ [👤 Avatar] Sarah Klein         [3]       │ ← Unread Badge
│             "Wo ist meine..."             │ ← Last Message
│             vor 5 Min                     │ ← Timestamp
│             🤖 AI                         │ ← Handled by
└───────────────────────────────────────────┘

❓ Dimensions:
- Total Height: ___ px
- Padding: ___ (top, right, bottom, left)
- Gap between elements: ___

❓ Avatar:
- Size: ___ px
- Position: absolute oder flex?
- Margin/Padding: ___

❓ Content Area:
- Padding Left (after avatar): ___
- Line Heights: ___

❓ Name Line:
- Display: flex? justify-between?
- Name Font: Size ___, Weight ___, Color ___
- Unread Badge: Position ___, Style ___

❓ Message Preview:
- Font Size: ___
- Color: ___
- Max Lines: ___ (1, 2, 3?)
- Ellipsis: "..."
- Line Clamp CSS: ___

❓ Bottom Meta (Timestamp + Icon):
- Display: flex? gap?
- Timestamp: Font ___, Color ___
- Icon: Size ___, Color ___
- Spacing: ___

❓ States:
- Default: Background ___
- Hover: Background ___, Transform ___
- Selected/Active: Background ___, Border ___
- Unread: Background ___, Font Weight ___

❓ Bitte PIXEL-PERFEKTES HTML + CSS!
```

### 8.2 **Filter & Search Bar**

```
❓ Filter Section Above List:
- Height: ___
- Background: ___
- Padding: ___

❓ Search Input:
- Width: ___
- Style: ___
- Icon: Position ___, Size ___
- Placeholder: ___

❓ Filter Buttons:
- "All", "Unread", "AI", "Agent" - Styles?
- Active Filter: ___
- Inactive Filter: ___

❓ Sort Dropdown:
- "Newest First" etc. - Style?

❓ Bitte komplettes Filter Bar HTML + CSS!
```

---

## 🎨 PART 9: CUSTOMER INFO PANEL (Right Side)

### 9.1 **Customer Card**

```
❓ Complete Customer Card:

┌─────────────────────────────┐
│  [Large Avatar 80px?]       │
│                             │
│  Sarah Klein                │ ← Name
│  sarah@example.com          │ ← Email
│  🇩🇪 Berlin, Germany        │ ← Location
│  👤 Customer since Nov 2024 │ ← Joined
└─────────────────────────────┘

❓ Dimensions:
- Padding: ___
- Background: ___
- Border Radius: ___
- Shadow: ___

❓ Avatar:
- Size: ___ px
- Border: ___
- Shadow: ___
- Fallback: Initials? Background?

❓ Text Styles:
- Name: Size ___, Weight ___, Color ___
- Email: Size ___, Color ___
- Location: Size ___, Color ___, Icon Size ___
- Joined: Size ___, Color ___

❓ Bitte komplettes Customer Card HTML + CSS!
```

### 9.2 **Order History Section**

```
❓ Section Header:
- "Recent Orders" - Style?
- "View All" Link? Style?

❓ Order Item:
┌────────────────────────────┐
│ #12847          €129.99    │ ← Order Number + Total
│ 3 items · Nov 28, 2024     │ ← Details
│ [Fulfilled]                │ ← Status Badge
└────────────────────────────┘

- Height: ___
- Padding: ___
- Background: ___
- Border: ___
- Hover: ___

❓ Order Number:
- Font: ___, Size ___, Color ___
- Link? Hover?

❓ Order Total:
- Font: ___, Size ___, Weight ___, Color ___

❓ Order Details:
- Font: ___, Size ___, Color ___

❓ Status Badge:
- Per Status different colors?
- Fulfilled: Background ___, Color ___
- Pending: Background ___, Color ___
- Cancelled: Background ___, Color ___
- Padding: ___
- Border Radius: ___
- Font Size: ___

❓ Bitte KOMPLETTES Order History HTML + CSS!
```

### 9.3 **Quick Actions**

```
❓ Welche Quick Actions gibt es?
- Send Discount Code?
- Send Product Recommendation?
- Mark as Priority?
- Assign to Agent?
- Add Note?

❓ Quick Action Button Style:
- Background: ___
- Icon: Size ___, Color ___
- Text: Font ___, Size ___
- Hover: ___
- Spacing: ___

❓ Bitte Quick Actions HTML + CSS!
```

---

## 🎯 PART 10: BADGES, LABELS & STATUS INDICATORS

### 10.1 **All Badge Types**

```
❓ UNREAD BADGE (number):
- Background: ___
- Text Color: ___
- Font Size: ___
- Font Weight: ___
- Padding: ___
- Border Radius: ___
- Min Width: ___

❓ STATUS BADGES:
AI Handled:
- Background: ___
- Text: "AI" oder "🤖 AI"?
- Color: ___
- Icon/Emoji: ___

Agent Handled:
- Background: ___
- Text: "Agent" oder "👤 Agent"?
- Color: ___

Answered:
- Background: ___
- Text: ___
- Color: ___

Pending:
- Background: ___
- Color: ___

Closed:
- Background: ___
- Color: ___

❓ PRIORITY FLAGS:
- High: Background ___, Icon ___
- Normal: ___
- Low: ___

❓ CHANNEL BADGES:
- Live Chat: Icon ___, Color ___
- Email: Icon ___, Color ___
- WhatsApp: Icon ___, Color ___

❓ Bitte ALLE Badge Styles als CSS!
```

---

## 📱 PART 11: MODALS & POPUPS

### 11.1 **Settings Modal**

```
❓ Modal Container:
- Width: ___ px
- Max Width: ___
- Background: ___
- Border Radius: ___
- Shadow: ___
- Backdrop: Color ___, Blur ___

❓ Modal Header:
- Height: ___
- Padding: ___
- Border Bottom: ___
- Title: Font ___, Size ___, Color ___
- Close Button: Size ___, Style ___

❓ Modal Body:
- Padding: ___
- Max Height: ___
- Scroll: ___

❓ Modal Footer:
- Padding: ___
- Border Top: ___
- Button Alignment: ___

❓ Bitte Modal HTML + CSS!
```

### 11.2 **Dropdown Menus**

```
❓ Dropdown Container:
- Background: ___
- Border: ___
- Border Radius: ___
- Shadow: ___
- Padding: ___
- Min Width: ___

❓ Dropdown Item:
- Height: ___ px
- Padding: ___
- Font: ___
- Hover: Background ___, Color ___
- Active: ___
- With Icon: Gap ___, Icon Size ___

❓ Divider:
- Color: ___
- Margin: ___

❓ Bitte Dropdown HTML + CSS!
```

---

## 🎨 PART 12: TABS & NAVIGATION

### 12.1 **Tab Component**

```
❓ Tab Container:
- Background: ___
- Border Bottom: ___
- Height: ___
- Padding: ___

❓ Individual Tab:
- Padding: ___
- Font Size: ___
- Font Weight: ___
- Color (inactive): ___
- Color (active): ___
- Background (inactive): ___
- Background (active): ___
- Border Bottom Indicator: Color ___, Height ___
- Hover: ___

❓ Tab with Counter:
- "All (47)" - Counter Style?
- Background: ___
- Color: ___

❓ Bitte Tab Component HTML + CSS!
```

---

## 🖼️ PART 13: AVATARS & IMAGES

### 13.1 **All Avatar Sizes & Styles**

```
❓ Avatar Sizes used:
- Small (Conversation List): ___ px
- Medium (Chat Thread): ___ px
- Large (Customer Card): ___ px
- Header: ___ px

❓ Avatar Style:
- Border Radius: ___
- Border: ___
- Shadow: ___
- Object Fit: cover?

❓ Avatar Fallback (Initials):
- Background: Gradient? Color based on name?
- Text Color: ___
- Font Size: ___
- Font Weight: ___

❓ Online Indicator on Avatar:
- Size: ___ px
- Position: bottom-right?
- Border: ___ (white border around?)
- Background: ___
- Shadow: ___

❓ Team Avatar Stack:
- Overlap: ___ px (negative margin?)
- Border between: ___
- Max shown: ___ (rest as "+3"?)

❓ Bitte Avatar System HTML + CSS!
```

---

## 🔔 PART 14: NOTIFICATIONS & ALERTS

### 14.1 **Toast Notifications**

```
❓ Toast Style:
- Background: ___
- Border: ___
- Border Radius: ___
- Shadow: ___
- Padding: ___
- Max Width: ___

❓ Toast Types:
Success:
- Background: ___
- Border: ___
- Icon: ___
- Text Color: ___

Error:
- Background: ___
- Icon: ___
- Color: ___

Info:
- Background: ___
- Icon: ___

❓ Toast Position:
- Top Right? Bottom Right?
- Spacing from edge: ___

❓ Toast Animation:
- Slide in from where?
- Duration: ___
- Ease: ___

❓ Bitte Toast HTML + CSS + Animation!
```

### 14.2 **Notification Badge**

```
❓ Notification Dot/Badge:
- Size: ___ px
- Background: ___
- Position: top-right of icon?
- Number inside: Font ___, Size ___
- Pulse Animation? Ja/Nein

❓ Bitte Notification Badge CSS!
```

---

## 🎯 PART 15: ANALYTICS DASHBOARD

### 15.1 **Analytics Overview**

```
❓ Gibt es ein Analytics Dashboard?
- Separate Tab/Page?
- Welche Metriken?

❓ KPI Cards:
- Total Conversations
- Response Time
- Resolution Rate
- Customer Satisfaction
- AI Automation Rate
- etc.

Bitte für JEDE Metrik:
- Label: ___
- Value Format: ___
- Icon/Emoji: ___
- Card Style: ___

❓ Time Range Selector:
- "Last 7 Days", "Last 30 Days" etc.
- Style: ___
- Position: ___

❓ Export Button:
- Style: ___
- CSV? PDF?

❓ Bitte komplettes Analytics HTML + CSS!
```

---

## ⚙️ PART 16: SETTINGS & CONFIGURATION

### 16.1 **Settings Sections**

```
❓ Welche Settings Sections gibt es?
- General
- AI Configuration
- Team
- Notifications
- Integrations
- Billing
- etc.

❓ Settings Navigation:
- Vertical Tabs links?
- Horizontal Tabs oben?
- Style: ___

❓ Setting Item:
┌─────────────────────────────────┐
│ Enable AI Responses      [ON]  │ ← Toggle
│ Let AI answer automatically    │ ← Description
└─────────────────────────────────┘

- Padding: ___
- Border: ___
- Background: ___

❓ Bitte Settings Layout HTML + CSS!
```

---

## 🎬 PART 17: ANIMATIONS & TRANSITIONS

### 17.1 **All Animations**

```
❓ Welche Animationen verwendet ihr?

MESSAGE ENTRANCE:
- Slide up? Fade in? Scale?
- Duration: ___
- Easing: ___

CARD ENTRANCE:
- Animation: ___
- Duration: ___

TAB SWITCH:
- Fade? Slide?
- Duration: ___

MODAL OPEN:
- Scale? Fade?
- Backdrop Fade: ___

HOVER EFFECTS:
- Cards: translateY? scale?
- Buttons: ___
- List Items: ___

LOADING STATES:
- Spinner? Skeleton?
- Style: ___

❓ Bitte ALLE Animation CSS/Keyframes!
```

---

## 📦 PART 18: REACT COMPONENTS

### 18.1 **Component List**

```
❓ Bitte liefere React Components für:

1. DashboardLayout.tsx
2. Sidebar.tsx
3. Header.tsx
4. ConversationList.tsx
5. ConversationItem.tsx
6. ChatThread.tsx
7. ChatMessage.tsx
8. CustomerInfoPanel.tsx
9. MailDashboard.tsx
10. StatsCard.tsx
11. Table.tsx
12. Chart.tsx
13. Button.tsx (alle Varianten)
14. Input.tsx
15. Modal.tsx
16. Dropdown.tsx
17. Tabs.tsx
18. Badge.tsx
19. Avatar.tsx
20. ALLE anderen Components!

Für JEDE Component:
- ✅ TypeScript
- ✅ Props Interface
- ✅ Styled (CSS classes)
- ✅ Event Handlers
- ✅ Ready to use!
```

---

## 🗂️ PART 19: DATA STRUCTURES & TYPES

### 19.1 **TypeScript Interfaces**

```
❓ Bitte ALLE TypeScript Types:

interface Conversation {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerAvatar?: string;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  status: 'open' | 'closed' | 'pending';
  handledBy: 'ai' | 'agent';
  agentId?: string;
  channel: 'chat' | 'email' | 'whatsapp';
  tags?: string[];
  priority?: 'high' | 'normal' | 'low';
  // etc...
}

interface Message {
  id: string;
  conversationId: string;
  sender: 'customer' | 'ai' | 'agent';
  content: string;
  timestamp: string;
  // etc...
}

interface Customer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location?: string;
  createdAt: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder?: Order;
  tags?: string[];
  // etc...
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  total: string;
  status: string;
  items: OrderItem[];
  // etc...
}

❓ Bitte ALLE Interfaces komplett!
```

---

## 📊 PART 20: EXAMPLE DATA (KRITISCH!)

### 20.1 **Realistische Testdaten**

```
❓ Bitte liefere ECHTE Beispieldaten für:

1. **5 Beispiel Conversations** mit:
   - Verschiedene Kunden
   - Verschiedene Channels (Chat, Mail)
   - Verschiedene Status (Open, Closed)
   - AI vs Agent handled
   - Unread counts
   - Realistische Messages

2. **3 Beispiel Customers** mit:
   - Namen, Emails, Avatars
   - Order History (2-3 Orders pro Kunde)
   - Location
   - Tags
   - Stats

3. **Chat Messages** (10+ Beispiele):
   - Customer Questions
   - AI Responses
   - Agent Responses
   - Mit Product Cards
   - Mit Discount Cards
   - Mit Tracking Info

4. **Stats/Analytics Data**:
   - Total Conversations: ___
   - Response Time: ___
   - Resolution Rate: ___
   - AI Automation: ___
   - Chart Data Points

❓ Bitte als JSON exportieren - ready to use!
```

---

## 🖥️ PART 21: SCREENSHOTS & VISUAL REFERENCE

### 21.1 **Required Screenshots**

```
❓ Bitte liefere Screenshots von:

1. ✅ Full Dashboard (Wide view)
2. ✅ Live Chat Dashboard (3-column layout)
3. ✅ Mail Dashboard
4. ✅ Conversation List (zoomed)
5. ✅ Chat Thread (zoomed)
6. ✅ Customer Info Panel (zoomed)
7. ✅ Settings Page
8. ✅ Analytics Dashboard
9. ✅ Mobile View (if responsive)
10. ✅ Dark Mode (if exists)

Alle Screenshots:
- High Resolution
- Annotated (measure pixels?)
- Multiple states (hover, active, etc.)
```

---

## 💻 PART 22: RESPONSIVE DESIGN

### 22.1 **Breakpoints & Mobile**

```
❓ Responsive Breakpoints:
- Mobile: ___ px
- Tablet: ___ px
- Desktop: ___ px
- Large Desktop: ___ px

❓ Mobile Layout:
- Sidebar: Hidden? Drawer?
- Chat: Full screen?
- Customer Info: Hidden? Slide-in?
- Navigation: Bottom? Top?

❓ Touch Targets:
- Minimum size: ___ px (44px standard?)
- Button heights on mobile: ___
- Input heights: ___

❓ Mobile-specific styles:
- Font sizes adjusted?
- Padding reduced?
- Hide certain elements?

❓ Bitte KOMPLETTE Responsive CSS!
```

---

## 🎨 PART 23: DARK MODE (if exists)

### 23.1 **Dark Mode Colors**

```
❓ Habt ihr Dark Mode?
- Ja/Nein?

Falls JA:
❓ Dark Mode Color Palette:
- Background: ___
- Surface: ___
- Text Primary: ___
- Text Secondary: ___
- Border: ___
- Hover: ___
- etc.

❓ Dark Mode Toggle:
- Position: ___
- Style: ___

❓ Bitte ALLE Dark Mode Styles!
```

---

## 🔧 PART 24: SPECIAL COMPONENTS

### 24.1 **Loading States**

```
❓ Loading Spinner:
- Style: ___
- Size: ___
- Color: ___
- Animation: ___

❓ Skeleton Screens:
- For Conversation List?
- For Messages?
- Style: ___
- Animation: shimmer?

❓ Progress Bars:
- Style: ___
- Color: ___

❓ Bitte Loading Components HTML + CSS!
```

### 24.2 **Empty States**

```
❓ No Conversations:
- Illustration? Icon?
- Text: ___
- Style: ___

❓ No Messages:
- Style: ___

❓ No Orders:
- Style: ___

❓ Search No Results:
- Style: ___

❓ Bitte Empty States HTML + CSS!
```

### 24.3 **Tooltips**

```
❓ Tooltip Style:
- Background: ___
- Text Color: ___
- Padding: ___
- Border Radius: ___
- Shadow: ___
- Arrow: Ja/Nein? Style?
- Font Size: ___
- Max Width: ___

❓ Tooltip Position:
- top, bottom, left, right?
- Offset: ___

❓ Bitte Tooltip CSS!
```

---

## 🎯 PART 25: INTERACTIONS & BEHAVIORS

### 25.1 **Click Interactions**

```
❓ Was passiert bei Click auf:
- Conversation Item → Chat Thread öffnet?
- Message → Actions angezeigt?
- Customer Name → Customer Detail?
- Order → Order Detail Modal?
- Status Badge → Filter?
- Tag → Filter by Tag?

❓ Bitte Behavior beschreiben!
```

### 25.2 **Keyboard Shortcuts**

```
❓ Keyboard Navigation:
- Arrow Up/Down: Navigate List?
- Enter: Open Conversation?
- Escape: Close Modal?
- Cmd/Ctrl + K: Search?
- etc.

❓ Bitte Liste ALLER Shortcuts!
```

---

## 📋 PART 26: COMPLETE CSS FILE

### 26.1 **One CSS File to Rule Them All**

```
❓ Bitte liefere eine KOMPLETTE CSS Datei:

dashboard-complete.css

Mit:
- ✅ CSS Variables (colors, spacing, shadows)
- ✅ Layout Styles (grid, flex)
- ✅ Component Styles (buttons, inputs, cards)
- ✅ Dashboard-specific Styles
- ✅ Responsive Breakpoints
- ✅ Animations & Transitions
- ✅ Dark Mode (if exists)
- ✅ Utility Classes

KOMPLETT & READY TO USE!
Mindestens 2000+ Zeilen!
```

---

## 🎯 PART 27: INTEGRATION GUIDE

### 27.1 **How to Use**

```
❓ Bitte liefere Step-by-Step Guide:

1. Installation:
   - npm packages needed?
   - Dependencies?

2. Setup:
   - Import CSS where?
   - Import Components how?

3. Usage Example:
   ```tsx
   <DashboardLayout>
     <Sidebar />
     <MainContent>
       <ConversationList />
       <ChatThread />
       <CustomerInfo />
     </MainContent>
   </DashboardLayout>
   ```

4. Configuration:
   - Props needed?
   - State management?
   - API endpoints format?

❓ Bitte KOMPLETTER Integration Guide!
```

---

## 📊 PART 28: SPECIFIC DASHBOARD SECTIONS

### 28.1 **Dashboard Home/Overview**

```
❓ Home Dashboard Layout:
- Stats Row oben? Welche Stats?
- Charts? Welche?
- Recent Activity?
- Quick Actions?

❓ Bitte komplettes Home Dashboard HTML + CSS!
```

### 28.2 **Team Management**

```
❓ Team Section:
- Team Member Card: Style?
- Online Status: ___
- Role Badge: ___
- Avatar: ___
- Actions: ___

❓ Bitte Team Section HTML + CSS!
```

### 28.3 **AI Configuration Panel**

```
❓ AI Settings:
- Toggle Switches: Style?
- Sliders: Style?
- Dropdown Selects: Style?
- Info Cards: Style?

❓ Bitte AI Config HTML + CSS!
```

---

## 🎨 PART 29: MICRO-INTERACTIONS

### 29.1 **Hover Effects**

```
❓ Alle Hover Effects beschreiben:
- Cards: translateY? scale? shadow?
- Buttons: ___
- List Items: ___
- Links: ___
- Icons: ___
- Table Rows: ___

❓ Transition Timings:
- Fast: ___ ms
- Normal: ___ ms
- Slow: ___ ms

❓ Easing Functions:
- ease-in-out?
- cubic-bezier?
- Welche genau?
```

### 29.2 **Focus States**

```
❓ Focus Rings:
- Color: ___
- Width: ___
- Offset: ___
- Border Radius: ___

❓ Focus Visible:
- Input Fields: ___
- Buttons: ___
- Links: ___
- Interactive Elements: ___

❓ Accessibility:
- Skip Links?
- ARIA Labels?
- Screen Reader optimiert?

❓ Bitte Focus System CSS!
```

---

## 🔍 PART 30: SEARCH & FILTER

### 30.1 **Search Bar**

```
❓ Search Complete Design:
- Width: ___
- Height: ___
- Background: ___
- Border: ___
- Border Radius: ___
- Icon: Position ___, Size ___, Color ___
- Placeholder: ___
- Focus Style: ___

❓ Search Results:
- Dropdown appears?
- Style: ___
- Highlighting: ___

❓ Bitte Search Component HTML + CSS!
```

### 30.2 **Filter System**

```
❓ Filter UI:
- Filter Button: Style?
- Filter Panel: Slide-in? Modal?
- Background: ___
- Padding: ___

❓ Filter Options:
- Checkboxes? Toggles?
- Multi-select?
- Style: ___

❓ Active Filters Display:
- Chips/Tags? Style?
- Clear Button: ___

❓ Bitte Filter System HTML + CSS!
```

---

## 📱 PART 31: MOBILE APP DESIGN

### 31.1 **Mobile Specific**

```
❓ Habt ihr eine Mobile Version?
- Responsive Website? Oder separate App?

❓ Mobile Navigation:
- Bottom Tab Bar?
- Hamburger Menu?
- Style: ___

❓ Mobile Chat:
- Full Screen?
- Back Button: ___
- Header: ___

❓ Bitte Mobile Specific Styles!
```

---

## 🎯 PART 32: PERFORMANCE & OPTIMIZATION

### 32.1 **Performance Features**

```
❓ Virtual Scrolling:
- For long lists?
- Library: react-window? react-virtual?

❓ Lazy Loading:
- Images?
- Messages?
- Components?

❓ Optimizations:
- Memoization?
- Code Splitting?
- Debouncing?

❓ Bitte Performance Best Practices!
```

---

## 🎨 PART 33: ICONS & ASSETS

### 33.1 **Icon System**

```
❓ Welche Icon Library:
- Lucide React?
- Heroicons?
- Custom SVGs?
- Font Icons?

❓ Icon Sizes used:
- xs: ___ px
- sm: ___ px
- md: ___ px
- lg: ___ px
- xl: ___ px

❓ Icon Colors:
- Default: ___
- Hover: ___
- Active: ___
- Disabled: ___

❓ Bitte Liste ALLER verwendeten Icons:
- Bot Icon (AI)
- User Icon (Customer)
- Mail Icon
- Chat Icon
- Settings Icon
- Filter Icon
- Search Icon
- Close Icon
- Check Icon
- Arrow Icons
- etc.

Für JEDES Icon:
- Name: ___
- Size: ___
- Color: ___
- Usage: ___
```

### 33.2 **Logos & Branding**

```
❓ Logo in Dashboard:
- Size: ___
- Position: ___
- Dark Mode variant?
- URL: ___

❓ Favicon:
- URL: ___
```

---

## 🎯 PART 34: SPECIAL FEATURES

### 34.1 **Real-Time Updates**

```
❓ Real-Time Indicators:
- New Message Notification: Style?
- Typing Indicator (Agent): Style?
- Online/Offline Status: Auto-update?

❓ Websocket/Polling:
- Visual indicators when connected?
- Reconnecting state: ___
```

### 34.2 **Bulk Actions**

```
❓ Multi-Select Mode:
- Checkbox Style: ___
- Selected Row: ___
- Bulk Action Bar: ___
- Actions: Mark Read, Assign, Close, etc.

❓ Bitte Bulk Actions HTML + CSS!
```

### 34.3 **Drag & Drop**

```
❓ Drag & Drop Features:
- File Upload: Style?
- Reorder conversations?
- Visual feedback: ___

❓ Bitte Drag & Drop Styles!
```

---

## 📦 PART 35: DEPENDENCIES & PACKAGES

### 35.1 **NPM Packages**

```
❓ Welche Packages brauchen wir?

{
  "dependencies": {
    "react": "___",
    "lucide-react": "___",
    "recharts": "___",  // Falls Charts
    "react-table": "___",  // Falls Tables
    "framer-motion": "___",  // Falls Animations
    // ALLE Dependencies!
  }
}

❓ Versions:
- React Version: ___
- TypeScript: ___
- etc.
```

---

## 🎯 PART 36: DELIVERABLES CHECKLIST

### Was wir am Ende haben wollen:

```
✅ 1. dashboard-complete.css (2000+ Zeilen)
✅ 2. dashboard-types.ts (Alle TypeScript Interfaces)
✅ 3. DashboardLayout.tsx (Main Layout Component)
✅ 4. Sidebar.tsx
✅ 5. Header.tsx
✅ 6. ConversationList.tsx
✅ 7. ConversationItem.tsx
✅ 8. ChatThread.tsx
✅ 9. ChatMessage.tsx (Dashboard version)
✅ 10. CustomerInfoPanel.tsx
✅ 11. MailDashboard.tsx
✅ 12. StatsCard.tsx
✅ 13. Table.tsx
✅ 14. Chart Components (Line, Bar, Donut)
✅ 15. Button.tsx (alle Varianten)
✅ 16. Input.tsx, Select.tsx, etc.
✅ 17. Modal.tsx
✅ 18. Dropdown.tsx
✅ 19. Tabs.tsx
✅ 20. Badge.tsx
✅ 21. Avatar.tsx
✅ 22. Toast.tsx
✅ 23. example-data.json (Testdaten)
✅ 24. integration-guide.md
✅ 25. Screenshots (10+ Images)

ALLES KOMPLETT & READY TO USE!
```

---

## 🎯 PART 37: FORMAT DER ANTWORT

### Bitte liefere in diesem Format:

```markdown
# REPLAINOW DASHBOARD - COMPLETE DESIGN EXPORT

## 1. CSS Variables
:root {
  --dashboard-primary: ___;
  /* ALLE Variables */
}

## 2. Complete CSS File
/* dashboard-complete.css */
/* 2000+ Zeilen Production CSS */

## 3. Layout Components

### DashboardLayout.tsx
```tsx
// Komplette Component mit Props & Types
```

### Sidebar.tsx
```tsx
// Komplette Component
```

// etc für ALLE Components!

## 4. Example Data
```json
{
  "conversations": [...],
  "customers": [...],
  "messages": [...],
  "orders": [...]
}
```

## 5. Screenshots
- dashboard-full.png
- chat-dashboard.png
- mail-dashboard.png
// etc

## 6. Integration Guide
Step-by-step wie man es verwendet
```

---

## 🔥 PART 38: ULTRA-SPEZIFISCHE FRAGEN

### 38.1 **Live Chat Dashboard Spezifisch**

```
❓ Conversation Assignment:
- Wie sieht "Assign to Agent" aus?
- Dropdown? Modal?
- Agent Avatars: ___
- Style: ___

❓ AI Takeover Button:
- "Let AI Handle" - Style?
- Position: ___
- Icon: ___

❓ Conversation Tags:
- Wie hinzufügen?
- Autocomplete?
- Style: ___

❓ Message Templates:
- Gibt es Saved Replies?
- Wie angezeigt?
- Style: ___

❓ Rich Text Editor:
- Welcher Editor? (TipTap, Quill, etc.)
- Toolbar: Bold, Italic, Link, etc. - Style?
- Attachments: How to add?
- Emoji Picker: Style?
```

### 38.2 **Mail Dashboard Spezifisch**

```
❓ Email Composer:
- To, CC, BCC Fields: Style?
- Subject Line: Style?
- Rich Editor: ___
- Attachments: Style?
- Send Button: ___

❓ Email Thread View:
- Collapsed Emails: Style?
- Expanded Email: Style?
- Reply/Forward Buttons: ___

❓ Email Filters:
- Inbox, Sent, Spam, Trash - Tabs?
- Style: ___
```

### 38.3 **Analytics Dashboard Spezifisch**

```
❓ Chart Types:
- Response Time Line Chart: Colors ___, Style ___
- Conversations Bar Chart: ___
- AI vs Agent Donut: ___
- Resolution Rate: ___

❓ Date Range Picker:
- Style: ___
- Calendar Popup: ___

❓ Export Options:
- CSV, PDF - Buttons?
- Style: ___
```

---

## 💼 PART 39: CUSTOMER DETAILS

### 39.1 **Customer Profile Extended**

```
❓ Full Customer Profile:

BASIC INFO:
- Name, Email, Phone, Location
- Avatar
- Customer Since
- Total Orders, Total Spent
- Last Order Date
- Style: ___

ORDER HISTORY TABLE:
- Columns: Order#, Date, Total, Status, Items
- Row Style: ___
- Expandable? Show Items?

CONVERSATION HISTORY:
- List previous conversations?
- Style: ___

TAGS/SEGMENTS:
- VIP, Returning, First-time, etc.
- Style: ___

NOTES:
- Internal notes section?
- Style: ___

❓ Bitte komplettes Customer Profile HTML + CSS!
```

---

## 🎯 PART 40: ACTION BUTTONS & DROPDOWNS

### 40.1 **All Action Buttons**

```
❓ Conversation Actions:
- Close Conversation: Style ___
- Assign to Agent: Style ___
- Mark as Spam: Style ___
- Add Tag: Style ___
- Set Priority: Style ___
- Send Discount: Style ___
- Send Product: Style ___

❓ Message Actions:
- Copy: Style ___
- Edit: Style ___
- Delete: Style ___
- Pin: Style ___

❓ Bitte ALLE Action Buttons HTML + CSS!
```

---

## 🎨 PART 41: PRODUCT & DISCOUNT SEND UI

### 41.1 **Send Product UI (in Dashboard)**

```
❓ Wie senden Agents Produkte?
- Button "Send Product"?
- Modal öffnet sich?
- Product Search/Select?
- Preview before send?

❓ Product Picker:
- Search Input: ___
- Product Grid/List: ___
- Product Card in Picker: Style?
- Select Button: ___

❓ Bitte komplettes Send Product UI!
```

### 41.2 **Send Discount UI**

```
❓ Wie senden Agents Discounts?
- Preset Codes? Dropdown?
- Generate new Code?
- Preview: ___

❓ Discount Picker:
- Code Input: ___
- Type Select: Percentage/Fixed/Free Shipping
- Value Input: ___
- Expiry Select: ___
- Preview: ___

❓ Bitte komplettes Send Discount UI!
```

---

## 📊 PART 42: METRICS & STATS DISPLAY

### 42.1 **All Metrics**

```
❓ Welche Metriken gibt es?

PERFORMANCE:
- Average Response Time: Format? Icon?
- First Response Time: ___
- Resolution Time: ___

VOLUME:
- Total Conversations: ___
- Today: ___
- This Week: ___
- This Month: ___

AUTOMATION:
- AI Automation Rate: ___ %
- AI Accuracy: ___
- Auto-Resolved: ___

SATISFACTION:
- CSAT Score: ___
- Happy Customers: ___
- Ratings: ___

❓ Wie angezeigt:
- Big Number Card?
- Progress Bar?
- Chart?
- Trend Indicator (↑ ↓)?

❓ Bitte für JEDE Metrik: HTML + CSS + Format!
```

---

## 🎯 PART 43: SETTINGS SCREENS

### 43.1 **All Settings Pages**

```
❓ Settings Navigation:
- Sidebar with sections?
- Tabs?
- Breadcrumbs?

❓ Settings Sections (komplett beschreiben):

1. GENERAL SETTINGS:
   - Shop Name, Logo, etc.
   - Style: ___

2. AI CONFIGURATION:
   - Enable/Disable AI
   - AI Name
   - AI Signature
   - Response Style
   - Auto-Approve
   - etc.
   - Style für JEDE Option!

3. TEAM SETTINGS:
   - Add Team Member
   - Role Management
   - Permissions
   - Style: ___

4. NOTIFICATION SETTINGS:
   - Email Notifications
   - Browser Notifications
   - Slack Integration
   - Style: ___

5. APPEARANCE:
   - Theme Toggle
   - Color Customization
   - Logo Upload
   - Style: ___

❓ Bitte für JEDE Settings Section: HTML + CSS!
```

---

## 🎨 PART 44: CARD VARIATIONS

### 44.1 **All Card Types**

```
❓ Welche Card Types gibt es im Dashboard?

1. STAT CARD:
   - Style: ___

2. CONVERSATION CARD:
   - Style: ___

3. CUSTOMER CARD:
   - Style: ___

4. ORDER CARD:
   - Style: ___

5. ACTIVITY CARD:
   - Style: ___

6. NOTIFICATION CARD:
   - Style: ___

7. INFO CARD:
   - Style: ___

Für JEDE Card:
- Dimensions: ___
- Padding: ___
- Background: ___
- Border: ___
- Shadow: ___
- Hover: ___

❓ Bitte ALLE Card Varianten HTML + CSS!
```

---

## 🎯 PART 45: REALISTISCHE TESTDATEN (MEGA WICHTIG!)

### 45.1 **Complete Example Dataset**

```
❓ Bitte liefere REALISTISCHE Testdaten:

1. **10 Conversations** mit:
   - IDs, Customer Names, Emails
   - Last Messages (verschiedene Typen)
   - Timestamps (verschiedene: "vor 2 Min", "vor 1h", "gestern")
   - Status (open, closed, pending)
   - Unread Counts (0, 1, 3, 12, etc.)
   - Channels (Chat, Mail, WhatsApp)
   - Handled By (AI, Agent, None)
   - Agent Names (falls assigned)
   - Tags (VIP, Bug, Refund, Question, etc.)
   - Priority (high, normal, low)

2. **5 Customers** mit:
   - Full Profile Data
   - Avatars (URLs oder Fallback)
   - Order History (2-4 Orders pro Kunde)
   - Tags
   - Location
   - Stats (Total Spent, Order Count)

3. **30+ Messages** für verschiedene Conversations:
   - Customer Messages
   - AI Messages (mit verschiedenen Card Types)
   - Agent Messages
   - System Messages
   - Timestamps
   - Read/Unread Status

4. **10 Orders**:
   - Order Numbers
   - Dates
   - Items
   - Totals
   - Status
   - Tracking (falls shipped)

5. **Analytics Data**:
   - Chart Data Points (letzte 30 Tage)
   - KPI Values
   - Trends

❓ Bitte als JSON Files:
- conversations.json
- customers.json
- messages.json
- orders.json
- analytics.json

KOMPLETT & REALISTISCH!
```

---

## 🎯 PART 46: EDGE CASES & STATES

### 46.1 **All Possible States**

```
❓ Loading States:
- Initial Load: Skeleton? Spinner?
- Lazy Load: ___
- Infinite Scroll Loading: ___
- Button Loading: ___

❓ Error States:
- Network Error: ___
- 404 Not Found: ___
- 500 Server Error: ___
- Permission Denied: ___

❓ Empty States:
- No Conversations: ___
- No Messages: ___
- No Orders: ___
- Search No Results: ___
- Filter No Results: ___

❓ Success States:
- Message Sent: Toast? Checkmark?
- Settings Saved: ___
- File Uploaded: ___

❓ Bitte für JEDEN State: HTML + CSS!
```

---

## 🎯 PART 47: ACCESSIBILITY

### 47.1 **A11y Features**

```
❓ Accessibility:
- Keyboard Navigation: Komplett?
- Screen Reader: ARIA labels?
- Focus Management: ___
- Color Contrast: WCAG AA? AAA?
- Touch Targets: Min 44px?

❓ Skip Links:
- "Skip to Content"?
- Style: ___

❓ Bitte A11y Best Practices dokumentieren!
```

---

## 🎯 PART 48: PRINT & EXPORT STYLES

### 48.1 **Print Styles**

```
❓ Print CSS:
- Conversation Export?
- Report Export?
- Style für Print: ___

❓ PDF Export:
- Layout: ___
- Branding: ___
```

---

## 🎯 PART 49: CUSTOM COMPONENTS

### 49.1 **Alle Custom Components**

```
❓ Habt ihr custom Components?
- Multi-Tab Interface?
- Split Pane Resizable?
- Context Menus?
- Command Palette?
- Shortcuts Modal?

❓ Bitte für JEDE Custom Component: HTML + CSS + Props!
```

---

## 🎯 PART 50: FINAL COMPLETE PACKAGE

### 50.1 **Complete Folder Structure**

```
dashboard/
├── css/
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── dashboard-complete.css
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   ├── chat/
│   │   ├── ConversationList.tsx
│   │   ├── ChatThread.tsx
│   │   └── ...
│   ├── mail/
│   │   ├── MailList.tsx
│   │   └── ...
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   └── ...
├── types/
│   └── dashboard-types.ts
├── data/
│   ├── conversations.json
│   ├── customers.json
│   └── ...
├── screenshots/
│   ├── full-dashboard.png
│   └── ...
└── README.md (Integration Guide)

❓ Bitte KOMPLETTE Struktur mit allen Files!
```

---

## 💬 PART 51: COMMUNICATION TO AGENT

### Lieber Dashboard Agent,

Wir brauchen das **KOMPLETTE Dashboard Design** - so detailliert wie nur möglich!

**Warum so detailliert?**
- Wir wollen es 1:1 auf der Marketing Website nachbauen
- Shopify Händler sollen sehen WIE das Dashboard aussieht
- Wir brauchen funktionierende Demos, nicht nur Screenshots
- Jeder Pixel muss stimmen!

**Was wir mit den Daten machen:**
1. ✅ Hero Section - Dashboard Preview (animated!)
2. ✅ Features Section - Zeigen spezifische Features
3. ✅ Demo Section - Interactive Dashboard Demo
4. ✅ Screenshots - Für Marketing Material
5. ✅ Video Creation - Screen Recordings

**Bitte nichts auslassen!**
- Wenn es eine Farbe gibt → wir brauchen den Hex Code!
- Wenn es ein Spacing gibt → wir brauchen die Pixel!
- Wenn es eine Animation gibt → wir brauchen die Keyframes!
- Wenn es ein Component gibt → wir brauchen den React Code!

**Format:**
- CSS: Production-ready, copy-paste fertig
- HTML: Semantic, accessible
- React: TypeScript, mit Props & Types
- JSON: Realistische Testdaten
- Screenshots: High-res, annotated

---

## 🚀 URGENCY & PRIORITY

**KRITISCH!** Wir brauchen das für:
- Marketing Website Launch
- Demo Videos
- Sales Material
- Investor Presentations

Je **detaillierter** und **kompletter** die Antwort, desto besser!

**MINIMUM 5000+ Zeilen Code + Daten!**

---

## ✅ FINAL CHECKLIST

Vor dem Absenden, bitte sicherstellen:

- [ ] Alle CSS Variables dokumentiert
- [ ] Komplette CSS Datei (2000+ Zeilen)
- [ ] Alle React Components (20+)
- [ ] Alle TypeScript Types
- [ ] Realistische Testdaten (100+ Datenpunkte)
- [ ] Screenshots (10+)
- [ ] Integration Guide
- [ ] Alle Farben als Hex
- [ ] Alle Sizes in px
- [ ] Alle Animations als Keyframes
- [ ] Mobile Responsive Styles
- [ ] Dark Mode (falls exists)
- [ ] Accessibility Features
- [ ] Performance Best Practices

**KEINE Abkürzungen! KEINE "ungefähr"! NUR EXAKTE Werte!**

---

## 🎯 EXAMPLE OF PERFECT ANSWER

### Was wir erwarten (Beispiel für eine Section):

```markdown
## CONVERSATION LIST ITEM - COMPLETE SPECIFICATION

### Dimensions:
- Height: 88px (fixed)
- Padding: 16px
- Gap between elements: 12px

### Avatar:
- Size: 40px × 40px
- Border-Radius: 50%
- Border: none
- Object-fit: cover
- Fallback: 2-letter initials, background: linear-gradient(135deg, #8B5CF6, #EC4899)

### Customer Name:
- Font-Family: 'Inter'
- Font-Size: 15px
- Font-Weight: 600
- Color: #000000
- Letter-Spacing: -0.01em
- Line-Height: 1.3

### Last Message:
- Font-Size: 13px
- Font-Weight: 400
- Color: #525252
- Line-Height: 1.5
- Max-Lines: 2
- Text-Overflow: ellipsis
- Display: -webkit-box
- -webkit-line-clamp: 2
- -webkit-box-orient: vertical

### Complete CSS:
```css
.conversation-item {
  height: 88px;
  padding: 16px;
  /* etc - ALLES! */
}
```

### Complete HTML:
```html
<div class="conversation-item">
  <!-- ALLES! -->
</div>
```

### React Component:
```tsx
interface ConversationItemProps {
  // ALLES!
}
export const ConversationItem: React.FC<...> = ({...}) => {
  // KOMPLETT!
}
```

### Example Data:
```json
{
  "id": "conv_001",
  "customerName": "Sarah Klein",
  // ALLES!
}
```

**DAS für JEDE Section!**
```

---

## 🔥 ABSCHLUSS

**Lieber Dashboard Agent:**

Bitte gib uns das **KOMPLETTESTE Dashboard Design Export aller Zeiten**!

Wir wollen es **1:1** nachbauen können - **JEDES Detail** zählt!

**Denke an:**
- Shopify Händler werden das sehen
- Investoren werden das sehen
- Kunden werden das sehen
- Es muss **PERFEKT** sein!

**Danke für die ultra-detaillierte Arbeit!** 💪🔥

---

**Erstellt von**: Marketing Website Team  
**Für**: Dashboard Repo Agent  
**Datum**: 29. November 2025  
**Status**: MEGA ULTRA ENTERPRISE PROMPT - READY! 🚀  
**Erwartete Antwort Länge**: 10.000+ Zeilen (minimum!)












