# Accessibility Guidelines for ReplAInow Website

## Overview

This document provides comprehensive accessibility guidelines for all developers working on the ReplAInow website. Our goal is to maintain WCAG 2.1 Level AA compliance and ensure an excellent experience for all users.

## Table of Contents

1. [Color Contrast Requirements](#color-contrast-requirements)
2. [Required ARIA Attributes](#required-aria-attributes)
3. [Keyboard Navigation](#keyboard-navigation)
4. [Screen Reader Testing](#screen-reader-testing)
5. [Form Accessibility](#form-accessibility)
6. [Focus Management](#focus-management)
7. [Component Checklist](#component-checklist)

## Color Contrast Requirements

### WCAG AA Standards

All text must meet minimum contrast ratios:
- **Normal text (< 18px)**: 4.5:1 minimum
- **Large text (≥ 18px or ≥ 14px bold)**: 3:1 minimum
- **Interactive elements**: 3:1 minimum against background

### Approved Color Combinations

#### Text Colors (WCAG AA Compliant)
```css
/* Primary text colors */
text-gray-900: rgb(17, 24, 39)   /* 13.6:1 ratio - Excellent */
text-gray-800: rgb(31, 41, 55)    /* 11.4:1 ratio - Excellent */
text-gray-700: rgb(55, 65, 81)    /* 5.7:1 ratio - AA Compliant */

/* Accent colors for text on light backgrounds */
text-purple-700: rgb(126, 34, 206) /* 4.7:1 ratio - AA Compliant */
text-green-700: rgb(21, 128, 61)   /* 4.6:1 ratio - AA Compliant */
text-blue-700: rgb(29, 78, 216)    /* 5.9:1 ratio - AA Compliant */

/* Text on dark backgrounds */
text-white/95: rgba(255,255,255,0.95) /* 4.7:1+ on purple-600 */
```

#### ❌ DO NOT USE (Insufficient Contrast)
```css
text-gray-600  /* Only 4.54:1 - Borderline, avoid for < 18px text */
text-purple-600 /* 3.2:1 - FAILS AA for normal text */
text-green-600  /* 3.8:1 - FAILS AA for normal text */
text-white/70   /* 2.8:1 - FAILS AA */
```

### Color Contrast Checker Workflow

Before adding new colors:

1. Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Test with actual background colors
3. Verify ratio meets 4.5:1 (normal text) or 3:1 (large text)
4. Document the color combination in this guide

## Required ARIA Attributes

### Interactive Elements

#### Icon-only Buttons/Links
```tsx
// ✅ CORRECT
<button aria-label="Menü öffnen">
  <MenuIcon />
</button>

<a href="/profile" aria-label="Benutzerprofil anzeigen">
  <UserIcon />
</a>

// ❌ INCORRECT
<button>
  <MenuIcon />
</button>
```

### Form Inputs

Every form input MUST have:
1. Associated `<label>` with `htmlFor`
2. `id` attribute matching label
3. `aria-label` or `aria-labelledby`
4. `name` attribute

```tsx
// ✅ CORRECT
<label htmlFor="email-input" className="text-gray-900">
  E-Mail-Adresse
</label>
<input 
  type="email"
  id="email-input"
  name="email"
  aria-label="E-Mail-Adresse eingeben"
  aria-required="true"
  className="..."
/>

// ❌ INCORRECT
<input type="email" />
```

### Landmark Regions

```tsx
// Navigation
<nav role="banner" aria-label="Hauptnavigation">
  ...
</nav>

// Main content
<main id="main-content" role="main" aria-label="Hauptinhalt">
  ...
</main>

// Footer
<footer role="contentinfo">
  ...
</footer>

// Sections with headings
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  ...
</section>
```

## Keyboard Navigation

### Requirements

ALL interactive elements must be:
1. **Keyboard accessible** (Tab, Enter, Space)
2. **Visibly focused** (3px cyan outline)
3. **Logically ordered** (DOM order = visual order)

### Focus Indicators

Our standard focus style:
```css
*:focus-visible {
  outline: 3px solid hsl(189, 94%, 43%); /* Cyan */
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Skip Links

Every page must include:
```tsx
<SkipToMainContent />
```

This allows keyboard users to skip repetitive navigation.

### Testing Keyboard Navigation

**Manual Test Steps:**
1. Start at top of page
2. Press Tab to move through all interactive elements
3. Verify visible focus indicator on each element
4. Press Enter/Space to activate buttons/links
5. Ensure no keyboard traps (can always tab away)
6. Test Escape key for closing modals/dropdowns

## Screen Reader Testing

### Test Matrix

| Browser | Screen Reader | Priority |
|---------|--------------|----------|
| Firefox | NVDA | ✅ Required |
| Chrome | JAWS | ✅ Required |
| Safari | VoiceOver | ✅ Required |
| Chrome | ChromeVox | Nice to have |

### Testing Procedure

1. **Navigation Test**
   - Can user find main navigation?
   - Are landmarks announced correctly?
   - Can user jump to main content?

2. **Form Test**
   - Are labels announced?
   - Are errors clearly described?
   - Is required status communicated?

3. **Interactive Element Test**
   - Are button purposes clear?
   - Are link destinations described?
   - Are state changes announced?

4. **Content Structure Test**
   - Is heading hierarchy logical?
   - Are lists properly marked up?
   - Are images described with alt text?

### Screen Reader Announcements

Use `aria-live` for dynamic content:
```tsx
// Polite (waits for pause)
<div aria-live="polite" aria-atomic="true">
  Form saved successfully
</div>

// Assertive (interrupts)
<div aria-live="assertive" aria-atomic="true">
  Error: Please correct form errors
</div>
```

## Form Accessibility

### Complete Example

```tsx
<form onSubmit={handleSubmit} aria-label="Contact form">
  {/* Text Input */}
  <div>
    <label htmlFor="name-input" className="text-gray-900 font-medium">
      Name <span aria-label="required">*</span>
    </label>
    <input
      type="text"
      id="name-input"
      name="name"
      aria-label="Enter your full name"
      aria-required="true"
      aria-invalid={errors.name ? "true" : "false"}
      aria-describedby={errors.name ? "name-error" : undefined}
    />
    {errors.name && (
      <p id="name-error" className="text-red-700" role="alert">
        {errors.name}
      </p>
    )}
  </div>

  {/* Select */}
  <div>
    <label htmlFor="country-select" className="text-gray-900 font-medium">
      Country
    </label>
    <select
      id="country-select"
      name="country"
      aria-label="Select your country"
    >
      <option value="">-- Select --</option>
      <option value="de">Germany</option>
      <option value="us">United States</option>
    </select>
  </div>

  {/* Checkbox */}
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      id="terms-checkbox"
      name="terms"
      aria-label="Accept terms and conditions"
      aria-required="true"
    />
    <label htmlFor="terms-checkbox" className="text-gray-900">
      I accept the terms and conditions
    </label>
  </div>

  {/* Submit */}
  <button
    type="submit"
    aria-label="Submit contact form"
    className="..."
  >
    Submit
  </button>
</form>
```

### Error Handling

```tsx
// Error summary at top of form
{errors.length > 0 && (
  <div role="alert" className="border-2 border-red-700 p-4 rounded-lg">
    <h3 className="text-red-900 font-bold">Please correct the following errors:</h3>
    <ul>
      {errors.map((error, i) => (
        <li key={i}>
          <a href={`#${error.fieldId}`} className="text-red-700 underline">
            {error.message}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
```

## Focus Management

### Skip Links

Implemented in `src/components/ui/accessibility.tsx`:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-purple-700 text-white px-6 py-3 rounded-lg font-bold"
>
  Skip to main content
</a>
```

### Modal Focus Trap

```tsx
const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener("keydown", handleTabKey);
  return () => element.removeEventListener("keydown", handleTabKey);
};
```

## Component Checklist

Before marking a component as "complete," verify:

### Semantic HTML
- [ ] Proper heading hierarchy (H1 → H2 → H3 → H4)
- [ ] Semantic elements (`<nav>`, `<main>`, `<section>`, etc.)
- [ ] Lists use `<ul>`/`<ol>` + `<li>`
- [ ] Buttons use `<button>`, links use `<a>`

### Color & Contrast
- [ ] All text meets 4.5:1 contrast (or 3:1 for large text)
- [ ] Interactive elements have 3:1 contrast
- [ ] Color is not the only means of conveying information

### Keyboard & Focus
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible (3px cyan outline)
- [ ] Tab order is logical
- [ ] No keyboard traps
- [ ] Skip links are present

### ARIA
- [ ] Icon-only elements have `aria-label`
- [ ] Form inputs have labels
- [ ] Landmarks have `role` and `aria-label`
- [ ] Dynamic content has `aria-live`
- [ ] States are communicated (`aria-expanded`, `aria-pressed`, etc.)

### Screen Readers
- [ ] All images have meaningful `alt` text
- [ ] Complex images have longer descriptions
- [ ] Decorative images have `alt=""`
- [ ] Form errors are announced
- [ ] Modal dialogs trap focus and announce properly

### Testing
- [ ] Tested with keyboard only
- [ ] Tested with NVDA (Windows)
- [ ] Tested with VoiceOver (macOS)
- [ ] Tested with axe DevTools
- [ ] Lighthouse accessibility score ≥ 95

## Tools & Resources

### Browser Extensions
- [axe DevTools](https://www.deque.com/axe/devtools/) - Automated testing
- [WAVE](https://wave.webaim.org/extension/) - Visual feedback
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome DevTools

### Testing Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NVDA Screen Reader](https://www.nvaccess.org/) (Windows)
- [VoiceOver](https://www.apple.com/accessibility/voiceover/) (macOS, built-in)

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Quick Reference

### Most Common Issues

1. **Low Contrast Text** → Use text-gray-700+ or approved accent colors
2. **Missing Labels** → Add htmlFor + id + aria-label
3. **No Focus Indicator** → Verify :focus-visible styles are applied
4. **Bad Heading Order** → Fix H1 → H2 → H3 hierarchy
5. **Icon-only Buttons** → Add aria-label

### Pre-Commit Checklist

- [ ] No contrast violations in axe scan
- [ ] All forms have labels
- [ ] All icons have aria-labels
- [ ] Heading hierarchy is correct
- [ ] Manual keyboard test passes

---

**Last Updated:** November 2025  
**Maintained by:** ReplAInow Development Team  
**Questions?** Contact dev-team@replainow.com



