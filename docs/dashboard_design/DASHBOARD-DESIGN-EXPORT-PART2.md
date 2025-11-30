# 🎨 REPLAINOW DASHBOARD — DESIGN EXPORT PART 2

## CHAT WINDOW & MESSAGE BUBBLES (Center Column)

---

## 8.5 Chat Window Layout (Center Column)

### Structure

```html
<div class="chat-window">
  <!-- Chat Header -->
  <header class="chat-header">
    <div class="chat-header-left">
      <button class="back-button">← Back</button>
      <div class="chat-customer-info">
        <h3 class="chat-customer-name">Sarah Klein</h3>
        <span class="chat-status">
          <span class="status-dot"></span>
          Active
        </span>
      </div>
    </div>
    
    <div class="chat-header-actions">
      <button class="action-btn">Take Over</button>
      <button class="action-btn">Give to AI</button>
      <button class="action-btn">Close</button>
      <button class="action-btn-icon">⋮</button>
    </div>
  </header>
  
  <!-- Messages Area -->
  <div class="messages-container">
    <!-- Message bubbles render here -->
    <!-- See Message Bubble section below -->
    
    <!-- Typing Indicator -->
    <div class="typing-indicator">
      <div class="typing-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <span class="typing-text">Customer is typing...</span>
    </div>
  </div>
  
  <!-- Composer Area -->
  <div class="composer-area">
    <div class="composer-toolbar">
      <button class="toolbar-btn">😊</button>
      <button class="toolbar-btn">🏷️ Discount</button>
      <button class="toolbar-btn">📦 Product</button>
    </div>
    
    <div class="composer-input-row">
      <textarea 
        class="composer-textarea" 
        placeholder="Type your message..."
        rows="1"
      ></textarea>
      <button class="send-button">
        <Send />
      </button>
    </div>
    
    <div class="composer-hint">
      Press <kbd>Enter</kbd> to send • <kbd>Shift+Enter</kbd> for new line
    </div>
  </div>
</div>
```

### CSS for Chat Window

