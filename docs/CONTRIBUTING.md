# Contributing to ReplAInow

## Welcome!

Thank you for your interest in contributing to ReplAInow. This document provides guidelines and best practices for contributing to the project.

## Development Setup

### Prerequisites

- **Node.js**: 18+ (recommended: 20+)
- **npm**: 8+ (comes with Node.js)
- **Git**: Latest version
- **Code Editor**: VS Code recommended

### Initial Setup

```bash
# Clone repository
git clone https://github.com/your-org/replainow-ai-shopify-support
cd replainow-ai-shopify-support

# Install dependencies
npm ci

# Start development server
npm run dev

# Open http://localhost:5173
```

### Recommended VS Code Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Language support
- **Tailwind CSS IntelliSense** - CSS class suggestions
- **i18n Ally** - Translation management

## Project Structure

See `docs/ARCHITECTURE.md` for detailed project structure.

## Development Workflow

### 1. Create a Branch

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# or bug fix branch
git checkout -b fix/bug-description
```

### 2. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update tests if needed

### 3. Test Your Changes

```bash
# Run type checking
npm run typecheck

# Run linter
npm run lint

# Run E2E tests
npm run test:e2e

# Build and verify
npm run build
```

### 4. Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add Italian language support"
```

**Commit Message Format**:
```
<type>: <description>

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat: add dark mode toggle
fix: resolve translation key error for French locale
docs: update i18n guide with new language process
refactor: consolidate SEO components
```

### 5. Push and Create PR

```bash
# Push to remote
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

## Code Standards

### TypeScript

```typescript
// ✅ Good
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

function greetUser({ name, email }: UserProps): string {
  return `Hello, ${name}!`;
}

// ❌ Bad
function greetUser(name, email) {
  return `Hello, ${name}!`;
}
```

### React Components

```typescript
// ✅ Good - Functional component with TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};

// ❌ Bad - No types, unclear props
export const Button = ({ label, onClick, variant }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Naming Conventions

- **Components**: PascalCase (`ModernHero.tsx`)
- **Functions**: camelCase (`getUserData()`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_LOCALE`)
- **Interfaces**: PascalCase with descriptive names (`TranslationConfig`)
- **Files**: Match component name (`ModernHero.tsx` for ModernHero component)

### File Organization

```
src/components/marketing/
├── ModernHero.tsx          # Component
├── ModernFeatures.tsx      # Component
└── ModernPricing.tsx       # Component
```

Group by feature, not by type.

## Adding New Features

### Adding a Component

1. Create component file in appropriate directory
2. Export component
3. Add props interface
4. Implement component logic
5. Add to index if needed
6. Test in isolation

```typescript
// src/components/marketing/NewFeature.tsx
import React from 'react';

interface NewFeatureProps {
  title: string;
  description: string;
}

export const NewFeature: React.FC<NewFeatureProps> = ({ 
  title, 
  description 
}) => {
  return (
    <section className="py-12">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
```

### Adding a Translation

See `docs/I18N_GUIDE.md` for detailed instructions.

Quick steps:
1. Add key to appropriate JSON file(s)
2. Translate for all supported locales
3. Use in component: `t('namespace.key')`

### Adding a Page

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link if needed
4. Add to sitemap generation
5. Test routing

## Testing

### Writing Tests

```typescript
// tests/e2e/new-feature.spec.ts
import { test, expect } from '@playwright/test';

test('should display new feature correctly', async ({ page }) => {
  await page.goto('/');
  
  const feature = await page.locator('[data-testid="new-feature"]');
  await expect(feature).toBeVisible();
});
```

### Running Tests

```bash
# All tests
npm run test:e2e

# Specific test file
npx playwright test tests/e2e/new-feature.spec.ts

# UI mode
npm run test:e2e:ui
```

## Documentation

### When to Document

- New features or components
- Complex logic or algorithms
- API changes
- Breaking changes
- Configuration changes

### Documentation Standards

```typescript
/**
 * Fetches user data from API
 * 
 * @param userId - The unique user identifier
 * @param options - Optional fetch configuration
 * @returns Promise resolving to user data
 * @throws {Error} If user not found
 * 
 * @example
 * ```typescript
 * const user = await fetchUser('123');
 * console.log(user.name);
 * ```
 */
async function fetchUser(
  userId: string, 
  options?: FetchOptions
): Promise<User> {
  // Implementation
}
```

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows project style guide
- [ ] Tests pass (`npm run test:e2e`)
- [ ] Linter passes (`npm run lint`)
- [ ] TypeScript compiles (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commit messages are clear

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests
- [ ] All tests pass
```

## Code Review Process

### As a Reviewer

- Be constructive and respectful
- Explain reasoning for suggestions
- Approve when ready or request changes
- Test changes locally if needed

### As an Author

- Respond to all comments
- Make requested changes
- Re-request review after changes
- Keep discussion focused

## Common Tasks

### Update Package Dependencies

```bash
# Check for updates
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully!)
npm update
```

### Add New Script

Edit `package.json`:
```json
{
  "scripts": {
    "new-script": "command to run"
  }
}
```

### Regenerate Types

```bash
npm run typecheck
```

## Getting Help

- **Documentation**: Check `docs/` directory first
- **Issues**: Search existing issues on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Tag team members for specific expertise

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Playwright Docs](https://playwright.dev/)

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

Thank you for contributing to ReplAInow! 🚀

