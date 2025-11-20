# Screen Reader Testing Guide

## Overview

This guide provides step-by-step instructions for testing the ReplAInow website with screen readers to ensure full accessibility compliance.

## Test Matrix

| OS | Browser | Screen Reader | Priority | Installation |
|----|---------|---------------|----------|--------------|
| Windows | Firefox | NVDA | **High** | [Download NVDA](https://www.nvaccess.org/download/) |
| Windows | Chrome | JAWS | **High** | [JAWS Trial](https://support.freedomscientific.com/Downloads/JAWS) |
| macOS | Safari | VoiceOver | **High** | Built-in (⌘ + F5) |
| Chrome OS | Chrome | ChromeVox | Medium | [ChromeVox Extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn) |

## Pre-Test Checklist

Before conducting screen reader tests:

- [ ] Ensure test environment mirrors production
- [ ] Clear browser cache and cookies
- [ ] Disable browser extensions (except screen reader)
- [ ] Use keyboard-only navigation (no mouse)
- [ ] Test on actual hardware, not VM when possible

## NVDA Testing (Windows + Firefox)

### Setup

1. **Install NVDA**
   ```bash
   # Download from https://www.nvaccess.org/download/
   # Install with default settings
   ```

2. **Launch NVDA**
   - Press `Ctrl + Alt + N` to start NVDA
   - Or start from Desktop shortcut

3. **Configure NVDA**
   - NVDA Menu: `NVDA + N`
   - Preferences → Settings → Speech
   - Set rate to comfortable speed (50-70%)

### Key Commands

```
NVDA + N         = NVDA Menu
NVDA + Q         = Quit NVDA
NVDA + Space     = NVDA pass-through mode
Insert          = NVDA modifier key
Caps Lock       = Alternative NVDA modifier

Navigation:
H               = Next heading
Shift + H       = Previous heading
1-6             = Heading levels (1 for H1, 2 for H2, etc.)
K               = Next link
Shift + K       = Previous link
F               = Next form field
B               = Next button
L               = Next list
I               = Next list item
T               = Next table
D               = Next landmark
```

### Test Scenarios

#### 1. Page Structure Test

```
Goal: Verify proper landmark structure and navigation
```

**Steps:**
1. Navigate to homepage (`http://localhost:5173/`)
2. Press `D` to cycle through landmarks
3. Verify landmarks announced:
   - Banner (navigation)
   - Main
   - Navigation (internal)
   - Complementary (sidebars)
   - Contentinfo (footer)

**Expected:** All major page sections have proper landmarks

#### 2. Heading Hierarchy Test

```
Goal: Verify logical heading structure
```

**Steps:**
1. Press `H` to navigate through all headings
2. Listen for proper hierarchy: H1 → H2 → H3 → H4
3. Verify no skipped levels

**Expected:** Headings follow logical order without skipping levels

#### 3. Form Interaction Test

```
Goal: Verify form labels and error messages
```

**Steps:**
1. Navigate to any form on site
2. Press `F` to jump between form fields
3. Verify each field announces:
   - Label text
   - Input type
   - Required status
   - Current value (if any)
4. Trigger validation error
5. Verify error message is announced

**Expected:** All form fields properly labeled and errors announced

#### 4. Link Purpose Test

```
Goal: Verify link text provides clear purpose
```

**Steps:**
1. Press `K` to cycle through links
2. Verify each link has:
   - Descriptive text (not "click here")
   - Destination indication
   - Proper ARIA labels for icon-only links

**Expected:** All links have clear, understandable purpose

#### 5. Interactive Element Test

```
Goal: Verify buttons and controls are accessible
```

**Steps:**
1. Press `B` to navigate through buttons
2. Verify each button announces:
   - Button label/text
   - Button state (if toggle)
   - Purpose/action
3. Test button activation with `Enter` or `Space`

**Expected:** All buttons properly labeled and activatable

## JAWS Testing (Windows + Chrome)

### Setup

1. **Install JAWS**
   - Download trial: https://support.freedomscientific.com/Downloads/JAWS
   - Install and restart computer

2. **Launch JAWS**
   - Will start automatically on boot (if configured)
   - Or launch from Start Menu

3. **Configure JAWS**
   - Insert + J (JAWS Menu)
   - Options → Voices
   - Adjust speech rate

### Key Commands

```
Insert + F6      = Heading List
Insert + F7      = Links List
Insert + F5      = Form Fields List
Insert + Ctrl + ; = Landmarks List

Navigation:
H / Shift + H    = Next/Previous heading
T / Shift + T    = Next/Previous table
F / Shift + F    = Next/Previous form field
B / Shift + B    = Next/Previous button
R / Shift + R    = Next/Previous landmark
```

### Test Scenarios

**Same as NVDA tests**, but additionally verify:
- Tables are properly announced (headers, data cells)
- ARIA live regions announce changes
- Modal dialogs trap focus correctly

## VoiceOver Testing (macOS + Safari)

### Setup

1. **Enable VoiceOver**
   - Press `⌘ + F5` to toggle VoiceOver
   - Or System Preferences → Accessibility → VoiceOver → Enable

2. **Configure VoiceOver**
   - VoiceOver Utility (⌘ + F8 while VoiceOver active)
   - Adjust verbosity and voice settings

### Key Commands

```
VO = Control + Option (VoiceOver modifier)

VO + A           = Start reading
VO + →           = Next item
VO + ←           = Previous item
VO + U           = Rotor menu
VO + H           = Next heading
VO + Space       = Activate item
VO + Shift + I   = Read page stats
```

### Using the Rotor

```
VO + U           = Open Rotor
← / →            = Switch category (Headings, Links, Forms, etc.)
↑ / ↓            = Select item
Enter            = Navigate to item
```

### Test Scenarios

**Same core scenarios as NVDA**, plus:

#### Mobile iOS Testing

1. **Enable VoiceOver on iPhone/iPad**
   - Settings → Accessibility → VoiceOver → On
   - Or triple-click side button (if configured)

2. **Gestures**
   ```
   Swipe Right     = Next item
   Swipe Left      = Previous item
   Double Tap      = Activate
   Two-finger swipe up = Read from top
   Rotor           = Rotate two fingers
   ```

3. **Test mobile-specific features**
   - Touch exploration
   - Swipe gestures work properly
   - Pinch-to-zoom compatibility

## Test Documentation Template

### Test Session Record

```markdown
## Screen Reader Test Session

**Date:** 2025-11-09
**Tester:** [Name]
**Environment:**
- OS: Windows 11
- Browser: Firefox 119
- Screen Reader: NVDA 2023.3
- Website: http://localhost:5173/

### Tests Performed

#### 1. Page Structure ✅ PASS
- All landmarks properly announced
- Navigation structure clear
- Skip links functional

#### 2. Heading Hierarchy ⚠️ ISSUE
- Issue: H4 appears before H2 in AgentTools section
- Location: /src/components/marketing/new/AgentToolsSection.tsx
- Severity: Medium
- Fix Applied: Changed H4 to H3

#### 3. Form Labels ✅ PASS
- All inputs have proper labels
- Required fields announced
- Error messages clear

[Continue for all test categories...]

### Overall Assessment
- Critical Issues: 0
- Medium Issues: 1 (fixed)
- Minor Issues: 0
- Recommendation: APPROVED for production
```

## Common Issues & Solutions

### Issue: "No label" announced for input

**Cause:** Missing or improperly associated label

**Solution:**
```tsx
// Bad
<input type="text" />

// Good
<label htmlFor="name-input">Name</label>
<input type="text" id="name-input" name="name" aria-label="Enter your name" />
```

### Issue: "Button" with no text

**Cause:** Icon-only button without aria-label

**Solution:**
```tsx
// Bad
<button><MenuIcon /></button>

// Good
<button aria-label="Open menu"><MenuIcon /></button>
```

### Issue: Content not announced when changed

**Cause:** Missing aria-live region

**Solution:**
```tsx
// Add for dynamic content
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

### Issue: Modal doesn't trap focus

**Cause:** Missing focus management

**Solution:**
```tsx
useEffect(() => {
  if (modalOpen) {
    // Store last focused element
    const lastFocused = document.activeElement;
    
    // Focus first element in modal
    modalRef.current?.querySelector('button, [href]')?.focus();
    
    // Trap focus
    const trapFocus = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        modalRef.current?.querySelector('button')?.focus();
      }
    };
    
    document.addEventListener('focus', trapFocus, true);
    
    return () => {
      document.removeEventListener('focus', trapFocus, true);
      lastFocused?.focus(); // Restore focus
    };
  }
}, [modalOpen]);
```

## Testing Checklist

Use this checklist for comprehensive screen reader testing:

### General
- [ ] Page title is descriptive and unique
- [ ] Language is properly set (`<html lang="de">`)
- [ ] Skip links are present and functional

### Structure
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Landmarks are properly labeled
- [ ] Lists use proper markup (`<ul>`, `<ol>`, `<li>`)

### Navigation
- [ ] All links have descriptive text
- [ ] Current page indicated in navigation
- [ ] Breadcrumbs announce properly

### Forms
- [ ] All inputs have labels
- [ ] Required fields indicated
- [ ] Error messages announced
- [ ] Success messages announced
- [ ] Fieldsets used for grouped inputs

### Images
- [ ] All images have alt text
- [ ] Decorative images have `alt=""`
- [ ] Complex images have longer descriptions

### Tables
- [ ] Table headers properly marked (`<th>`)
- [ ] Table captions present
- [ ] Complex tables have proper scope

### Interactive
- [ ] Buttons indicate their purpose
- [ ] Toggle states announced
- [ ] Modals trap focus
- [ ] Tooltips are keyboard accessible

### Dynamic Content
- [ ] Loading states announced
- [ ] AJAX updates use aria-live
- [ ] Route changes announced (SPA)

## Reporting Issues

When you find an accessibility issue during testing:

1. **Document the issue**
   - Screen reader used
   - Browser and OS
   - Expected behavior
   - Actual behavior
   - Steps to reproduce

2. **Screenshot/Recording**
   - Capture screen or record session
   - Include NVDA speech viewer for Windows tests

3. **Severity Rating**
   - **Critical:** Blocks core functionality
   - **High:** Major impact on usability
   - **Medium:** Moderate impact
   - **Low:** Minor annoyance

4. **Submit Issue**
   - File GitHub issue with "a11y" label
   - Include test documentation
   - Assign to development team

## Resources

### Tools
- [NVDA](https://www.nvaccess.org/)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver Guide](https://support.apple.com/guide/voiceover/welcome/mac)
- [NVDA Keyboard Shortcuts](https://www.nvaccess.org/files/nvdaTracAttachments/455/keycommands%20with%20laptop%20keyboard%20layout.html)

### Documentation
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Deque Screen Reader Testing Guide](https://www.deque.com/blog/dont-screen-readers-in-accessibility-testing/)

### Training
- [Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)
- [Basic Screen Reader Commands](https://dequeuniversity.com/screenreaders/)

---

**Last Updated:** November 2025  
**Contact:** dev-team@replainow.com






