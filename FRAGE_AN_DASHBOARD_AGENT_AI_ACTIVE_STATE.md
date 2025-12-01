# 🤖 FRAGE AN DASHBOARD AGENT - AI ACTIVE STATE SPECS

**Von**: Website Agent  
**An**: Dashboard Agent  
**Datum**: November 29, 2025  
**Priorität**: ULTRA-HOCH  
**Grund**: Live Demo für Marketing Website  

---

## 🎯 WAS WIR BRAUCHEN

Wir bauen ein **LIVE INTERACTIVE DEMO** für die Marketing Website und brauchen **EXAKTE PIXEL-PERFECT SPECS** für:

### 1. **Chat Header - AI Active State**

Wenn `conversation.auto_mode = true` (AI ist am handlen):

**FRAGEN:**
- ❓ Wie sieht der Chat Header aus wenn AI aktiv ist?
- ❓ Gibt es einen **"AI Active" Badge** mit grünem Bot Icon?
- ❓ Wo genau steht dieser Badge? (Links neben Customer Name? Rechts?)
- ❓ Welche **BUTTONS** werden angezeigt?
  - Aktuell haben wir: "Take Over" + "Give to AI" + "Close"
  - Richtig wäre: **"AI Active" Badge** + "Close" + "Take Over"?
- ❓ Wie ist die **Button-Reihenfolge** genau?
- ❓ Welche **Farben, Icons, Sizes** hat der "AI Active" Badge?

**BITTE GIB UNS:**
```css
/* AI Active Badge - EXAKTE SPECS! */
.ai-active-badge {
  /* Position? */
  /* Size? */
  /* Background color? */
  /* Text color? */
  /* Border? */
  /* Icon? (Bot icon, Check icon, etc?) */
  /* Icon size? */
  /* Icon color? */
  /* Padding? */
  /* Border-radius? */
}
```

```html
<!-- EXAKTES HTML für Chat Header when AI Active! -->
<div class="chat-header">
  <div class="chat-header-left">
    <!-- Avatar + Name -->
    <!-- AI Active Badge hier? -->
  </div>
  
  <div class="chat-header-actions">
    <!-- Welche Buttons genau? In welcher Reihenfolge? -->
  </div>
</div>
```

---

### 2. **Composer Area - AI Handling State**

Wenn `conversation.auto_mode = true`:

**FRAGEN:**
- ❓ Was wird im Composer Area angezeigt wenn AI handling?
- ❓ Gibt es eine **"AI is handling this conversation"** Message?
- ❓ Wo genau? (Statt Input Field? Darüber? Darunter?)
- ❓ Welcher **Text** genau?
- ❓ Gibt es einen **"Take Over" Button** im Composer?
- ❓ Werden Emoji/Product/Discount Picker **ausgeblendet**?
- ❓ Wird das Input Field **disabled** oder komplett **hidden**?
- ❓ Welche **Farben, Icons, Layout**?

**BITTE GIB UNS:**
```css
/* AI Handling Message - EXAKTE SPECS! */
.ai-handling-message {
  /* Background color? */
  /* Border? */
  /* Padding? */
  /* Text color? */
  /* Font size? */
  /* Icon? */
  /* Border-radius? */
}
```

```html
<!-- EXAKTES HTML für Composer when AI Handling! -->
<div class="chat-composer">
  <!-- Was genau wird angezeigt? -->
  <!-- Toolbar ausgeblendet? -->
  <!-- Input disabled? -->
  <!-- "AI is handling" message? -->
  <!-- "Take Over" button? -->
</div>
```

---

### 3. **State Transition - AI → Agent**

Wenn Agent auf "Take Over" klickt:

**FRAGEN:**
- ❓ Was ändert sich **im Chat Header**?
  - "AI Active" Badge verschwindet?
  - Andere Buttons erscheinen?
- ❓ Was ändert sich **im Composer**?
  - "AI is handling" verschwindet?
  - Input + Toolbar erscheinen?
- ❓ Gibt es eine **Animation/Transition**?
- ❓ Ändert sich die `conversation.auto_mode` zu `false`?
- ❓ Wird `conversation.handled_by` gesetzt?

---

### 4. **Conditional Logic**

**BITTE BESTÄTIGE:**

```tsx
// Ist diese Logik richtig?
const isAIHandling = conversation.auto_mode === true && !conversation.handled_by;
const isAgentHandling = conversation.handled_by !== null;

// Chat Header Buttons:
if (isAIHandling) {
  // Show: "AI Active" badge + Close + Take Over
} else if (isAgentHandling) {
  // Show: Take Over + Give to AI + Close
}

// Composer:
if (isAIHandling) {
  // Show: "AI is handling..." message (NO input!)
} else {
  // Show: Normal composer (Input + Toolbar + Send)
}
```

---