```css
.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  height: 100%;
  min-width: 280px;
  box-shadow: var(--elevation-sm);
}

/* ═══════════════════════════════════════════════════════════════════
 * CHAT HEADER
 * ═══════════════════════════════════════════════════════════════════ */
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E7EB;
  background: #FFFFFF;
  flex-shrink: 0;
  height: 72px;
  box-shadow: var(--elevation-xs);
}

.chat-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.back-button {
  display: none; /* Show only on mobile */
  padding: 8px;
  background: transparent;
  border: none;
  color: #64748B;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 200ms;
}

@media (max-width: 768px) {
  .back-button {
    display: block;
  }
}

.back-button:hover {
  color: #0F172A;
}

.chat-customer-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-customer-name {
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
  letter-spacing: -0.01em;
  margin: 0;
}

.chat-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748B;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 9999px;
}

/* Chat Header Actions */
.chat-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  color: #0F172A;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  height: 36px;
}

.action-btn:hover {
  background: #F1F5F9;
  border-color: #CBD5E1;
  box-shadow: var(--elevation-sm);
}

.action-btn:active {
  transform: scale(0.98);
}

.action-btn-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: #64748B;
  cursor: pointer;
  transition: all 200ms;
}

.action-btn-icon:hover {
  background: #F9FAFB;
  color: #0F172A;
}

/* ═══════════════════════════════════════════════════════════════════
 * MESSAGES CONTAINER
 * ═══════════════════════════════════════════════════════════════════ */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
}

/* Mobile responsive padding */
@media (max-width: 768px) {
  .messages-container {
    padding: 16px;
  }
}

/* Typing Indicator */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  margin-top: 16px;
}

.typing-dots {
  display: flex;
  gap: 4px;
}

.typing-dots .dot {
  width: 8px;
  height: 8px;
  background: #6B7CFF;
  border-radius: 9999px;
  animation: bounce 1.4s infinite ease-in-out;
}

.typing-dots .dot:nth-child(1) {
  animation-delay: 0ms;
}

.typing-dots .dot:nth-child(2) {
  animation-delay: 150ms;
}

.typing-dots .dot:nth-child(3) {
  animation-delay: 300ms;
}

@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

.typing-text {
  font-size: 14px;
  color: #64748B;
}

/* ═══════════════════════════════════════════════════════════════════
 * COMPOSER AREA (Bottom Input)
 * ═══════════════════════════════════════════════════════════════════ */
.composer-area {
  border-top: 1px solid #E5E7EB;
  background: #FFFFFF;
  padding: 24px;
  flex-shrink: 0;
  box-shadow: var(--elevation-sm);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .composer-area {
    padding: 12px;
  }
}

/* Composer Toolbar */
.composer-toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.toolbar-btn {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  border: 1px solid #E5E7EB;
  color: #64748B;
  cursor: pointer;
  transition: all 200ms;
  height: 32px;
}

.toolbar-btn:hover {
  background: #F9FAFB;
  border-color: #CBD5E1;
  color: #0F172A;
}

/* Composer Input Row */
.composer-input-row {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

.composer-textarea {
  flex: 1;
  min-height: 44px;
  max-height: 120px;
  padding: 12px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  color: #0F172A;
  background: #FFFFFF;
  resize: none;
  box-shadow: var(--elevation-xs);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Mobile: Prevent iOS zoom */
@media (max-width: 768px) {
  .composer-textarea {
    font-size: 16px;
  }
}

.composer-textarea:hover {
  box-shadow: var(--elevation-sm);
}

.composer-textarea:focus {
  outline: none;
  border-color: #6B7CFF;
  box-shadow: var(--elevation-md), 0 0 0 3px rgba(107, 124, 255, 0.1);
}

.composer-textarea::placeholder {
  color: #94A3B8;
}

/* Send Button */
.send-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: var(--elevation-sm), 0 4px 12px rgba(107, 124, 255, 0.25);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.send-button:hover {
  opacity: 0.9;
  box-shadow: var(--elevation-md), 0 8px 16px rgba(107, 124, 255, 0.3);
  transform: translateY(-2px);
}

.send-button:active {
  transform: translateY(0);
  box-shadow: var(--elevation-sm);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Composer Hint */
.composer-hint {
  margin-top: 8px;
  font-size: 12px;
  color: #94A3B8;
  text-align: left;
}

.composer-hint kbd {
  background: #F1F5F9;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 11px;
  color: #0F172A;
}
```

---

## 8.6 Message Bubbles (CRITICAL!)

### Message Bubble Variants

**3 Sender Types:**
1. **Customer** (Left-aligned, Gray bubble)
2. **AI** (Right-aligned, White bubble with border)
3. **Agent** (Right-aligned, Purple gradient bubble)

### HTML Structure

```html
<!-- CUSTOMER MESSAGE (Left) -->
<div class="message-bubble-container message-customer">
  <div class="avatar avatar-customer">SK</div>
  
  <div class="message-content">
    <div class="message-bubble bubble-customer">
      <p class="message-text">Wo ist meine Bestellung? Ich warte schon seit 5 Tagen!</p>
    </div>
    
    <div class="message-meta">
      <span class="message-time">14:32</span>
    </div>
  </div>
</div>

<!-- AI MESSAGE (Right) -->
<div class="message-bubble-container message-ai">
  <div class="message-content">
    <div class="message-bubble bubble-ai">
      <p class="message-text">Ich verstehe, dass Sie auf Ihre Bestellung warten. Lassen Sie mich das für Sie überprüfen! 🔍</p>
    </div>
    
    <div class="message-meta message-meta-right">
      <span class="message-time">14:32 • AI</span>
    </div>
  </div>
  
  <div class="avatar avatar-ai">AI</div>
</div>

<!-- AGENT MESSAGE (Right, Purple) -->
<div class="message-bubble-container message-agent">
  <div class="message-content">
    <div class="message-bubble bubble-agent">
      <p class="message-text">Hallo Sarah! Ich habe Ihre Bestellung überprüft. Sie wurde gestern versandt und sollte morgen ankommen. Hier ist Ihre Tracking-Nummer: ABC123.</p>
    </div>
    
    <div class="message-meta message-meta-right">
      <span class="message-time">14:35 • John Doe</span>
    </div>
  </div>
  
  <div class="avatar avatar-agent">JD</div>
</div>
```

