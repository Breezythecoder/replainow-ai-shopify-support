# Code Conventions & Standards

## Overview

This document defines the coding standards and conventions for the ReplAInow project. Following these conventions ensures consistency, maintainability, and quality across the codebase.

## File Naming Conventions

### Components

```
✅ ModernHero.tsx        # PascalCase for components
✅ AdvancedSEO.tsx       # PascalCase for components
✅ ErrorBoundary.tsx     # PascalCase for components

❌ modernHero.tsx        # Wrong: camelCase
❌ modern-hero.tsx       # Wrong: kebab-case
❌ modern_hero.tsx       # Wrong: snake_case
```

### Utilities & Hooks

```
✅ useTranslation.ts     # camelCase for hooks
✅ formatDate.ts         # camelCase for utilities
✅ validateEmail.ts      # camelCase for utilities

❌ UseTranslation.ts     # Wrong: PascalCase
❌ format-date.ts        # Wrong: kebab-case
```

### Configuration & Constants

```
✅ config.ts             # lowercase for config
✅ types.ts              # lowercase for type files
✅ constants.ts          # lowercase for constants

Inside files:
export const DEFAULT_LOCALE = 'de';           # UPPER_SNAKE_CASE
export const API_BASE_URL = 'https://...';    # UPPER_SNAKE_CASE
```

### Directories

```
✅ components/           # lowercase, plural
✅ utils/               # lowercase, plural
✅ hooks/               # lowercase, plural

❌ Components/          # Wrong: PascalCase
❌ component/           # Wrong: singular
```

## TypeScript Conventions

### Interface vs Type

```typescript
// ✅ Use interface for object shapes
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

// ✅ Use type for unions, intersections, primitives
type Status = 'active' | 'inactive' | 'pending';
type ID = string | number;

// ✅ Use type for complex composed types
type UserWithStatus = UserProps & { status: Status };
```

### Naming Interfaces and Types

```typescript
// ✅ Component props: ComponentNameProps
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// ✅ Data models: Descriptive name
interface User {
  id: string;
  name: string;
}

// ✅ Function types: Descriptive name + Handler/Callback
type ClickHandler = (event: MouseEvent) => void;
type DataCallback = (data: string) => void;

// ❌ Avoid generic names
type Props = { ... };           // Too generic
type Data = { ... };            // Too generic
```

### Function Signatures

```typescript
// ✅ Explicit return types for exported functions
export function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ✅ Async functions explicitly return Promise
export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// ✅ Arrow functions for simple utilities
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
};
```

## React Conventions

### Component Structure

```typescript
// ✅ Correct component structure
import React from 'react';
import { ComponentProps } from './types';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary',
  onClick 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
```

### Props Destructuring

```typescript
// ✅ Destructure in function signature
export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return <div>...</div>;
};

// ❌ Don't destructure in body
export const Card: React.FC<CardProps> = (props) => {
  const { title, description, image } = props;
  return <div>...</div>;
};
```

### Default Props

```typescript
// ✅ Use default parameters
export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'medium'
}) => {
  // ...
};

// ❌ Avoid defaultProps (deprecated in React 18)
Button.defaultProps = {
  variant: 'primary'
};
```

### Exports

```typescript
// ✅ Named exports for components
export const ModernHero: React.FC = () => { ... };
export const ModernFeatures: React.FC = () => { ... };

// ✅ Can also use at end of file
const ModernHero: React.FC = () => { ... };
const ModernFeatures: React.FC = () => { ... };

export { ModernHero, ModernFeatures };

// ❌ Avoid default exports for components
export default ModernHero;  // Makes tree-shaking harder
```

## i18n Conventions

### Translation Keys

```typescript
// ✅ Dot notation with namespace
t('common.navigation.home')
t('marketing.hero.title')
t('seo.description')
t('legal.privacy.title')

// ✅ Descriptive path
t('marketing.pricing.plans.starter.name')
t('common.footer.legal.privacy')

// ❌ Avoid flat keys
t('homeTitle')           // No namespace
t('nav_home')           // Wrong format
```

### Translation File Structure

```json
// ✅ Nested structure
{
  "navigation": {
    "home": "Home",
    "features": "Features"
  },
  "hero": {
    "title": "AI Helpdesk",
    "subtitle": "Responds in 3 seconds"
  }
}

// ❌ Flat structure
{
  "navigation_home": "Home",
  "navigation_features": "Features",
  "hero_title": "AI Helpdesk"
}
```

## CSS/Tailwind Conventions

### Class Organization

```tsx
// ✅ Group related classes
<div className="
  flex items-center justify-between
  px-4 py-2
  bg-white rounded-lg shadow-md
  hover:shadow-lg transition-shadow
">
  {children}
</div>

// ✅ Use utilities, avoid custom CSS when possible
<div className="text-lg font-bold text-slate-900">

// ❌ Don't mix inline styles with Tailwind
<div className="p-4" style={{ padding: '16px' }}>
```

### Component Variants

