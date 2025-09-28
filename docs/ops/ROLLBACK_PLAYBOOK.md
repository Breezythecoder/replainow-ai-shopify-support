# Rollback Playbook - EN Parity Release

## Overview
This document outlines the emergency rollback procedures for the EN parity release (v1.3.3).

## Quick Actions (Emergency)

### Immediate Rollback
```bash
# 1. Revert to last known good commit
git revert HEAD --no-edit
git push origin main

# 2. Force push if needed (use with caution)
git reset --hard <last-good-commit-hash>
git push origin main --force-with-lease

# 3. Unregister Service Worker (if SW issues)
# Open browser console and run:
navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(reg => reg.unregister()))
```

### Service Worker Emergency Reset
If the new SW is causing issues:
1. Open https://replainow.com in incognito mode
2. Open DevTools Console
3. Run: `navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(reg => reg.unregister()))`
4. Hard refresh the page

## Monitoring & Detection

### Sentry Alerts
- Monitor Sentry dashboard for error spikes
- Look for errors related to:
  - i18n translation failures
  - Language detection issues
  - SEO schema problems
  - Service worker conflicts

### Performance Degradation
- Monitor Web Vitals (LCP, FID, CLS)
- Check Core Web Vitals dashboard
- Look for bundle size increases >10%

### User Reports
- Monitor user feedback channels
- Check social media mentions
- Review support tickets for language-related issues

## Rollback Triggers

### Automatic Triggers (CI/CD)
- Playwright E2E tests fail >3 times in a row
- Lighthouse scores drop below 85
- Bundle size increases >15%
- Locale shape validation fails

### Manual Triggers
- >5% of users report language issues
- Console errors spike >200%
- SEO ranking drops significantly
- Service worker conflicts reported

## Rollback Procedure

### Phase 1: Assessment (0-5 minutes)
1. Check Sentry error dashboard
2. Review recent deployment logs
3. Check user feedback channels
4. Assess severity level

### Phase 2: Containment (5-15 minutes)
1. Disable problematic features via feature flags
2. If SW issue: guide users to unregister SW
3. Communicate issue to stakeholders
4. Prepare rollback PR

### Phase 3: Rollback (15-30 minutes)
1. Create revert PR with explanation
2. Get emergency approval if needed
3. Merge revert PR
4. Monitor post-rollback metrics
5. Verify all systems stable

### Phase 4: Investigation (30-120 minutes)
1. Root cause analysis
2. Identify fix for underlying issue
3. Test fix in staging
4. Prepare proper fix PR

## Communication Template

### Internal Notification
```
🚨 ROLLBACK ACTIVATED - EN Parity v1.3.3

Issue: [Brief description]
Impact: [User impact assessment]
ETA: [Time to resolution]
Status: [rollback initiated/completed/investigating]

Next Steps:
- [Immediate actions]
- [Investigation plan]
- [Communication plan]
```

### User Communication
```
Important Notice: Brief Service Interruption

We're experiencing technical issues with our English language support. Our team is working to resolve this quickly.

Expected resolution: [ETA]
Status updates: [link to status page]

We apologize for any inconvenience.
- ReplAInow Team
```

## Post-Mortem Requirements

### Required Documentation
- Root cause analysis
- Timeline of events
- Impact assessment
- Prevention measures
- Future monitoring improvements

### Review Meeting
- All stakeholders present
- Technical deep dive
- Process improvement discussion
- Action items assigned

## Prevention Measures

### Pre-Deployment
- Enhanced testing in staging
- Gradual rollout (canary deployment)
- Feature flags for all new functionality
- Comprehensive monitoring setup

### Post-Deployment
- 24/7 monitoring alerts
- Quick rollback procedures documented
- Regular disaster recovery drills
- Automated health checks

## Last Updated
2025-09-28 by EN Parity Implementation Team

## Contacts
- Technical Lead: [Name]
- DevOps: [Name]
- Product: [Name]
- Emergency: [Phone/Email]