### CSS for Message Bubbles (PIXEL-PERFECT!)

```css
/* ═══════════════════════════════════════════════════════════════════
 * MESSAGE BUBBLE CONTAINER
 * ═══════════════════════════════════════════════════════════════════ */
.message-bubble-container {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  animation: messageSlideIn 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile: Reduced gap & margin */
@media (max-width: 768px) {
  .message-bubble-container {
    gap: 8px;
    margin-bottom: 16px;
  }
}

/* Customer = Left aligned */
.message-customer {
  justify-content: flex-start;
}

/* AI/Agent = Right aligned */
.message-ai,
.message-agent {
  justify-content: flex-end;
}

/* ═══════════════════════════════════════════════════════════════════
 * AVATARS
 * ═══════════════════════════════════════════════════════════════════ */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  flex-shrink: 0;
  box-shadow: var(--elevation-sm);
}

/* Mobile: Smaller avatars */
@media (max-width: 768px) {
  .avatar {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
}

.avatar-customer {
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
}

.avatar-ai {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
}

.avatar-agent {
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
}

/* ═══════════════════════════════════════════════════════════════════
 * MESSAGE CONTENT & BUBBLES
 * ═══════════════════════════════════════════════════════════════════ */
.message-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 65%;
}

/* Mobile: Larger max-width */
@media (max-width: 768px) {
  .message-content {
    max-width: 85%;
  }
}

/* Larger screens: More comfortable reading */
@media (min-width: 1024px) {
  .message-content {
    max-width: 65%;
  }
}

.message-bubble {
  padding: 14px 20px;
  transition: box-shadow 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Mobile: Reduced padding */
@media (max-width: 768px) {
  .message-bubble {
    padding: 12px 16px;
  }
}

.message-bubble:hover {
  box-shadow: var(--elevation-md);
}

/* CUSTOMER BUBBLE (Gray, Left) */
.bubble-customer {
  background: #F1F5F9;
  border: none;
  border-radius: 6px 16px 16px 16px; /* Pointed top-left */
  box-shadow: var(--elevation-xs);
}

/* AI BUBBLE (White with border, Right) */
.bubble-ai {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 16px 6px 16px 16px; /* Pointed top-right */
  box-shadow: var(--elevation-sm);
}

/* AGENT BUBBLE (Purple gradient, Right) */
.bubble-agent {
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  border: none;
  border-radius: 16px 6px 16px 16px; /* Pointed top-right */
  box-shadow: var(--elevation-md);
  color: #FFFFFF;
}

/* Message Text */
.message-text {
  font-size: 15px;
  line-height: 1.6;
  color: #0F172A;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
}

/* Mobile: Adjust font size */
@media (max-width: 768px) {
  .message-text {
    font-size: 16px; /* Prevent iOS zoom */
  }
}

.bubble-agent .message-text {
  color: #FFFFFF;
}

/* ═══════════════════════════════════════════════════════════════════
 * MESSAGE META (Timestamp)
 * ═══════════════════════════════════════════════════════════════════ */
.message-meta {
  padding: 0 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.message-meta-right {
  justify-content: flex-end;
}

.message-time {
  font-size: 11px;
  color: #94A3B8;
}

/* Mobile: Slightly larger */
@media (max-width: 768px) {
  .message-time {
    font-size: 12px;
  }
}
```

---

## 8.7 Product Cards (Special Message Type)

Product cards are sent by agents to showcase products with images, prices, and purchase links.

