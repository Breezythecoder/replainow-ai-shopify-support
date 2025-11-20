# 🚚 TRACKING CARD - DESIGN UPDATE

## AUFGABE
Ändere die TrackingCard im Worker Repo **EXAKT** so ab wie hier beschrieben. Das Design muss 1:1 übernommen werden.

---

## ❌ WAS ENTFERNT WERDEN MUSS
**ENTFERNE den kompletten Status-Bereich** (Unterwegs, Zugestellt, In Bearbeitung) - das kann der Bot nicht anzeigen.

---

## ✅ FINALES DESIGN

### HTML STRUKTUR (ohne Status)

```html
<div class="tracking-card">
    <!-- Header -->
    <div class="header">
        <div class="icon-container">
            <svg class="truck-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
            </svg>
        </div>
        <div class="header-text">
            <div class="header-title">Sendungsverfolgung</div>
            <div class="header-subtitle">Bestellung #{{orderNumber}}</div>
        </div>
    </div>

    <!-- Tracking Info -->
    <div class="tracking-info">
        <div class="info-row">
            <span class="info-label">Versanddienstleister</span>
            <span class="info-value">{{carrier}}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Sendungsnummer</span>
            <span class="info-value">{{trackingNumber}}</span>
        </div>
    </div>

    <!-- CTA Button -->
    <a href="{{trackingUrl}}" target="_blank" class="cta-button">
        Sendung verfolgen
        <span>→</span>
    </a>
</div>
```

---

## 🎨 KOMPLETTES CSS

```css
/* Container */
.tracking-card {
    max-width: 400px;
    width: 100%;
    background: white;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 
        0 1px 2px rgba(0, 0, 0, 0.04), 
        0 2px 4px rgba(0, 0, 0, 0.04), 
        0 4px 8px rgba(0, 0, 0, 0.04), 
        0 8px 16px rgba(0, 0, 0, 0.04);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.tracking-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.06), 
        0 4px 8px rgba(0, 0, 0, 0.06), 
        0 8px 16px rgba(0, 0, 0, 0.06), 
        0 16px 32px rgba(0, 0, 0, 0.08);
}

/* Header */
.tracking-card .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
}

.tracking-card .icon-container {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FAFAFA;
    border-radius: 12px;
    flex-shrink: 0;
}

.tracking-card .truck-icon {
    width: 20px;
    height: 20px;
    color: #525252;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.tracking-card .header-text {
    flex: 1;
    min-width: 0;
}

.tracking-card .header-title {
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    line-height: 1.4;
    margin: 0 0 2px 0;
}

.tracking-card .header-subtitle {
    font-size: 11px;
    color: #525252;
    line-height: 1.4;
    margin: 0;
}

/* Tracking Info Box */
.tracking-card .tracking-info {
    background: #FAFAFA;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
}

.tracking-card .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.tracking-card .info-row:not(:last-child) {
    margin-bottom: 8px;
}

.tracking-card .info-label {
    font-size: 12px;
    color: #525252;
    font-weight: 500;
    line-height: 1.4;
}

.tracking-card .info-value {
    font-size: 13px;
    color: #000000;
    font-weight: 600;
    line-height: 1.4;
    text-align: right;
}

/* CTA Button */
.tracking-card .cta-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px 16px;
    background: #f3f4f6;
    color: #111827;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    border-radius: 12px;
    border: none;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.tracking-card .cta-button:hover {
    background: #e5e7eb;
    color: #000000;
    transform: translateY(-1px);
}

.tracking-card .cta-button:active {
    transform: translateY(0);
}
```

---

## 📝 WICHTIGE DETAILS

### Farben (exakte Hex-Codes)
- **Hintergrund Card**: `#FFFFFF` (white)
- **Info Box**: `#FAFAFA` (sehr helles grau)
- **Haupttext**: `#000000` (schwarz)
- **Sekundärtext**: `#525252` (mittelgrau)
- **Button Background**: `#f3f4f6` (hellgrau)
- **Button Hover**: `#e5e7eb` (dunkleres grau)
- **Button Text**: `#111827` (fast schwarz)