```typescript
// ✅ Use class-variance-authority for variants
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'px-4 py-2 rounded-lg font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      },
      size: {
        sm: 'text-sm px-3 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

## Import Conventions

### Import Order

```typescript
// 1. External dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Internal components
import { ModernHero } from '@/components/marketing/ModernHero';
import { Button } from '@/components/ui/button';

// 3. Utilities and hooks
import { useTranslation } from '@/i18n';
import { formatDate } from '@/utils/date';

// 4. Types
import type { User, Post } from '@/types';

// 5. Styles (if any)
import './styles.css';
```

### Path Aliases

```typescript
// ✅ Use @ alias for src imports
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n';
import { formatDate } from '@/utils/date';

// ❌ Avoid relative paths for deep imports
import { Button } from '../../../components/ui/button';
```

## Comments & Documentation

### Component Documentation

```typescript
/**
 * Primary call-to-action button component
 * 
 * @param label - Button text
 * @param onClick - Click handler
 * @param variant - Visual style (default: 'primary')
 * 
 * @example
 * ```tsx
 * <Button 
 *   label="Click me" 
 *   onClick={() => console.log('clicked')}
 *   variant="primary"
 * />
 * ```
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // ...
};
```

### Inline Comments

```typescript
// ✅ Comment WHY, not WHAT
// Debounce search to avoid excessive API calls
const debouncedSearch = useMemo(() => 
  debounce(handleSearch, 300), 
  [handleSearch]
);

// ❌ Don't state the obvious
// Set count to 0
const count = 0;

// ✅ Use TODO comments with context
// TODO: Add error handling for network failures (Issue #123)

// ❌ Vague TODOs
// TODO: fix this
```

## Error Handling

### Try-Catch

```typescript
// ✅ Specific error handling
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Re-throw for caller to handle
  }
}

// ✅ Error boundaries for React components
<ErrorBoundary fallback={<ErrorMessage />}>
  <MyComponent />
</ErrorBoundary>
```

## Testing Conventions

### Test File Naming

```
src/components/Button.tsx
tests/e2e/button.spec.ts        # E2E tests

utils/formatDate.ts
tests/unit/formatDate.test.ts   # Unit tests
```

### Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('Button component', () => {
  test('should render with label', async ({ page }) => {
    await page.goto('/');
    
    const button = await page.locator('[data-testid="cta-button"]');
    await expect(button).toHaveText('Click me');
  });
  
  test('should handle click events', async ({ page }) => {
    await page.goto('/');
    
    const button = await page.locator('[data-testid="cta-button"]');
    await button.click();
    
    await expect(page).toHaveURL('/thank-you');
  });
});
```

## Git Conventions

### Branch Naming

```bash
✅ feature/add-italian-language
✅ fix/translation-key-error
✅ refactor/consolidate-seo-components
✅ docs/update-contributing-guide
✅ chore/update-dependencies

❌ new-feature              # Too vague
❌ john-changes            # Not descriptive
❌ FEATURE-123             # Use lowercase
```

### Commit Messages

```bash
✅ feat: add Italian language support
✅ fix: resolve missing translation keys in French locale
✅ refactor: consolidate SEO components into single module
✅ docs: update i18n guide with new workflow
✅ chore: update React to 18.3.1

❌ Updated files          # Not descriptive
❌ fix                   # Too vague
❌ WIP                   # Don't commit WIP
```

## Performance Best Practices

### Memoization

```typescript
// ✅ Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

// ✅ Memoize callbacks passed to children
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ❌ Don't memoize everything (premature optimization)
const simpleValue = useMemo(() => x + y, [x, y]); // Overkill
```

### Lazy Loading

```typescript
// ✅ Lazy load routes
const Privacy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/TermsOfService'));

// ✅ Code splitting for heavy components
const HeavyChart = lazy(() => import('./components/HeavyChart'));
```

## Security Best Practices

### Input Sanitization

```typescript
// ✅ Sanitize user input
import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(userInput);

// ❌ Don't use dangerouslySetInnerHTML with raw input
<div dangerouslySetInnerHTML={{ __html: userInput }} />  // XSS risk
```

### Environment Variables

```typescript
// ✅ Never commit secrets
// Use environment variables
const API_KEY = import.meta.env.VITE_API_KEY;

// ❌ Don't hardcode secrets
const API_KEY = 'sk-123456789abcdef';  // NEVER DO THIS
```

## Accessibility

### Semantic HTML

```tsx
// ✅ Use semantic HTML
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// ❌ Avoid div soup
<div className="nav">
  <div className="nav-list">
    <div className="nav-item">
      <div onClick={() => navigate('/home')}>Home</div>
    </div>
  </div>
</div>
```

### ARIA Labels

```tsx
// ✅ Add ARIA labels for screen readers
<button aria-label="Close dialog" onClick={onClose}>
  <X />
</button>

// ✅ Use semantic roles
<div role="alert" aria-live="polite">
  {message}
</div>
```

---

**Last Updated**: November 2024
**Status**: Living document - update as conventions evolve