### HTML Structure

```html
<div class="message-bubble-container message-agent">
  <div class="message-content">
    <!-- Product Card -->
    <div class="product-card">
      <div class="product-image-container">
        <img 
          src="/product-image.jpg" 
          alt="Premium Headphones" 
          class="product-image"
        />
      </div>
      
      <div class="product-info">
        <h4 class="product-title">Premium Wireless Headphones</h4>
        <p class="product-description">
          Noise-cancelling, 30h battery life, premium sound quality
        </p>
        
        <div class="product-footer">
          <div class="product-price-row">
            <span class="product-price">€129.99</span>
            <span class="product-stock">✓ In Stock</span>
          </div>
          
          <a href="#" class="product-link">
            View Product →
          </a>
        </div>
      </div>
    </div>
    
    <div class="message-meta message-meta-right">
      <span class="message-time">14:36</span>
    </div>
  </div>
  
  <div class="avatar avatar-agent">JD</div>
</div>
```

### CSS for Product Cards

```css
.product-card {
  width: 320px;
  max-width: 100%;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--elevation-md);
  transition: all 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.product-card:hover {
  box-shadow: var(--elevation-lg);
  transform: translateY(-2px);
}

/* Product Image */
.product-image-container {
  width: 100%;
  height: 200px;
  background: #F9FAFB;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Info */
.product-info {
  padding: 16px;
}

.product-title {
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.product-description {
  font-size: 14px;
  color: #64748B;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

/* Product Footer */
.product-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
}

.product-stock {
  font-size: 13px;
  font-weight: 600;
  color: #10B981;
}

.product-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 200ms;
  box-shadow: var(--elevation-sm), 0 4px 12px rgba(107, 124, 255, 0.25);
}

.product-link:hover {
  opacity: 0.9;
  box-shadow: var(--elevation-md), 0 8px 16px rgba(107, 124, 255, 0.3);
  transform: translateY(-2px);
}
```

---

## 8.8 Discount Cards (Special Message Type)

Discount cards display promo codes with copy functionality.

### HTML Structure

```html
<div class="message-bubble-container message-agent">
  <div class="message-content">
    <!-- Discount Card -->
    <div class="discount-card">
      <div class="discount-header">
        <span class="discount-icon">🏷️</span>
        <h4 class="discount-title">Special Discount for You!</h4>
      </div>
      
      <div class="discount-code-container">
        <div class="discount-code">SAVE20</div>
        <button class="discount-copy-btn">Copy</button>
      </div>
      
      <div class="discount-details">
        <div class="discount-detail-item">
          <span class="detail-label">Value:</span>
          <span class="detail-value">20% OFF</span>
        </div>
        <div class="discount-detail-item">
          <span class="detail-label">Expires:</span>
          <span class="detail-value">Dec 31, 2025</span>
        </div>
      </div>
    </div>
    
    <div class="message-meta message-meta-right">
      <span class="message-time">14:37</span>
    </div>
  </div>
  
  <div class="avatar avatar-agent">JD</div>
</div>
```

### CSS for Discount Cards

```css
.discount-card {
  width: 320px;
  max-width: 100%;
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border: 2px solid #F59E0B;
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--elevation-lg);
}

/* Discount Header */
.discount-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.discount-icon {
  font-size: 24px;
}

.discount-title {
  font-size: 16px;
  font-weight: 700;
  color: #78350F;
  margin: 0;
}

/* Discount Code */
.discount-code-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.discount-code {
  flex: 1;
  background: #FFFFFF;
  border: 2px dashed #F59E0B;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 18px;
  font-weight: 700;
  color: #78350F;
  text-align: center;
  letter-spacing: 0.1em;
}

.discount-copy-btn {
  padding: 10px 16px;
  background: #FFFFFF;
  border: 2px solid #F59E0B;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #D97706;
  cursor: pointer;
  transition: all 200ms;
}

.discount-copy-btn:hover {
  background: #F59E0B;
  color: #FFFFFF;
}

/* Discount Details */
.discount-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px dashed rgba(245, 158, 11, 0.3);
}

.discount-detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-label {
  font-size: 13px;
  font-weight: 600;
  color: #92400E;
}

.detail-value {
  font-size: 13px;
  font-weight: 700;
  color: #78350F;
}
```