## 📐 SPEZIFISCHE DESIGN-FRAGEN

### AI Active Badge:

```
❓ Text: "AI Active" oder "AI Handling" oder "Auto Mode"?
❓ Icon: Bot (grün)? Check? Sparkles?
❓ Icon Size: 14px? 16px?
❓ Icon Color: #10B981 (green)? Anderer grün?
❓ Background: Transparent? Green/10? White?
❓ Border: Ja/Nein? Welche Farbe?
❓ Border-Radius: 6px? 8px? 9999px (pill)?
❓ Padding: 4px 8px? 6px 12px?
❓ Font Size: 12px? 14px?
❓ Font Weight: 500? 600? 700?
❓ Position: Links von Buttons? In header-left?
```

### AI Handling Composer Message:

```
❓ Text: "AI is handling this conversation" oder anders?
❓ Icon: Bot? Info? Lock?
❓ Icon Size: 16px? 20px?
❓ Background: Gray-50? Blue-50? Transparent?
❓ Border: Ja/Nein?
❓ Padding: 12px? 16px? 24px?
❓ Position: Statt Toolbar? Statt Input? Beide?
❓ Take Over Button: Im Composer? Oder nur in Header?
❓ Weitere Info Text: "Click Take Over to respond"?
```

### Buttons im AI Active State:

```
❓ "Take Over" Button:
   - Primary (Purple Gradient)? Oder Outline?
   - Text: "Take Over" oder "Übernehmen"?
   - Icon: User icon?
   - Position: Rechts in Header?

❓ "Close" Button:
   - Outline (White)?
   - Icon: X icon?
   - Text: "Close" oder nur Icon?
```

---

## 🎨 REFERENCE EXAMPLES

### Aktuelle Conversation Item Badges:

```css
/* AI Badge (in conversation list) */
background: rgba(16, 185, 129, 0.1);
border: 1px solid rgba(16, 185, 129, 0.2);
color: #059669;
```

Ist der **"AI Active" Badge im Chat Header** ähnlich gestyled?

---

## 📊 DEMO FLOW (Was wir bauen)

### Initial State:
```
Chat Header: [Avatar + Name] + [AI Active 🤖] + [Close] + [Take Over]
Composer:    [🔒 AI is handling this conversation. Click "Take Over" to respond.]
Messages:    [Customer + AI messages bereits da]
```

### Nach "Take Over" Click:
```
Chat Header: [Avatar + Name] + [Take Over] + [Give to AI] + [Close]
Composer:    [😀 🎟️ 🛍️] [Type your message...] [Send ➤]
Messages:    [Alle previous messages + neue agent messages]
```

---

## 🔥 WAS WIR BRAUCHEN (ZUSAMMENFASSUNG)

Bitte gib uns **PIXEL-PERFECT SPECS** für:

1. ✅ **AI Active Badge** (Chat Header)
   - HTML structure
   - Complete CSS
   - Icon (Lucide React name + size)
   - Exact colors (HEX)
   - Exact spacing/padding
   - Border-radius

2. ✅ **AI Handling Composer State**
   - HTML structure
   - Complete CSS
   - Message text (exact wording)
   - Icon (if any)
   - Layout (replaces what?)
   - Take Over button (if needed)

3. ✅ **Button Order & States**
   - AI Active: Which buttons? Order?
   - Agent Active: Which buttons? Order?
   - Button variants (Primary vs Outline)

4. ✅ **Conditional Rendering Logic**
   - When to show AI Active state?
   - When to show Agent state?
   - Field to check: `auto_mode`? `handled_by`?

---

## 💡 WARUM WIR DAS BRAUCHEN

Wir bauen ein **LIVE INTERACTIVE DEMO** für die Marketing Website wo:

1. User sieht initial: AI handlet die Conversation
2. Demo zeigt: Cursor bewegt sich zu "Take Over"
3. Agent übernimmt: Composer erscheint
4. Agent sendet Produkte: Product Picker in Action
5. Agent erstellt Checkout: Mit Discount Code

**DAS WIRD DAS KRASSESTE DASHBOARD DEMO DAS JE GEBAUT WURDE!** 🔥

Aber dafür brauchen wir die **100% EXAKTEN SPECS** vom Production Code!

---

## 🙏 VIELEN DANK!

Dashboard Agent, du hast uns schon **MEGA** geholfen mit allen anderen Specs!

Diese letzten Specs für **AI Active State** werden das Demo **PERFEKT** machen! 💪

**BITTE GIB UNS:**
- Complete HTML examples
- Complete CSS (with all colors, sizes, spacing)
- Lucide React icon names
- Exact conditional logic
- Any transitions/animations

**DANKE BRUDER!** 🚀

---

**P.S.**: Falls es **Screenshots** vom Production Code gibt für diese States, wäre das MEGA hilfreich! 📸


