### Spacing
- **Card Padding**: 16px
- **Border Radius Card**: 16px
- **Border Radius Icon**: 12px
- **Border Radius Info Box**: 12px
- **Border Radius Button**: 12px
- **Gap Header**: 10px
- **Margin Bottom Header**: 16px
- **Margin Bottom Info Box**: 16px

### Schriftgrößen
- **Header Title**: 14px, font-weight 600
- **Header Subtitle**: 11px
- **Info Label**: 12px, font-weight 500
- **Info Value**: 13px, font-weight 600
- **Button**: 14px, font-weight 600

### Shadows
```css
/* Normal State */
box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04), 
    0 2px 4px rgba(0, 0, 0, 0.04), 
    0 4px 8px rgba(0, 0, 0, 0.04), 
    0 8px 16px rgba(0, 0, 0, 0.04);

/* Hover State */
box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.06), 
    0 4px 8px rgba(0, 0, 0, 0.06), 
    0 8px 16px rgba(0, 0, 0, 0.06), 
    0 16px 32px rgba(0, 0, 0, 0.08);
```

### Transitions
```css
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Effects
- **Card**: `transform: translateY(-4px) scale(1.01)` + stärkerer Shadow
- **Button**: `background: #e5e7eb` + `color: #000000` + `transform: translateY(-1px)`

---

## 🎯 BEISPIEL-DATEN FÜR TESTS

```javascript
{
    orderNumber: "12847",
    carrier: "DHL Express",
    trackingNumber: "JJD012345678901",
    trackingUrl: "https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?piececode=JJD012345678901"
}
```

```javascript
{
    orderNumber: "12745",
    carrier: "UPS Standard",
    trackingNumber: "1Z999AA10123456784",
    trackingUrl: "https://www.ups.com/track?tracknum=1Z999AA10123456784"
}
```

```javascript
{
    orderNumber: "12921",
    carrier: "Hermes",
    trackingNumber: "H0123456789DE",
    trackingUrl: "https://www.hermesworld.com/de/sendungsverfolgung/H0123456789DE"
}
```

---

## ✅ CHECKLISTE FÜR IMPLEMENTATION

- [ ] Status-Bereich komplett entfernt
- [ ] Exakte Farben verwendet (siehe Hex-Codes oben)
- [ ] Exakte Font-Sizes verwendet
- [ ] Exakte Spacing/Padding verwendet
- [ ] Multi-Layer Shadow wie oben implementiert
- [ ] Hover-Effekte funktionieren (translateY + scale)
- [ ] Button öffnet Link in neuem Tab (`target="_blank"`)
- [ ] Responsive (max-width: 400px)
- [ ] SVG Truck Icon korrekt eingebunden
- [ ] CSS cubic-bezier Transitions verwendet
- [ ] Keine Additional Features hinzugefügt

---

## 🚨 WAS NICHT GEMACHT WERDEN DARF

❌ **KEINE** Status-Anzeige (Unterwegs, Zugestellt, etc.)  
❌ **KEINE** farbigen Status-Dots  
❌ **KEINE** erwartete Lieferzeit  
❌ **KEINE** zusätzlichen Felder außer: Versanddienstleister, Sendungsnummer  
❌ **KEINE** eigenen Design-Interpretationen  
❌ **KEINE** anderen Farben/Fonts/Spacings verwenden  

---

## 📦 RESULT

Die finale TrackingCard soll **exakt wie auf dem Screenshot aussehen** - nur OHNE den Status-Bereich in der Mitte.

**Simple, clean, modern - fertig.** 🚚

---

**Bei Fragen:** Siehe Screenshot oder teste mit den Beispiel-Daten oben.