---

## 8.9 Exact Dimensions Summary (Chat Window)

```
CHAT HEADER:
- Height: 72px
- Padding: 16px 24px
- Border-Bottom: 1px solid #E5E7EB
- Shadow: var(--elevation-xs)
- Background: #FFFFFF

MESSAGES CONTAINER:
- Padding: 24px (Desktop) | 16px (Mobile)
- Background: #FFFFFF
- Overflow: scroll-y

MESSAGE BUBBLE (Customer):
- Max-Width: 65% (Desktop) | 85% (Mobile)
- Padding: 14px 20px (Desktop) | 12px 16px (Mobile)
- Border-Radius: 6px 16px 16px 16px (pointed top-left)
- Background: #F1F5F9
- Shadow: var(--elevation-xs)
- Text: 15px (Desktop) | 16px (Mobile)
- Line-Height: 1.6

MESSAGE BUBBLE (AI):
- Max-Width: 65% (Desktop) | 85% (Mobile)
- Padding: 14px 20px (Desktop) | 12px 16px (Mobile)
- Border-Radius: 16px 6px 16px 16px (pointed top-right)
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Shadow: var(--elevation-sm)
- Text: 15px, Color: #0F172A

MESSAGE BUBBLE (Agent):
- Max-Width: 65% (Desktop) | 85px (Mobile)
- Padding: 14px 20px (Desktop) | 12px 16px (Mobile)
- Border-Radius: 16px 6px 16px 16px (pointed top-right)
- Background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%)
- Shadow: var(--elevation-md)
- Text: 15px, Color: #FFFFFF

AVATAR:
- Size: 40px × 40px (Desktop) | 32px × 32px (Mobile)
- Border-Radius: 9999px (full circle)
- Font: 14px (Desktop) | 12px (Mobile), weight: 700
- Shadow: var(--elevation-sm)

COMPOSER AREA:
- Padding: 24px (Desktop) | 12px (Mobile)
- Border-Top: 1px solid #E5E7EB
- Shadow: var(--elevation-sm)
- Background: #FFFFFF

COMPOSER TEXTAREA:
- Min-Height: 44px
- Max-Height: 120px
- Padding: 12px 16px
- Border-Radius: 8px
- Font-Size: 15px (Desktop) | 16px (Mobile - iOS zoom prevention!)
- Border: 1px solid #E5E7EB
- Shadow: var(--elevation-xs)
- Focus: Border #6B7CFF, Shadow var(--elevation-md) + 3px ring

SEND BUTTON:
- Size: 44px × 44px
- Border-Radius: 8px
- Background: linear-gradient(135deg, #6B7CFF 0%, #B078FF 100%)
- Shadow: var(--elevation-sm) + 0 4px 12px rgba(107, 124, 255, 0.25)
- Hover: translateY(-2px), enhanced shadow

PRODUCT CARD:
- Width: 320px
- Border-Radius: 12px
- Image Height: 200px
- Padding: 16px (content area)
- Shadow: var(--elevation-md)
- Hover: translateY(-2px), shadow lg

DISCOUNT CARD:
- Width: 320px
- Padding: 20px
- Border-Radius: 12px
- Border: 2px solid #F59E0B
- Background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)
- Shadow: var(--elevation-lg)
```

---

## TO BE CONTINUED...

**Next Parts:**
- Part 3: Customer Info Panel (Right Column)
- Part 4: Mail Dashboard
- Part 5: Complete TypeScript Types
- Part 6: React Components (Copy-Paste Ready)
- Part 7: Example Data (JSON)
- Part 8: Integration Guide

---

