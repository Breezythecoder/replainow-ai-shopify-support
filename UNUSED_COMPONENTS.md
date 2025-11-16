# UNUSED COMPONENTS - DO NOT TOUCH!

**Generated:** November 16, 2025  
**Purpose:** Identify old/unused components in /new/ folder to avoid wasting time  
**Critical:** These files are NOT imported in NewIndex.tsx - DO NOT refactor them!

---

## 📊 SUMMARY

- **Total Files in /new/ folder:** 26 files
- **Used in NewIndex.tsx:** 14 files ✅
- **Unused/Old Files:** 12 files ❌
- **Action:** IGNORE the 12 unused files completely

---

## ✅ USED COMPONENTS (Refactor These!)

These 14 components ARE imported and used in NewIndex.tsx:

1. **HeroSection.tsx** - Line 6 in NewIndex.tsx
2. **AIPowerShowcase.tsx** - Line 7 in NewIndex.tsx  
3. **ValuePropositionSection.tsx** - Line 8 in NewIndex.tsx
4. **TestimonialsSection.tsx** - Line 9 in NewIndex.tsx
5. **AIKnowledgeBanner.tsx** - Line 10 in NewIndex.tsx
6. **OmnichannelUnified.tsx** - Line 11 in NewIndex.tsx
7. **AIIntelligenceDeepDive.tsx** - Line 12 in NewIndex.tsx
8. **DashboardShowcaseSection.tsx** - Line 13 in NewIndex.tsx
9. **AgentProductivity.tsx** - Line 14 in NewIndex.tsx
10. **IntegrationStepsSection.tsx** - Line 15 in NewIndex.tsx
11. **ROISection.tsx** - Line 16 in NewIndex.tsx
12. **PricingSection.tsx** - Line 17 in NewIndex.tsx
13. **FAQSection.tsx** - Line 18 in NewIndex.tsx
14. **FinalCTASection.tsx** - Line 19 in NewIndex.tsx

**These are the ONLY components to refactor!**

---

## ❌ UNUSED COMPONENTS (DO NOT TOUCH!)

These 12 components exist in the /new/ folder but are NOT imported in NewIndex.tsx.  
They are likely old versions or experimental components that were replaced.

### List of Unused Files

1. **AgentToolsSection.tsx**
   - Old version, replaced by AgentProductivity.tsx
   - DO NOT refactor

2. **AIQualitySection.tsx**
   - Old standalone section
   - Now part of AIIntelligenceDeepDive.tsx
   - DO NOT refactor

3. **CustomerJourneySection.tsx**
   - Old standalone section
   - Now part of AIIntelligenceDeepDive.tsx
   - DO NOT refactor

4. **EmailHelpdeskBanner.tsx**
   - Old banner version
   - Replaced by OmnichannelUnified.tsx
   - DO NOT refactor

5. **InformationCollectionSection.tsx**
   - Old standalone section
   - Now part of AIIntelligenceDeepDive.tsx
   - DO NOT refactor

6. **LiveChatBanner.tsx**
   - Old banner version
   - Replaced by OmnichannelUnified.tsx
   - DO NOT refactor

7. **MultiLanguageBanner.tsx**
   - Old banner
   - Functionality merged into other sections
   - DO NOT refactor

8. **ProactiveEngagementBanner.tsx**
   - Old banner
   - Functionality merged into other sections
   - DO NOT refactor

9. **ProductPickerSection.tsx**
   - Old standalone section
   - Now part of AgentProductivity.tsx
   - DO NOT refactor

10. **StatsSection.tsx**
    - Old stats display
    - Replaced by ValuePropositionSection.tsx
    - DO NOT refactor

11. **TrustBannerSection.tsx**
    - Old trust badge banner
    - Functionality merged into HeroSection.tsx
    - DO NOT refactor

12. **VisualCommerceBanner.tsx**
    - Old banner
    - Functionality merged into other sections
    - DO NOT refactor

---

## 🔍 VERIFICATION

### How to Verify
```bash
# List all files in /new/ folder
ls -1 src/components/marketing/new/

# Check what's imported in NewIndex.tsx
grep "from.*new/" src/pages/NewIndex.tsx
```

### Output Analysis
- **26 files** listed by `ls`
- **14 imports** found by `grep`
- **12 files** NOT imported = unused

---

## ⚠️ CRITICAL WARNINGS

### DO NOT:
- ❌ Open or read the 12 unused files
- ❌ Attempt to refactor them
- ❌ Verify if they have i18n
- ❌ Check their translation keys
- ❌ Waste ANY time on them

### WHY NOT:
1. **Not Used:** They're not rendered on the page
2. **Waste of Time:** Refactoring them achieves nothing
3. **Confusion Risk:** Old code might have different patterns
4. **Zero Impact:** No user sees these components

### INSTEAD:
- ✅ Focus ONLY on the 14 used components
- ✅ Follow the priority order in COMPONENT_ANALYSIS.md
- ✅ One component at a time
- ✅ Test and commit each one

---

## 📝 FUTURE CLEANUP (Not Our Task!)

Someone in the future might want to:
- Delete these 12 unused files
- Archive them to a `/old/` folder
- Document why they were deprecated

**But that's NOT our concern now!** We're doing i18n implementation, not code cleanup.

---

## ✅ VERIFICATION CHECKLIST

Before starting refactoring, verify:
- [ ] Read LIVE_SITE_STRUCTURE.md
- [ ] Read COMPONENT_ANALYSIS.md
- [ ] Read this UNUSED_COMPONENTS.md
- [ ] Understand: Only 14 components need work
- [ ] Understand: 12 components to ignore completely
- [ ] Ready to start Phase 1.4 (Translation Keys Verification)

---

**Status:** ✅ PHASE 1.3 COMPLETE  
**Confidence Level:** 100% - Unused components identified and documented  
**Ready for:** Phase 1.4 - Translation Keys Verification

