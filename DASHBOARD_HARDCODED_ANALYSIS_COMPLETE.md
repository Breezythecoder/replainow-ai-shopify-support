# 🔍 DASHBOARD HARDCODED TEXT - COMPLETE ANALYSIS

**Date:** November 30, 2025  
**Status:** 🚨 **FOUND 150+ ADDITIONAL HARDCODED TEXTS!**  

---

## 📊 COMPLETE LIST OF HARDCODED TEXTS

### **1. CustomerInfoPanel.tsx** ⚠️ **CRITICAL - 35+ texts!**

#### **Customer Header:**
- "✓ Verified" (verified badge)
- "View in Shopify" (link title)
- "Phone" (stat label)
- "Total Orders" (stat label)
- "Total Spent" (stat label)

#### **Current Order Section:**
- "📦 CURRENT ORDER" (section title)
- "item" / "items" (plural handling)
- "Ordered" (date prefix)
- "Qty:" (quantity label in line items)
- "Total" (total row label)
- "View Order in Shopify" (button text)
- "View Order {number} in Shopify" (button title)
- "Track Package" (tracking button)
- "Actions" (actions label)
- "Refund" (action badge)
- "Cancel" (action badge)
- "Tracking" (action badge)

#### **AI Insights Section:**
- "AI INSIGHTS" (section title)
- "Sentiment" (row label)
- "Neutral" (default sentiment)
- "Topic" (row label)
- "General" (default topic)
- "Confidence" (row label)
- "Action" (row label)
- "Agent Requested" (action value)
- "AI Handled" (action value)
- "Conversation" (row label)
- "messages" (conversation count)
- "min" (time duration)
- "Resolution" (row label)
- "Language" (row label)
- "🇩🇪 German" (language value)

---

### **2. ConversationList.tsx** ⚠️ **HIGH PRIORITY - 18+ texts!**

#### **Header:**
- "Live Chats" (main title!)
- "LIVE" (live badge text)

#### **Category Chips (ALL HARDCODED!):**
- "Proactive" (special chip)
- "All" (default chip)
- "Complaint"
- "Return"
- "Support"
- "Presale"
- "Product"
- "Cooperation"
- "Delivery"
- "Spam"
- "Billing"

**Note:** These need to map to translation keys in `dashboard.json`!

---

### **3. ConversationItem.tsx** ⚠️ **MEDIUM - 6+ texts**

#### **Timestamp:**
- "gerade eben" (fallback for "just now")
- Uses `de` locale from date-fns (should be dynamic!)

#### **Badges:**
- "CUSTOMER:" (sender label) - **WAIT! Already in conversationList.senderLabels!**
- "AI:" (sender label)
- "AGENT:" (sender label)
- "new" (unread badge text)
- "URGENT" (urgent badge text)
- "AI" (AI badge text)

---

### **4. ProductPickerModal.tsx** ⚠️ **LOW - 1 text**

- "No products found" (empty state)

---

### **5. ProductCardDashboard.tsx** ⚠️ **LOW - 1 text**

- "No image" (placeholder text)

---

### **6. DiscountCardDashboard.tsx** ⚠️ **LOW - 1 text**

- "Value:" (label in details section)

---

### **7. TrackingCardDashboard.tsx** ⚠️ **MEDIUM - 2 texts**

- "Carrier" (info row label)
- "Tracking #" (info row label)

---

### **8. ChatWindow.tsx** ⚠️ **CHECK AGAIN**

- "Active" (status text in header) - **NEEDS CHECKING!**

---

### **9. DemoOrchestrator.tsx** ⚠️ **81 MATCHES - NEEDS REVIEW**

Likely has conversation previews and other demo-related texts!

---

## 🎯 PRIORITY ORDER FOR FIXES

### **CRITICAL (Do First):**
1. ✅ **ConversationList.tsx** - Category chips (Complaint, Return, etc.)
2. ✅ **CustomerInfoPanel.tsx** - ALL labels and texts
3. ✅ **ConversationItem.tsx** - Badges and labels

### **HIGH:**
4. ✅ **TrackingCardDashboard.tsx** - Carrier, Tracking # labels
5. ✅ **DiscountCardDashboard.tsx** - Value label
6. ✅ **ChatWindow.tsx** - Any remaining texts

### **MEDIUM:**
7. ✅ **ProductPickerModal.tsx** - Empty state
8. ✅ **ProductCardDashboard.tsx** - No image text

### **LOW:**
9. ✅ **DemoOrchestrator.tsx** - Review for conversation previews
10. ✅ **ConversationItem.tsx** - date-fns locale handling

---

## 📝 REQUIRED JSON ADDITIONS

### **Add to `dashboard.json`:**

```json
{
  "conversationList": {
    "header": {
      "title": "Live Chats",
      "liveBadge": "LIVE"
    },
    "categories": {
      "proactive": "Proactive",
      "all": "All",
      "complaint": "Complaint",
      "return": "Return",
      "support": "Support",
      "presale": "Presale",
      "product": "Product",
      "cooperation": "Cooperation",
      "delivery": "Delivery",
      "spam": "Spam",
      "billing": "Billing"
    }
  },
  "conversationItem": {
    "badges": {
      "new": "new",
      "urgent": "URGENT",
      "ai": "AI"
    },
    "justNow": "just now"
  },
  "customerPanel": {
    "verified": "Verified",
    "viewInShopify": "View in Shopify",
    "stats": {
      "phone": "Phone",
      "totalOrders": "Total Orders",
      "totalSpent": "Total Spent"
    },
    "currentOrder": {
      "title": "CURRENT ORDER",
      "item": "item",
      "items": "items",
      "ordered": "Ordered",
      "qty": "Qty",
      "total": "Total",
      "viewOrder": "View Order in Shopify",
      "trackPackage": "Track Package"
    },
    "actions": {
      "label": "Actions",
      "refund": "Refund",
      "cancel": "Cancel",
      "tracking": "Tracking"
    },
    "aiInsights": {
      "title": "AI INSIGHTS",
      "sentiment": "Sentiment",
      "neutral": "Neutral",
      "topic": "Topic",
      "general": "General",
      "confidence": "Confidence",
      "action": "Action",
      "agentRequested": "Agent Requested",
      "aiHandled": "AI Handled",
      "conversation": "Conversation",
      "messages": "messages",
      "min": "min",
      "resolution": "Resolution",
      "language": "Language",
      "languageGerman": "🇩🇪 German"
    }
  },
  "productPicker": {
    "empty": "No products found"
  },
  "productCard": {
    "noImage": "No image"
  },
  "discountCard": {
    "valueLabel": "Value"
  },
  "trackingCard": {
    "carrierLabel": "Carrier",
    "trackingLabel": "Tracking #"
  },
  "chatWindow": {
    "status": {
      "active": "Active"
    }
  }
}
```

---

## ✅ ACTION PLAN

1. **Update ALL 4 `dashboard.json` files** with new keys
2. **Refactor all components** to use `t()` function
3. **Test in all 4 languages**
4. **Verify build**

---

**ESTIMATED TIME:** 2-3 hours for complete refactoring

**IMPACT:** 100% multilingual dashboard with ZERO hardcoded texts!











