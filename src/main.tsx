import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/design-tokens.css'

if (import.meta.env.MODE === 'development' && false) {
  // TEMPORARILY DISABLED: Axe accessibility auditing
  // Re-enable by removing "&& false" above
  Promise.all([
    import('react'),
    import('react-dom'),
    // @ts-ignore - optional dev dependency
    import('@axe-core/react'),
  ]).then(([React, ReactDOM, axe]) => {
    // @ts-ignore - axe type expects default export
    axe.default(React, ReactDOM, 1000);
    console.log('%c[axe] Accessibility auditing enabled', 'color: #10b981');
  }).catch(() => {});
}

createRoot(document.getElementById("root")!).render(<App />);
