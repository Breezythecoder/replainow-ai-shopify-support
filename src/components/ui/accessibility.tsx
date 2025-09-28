import { useEffect, useState } from "react";

import { t } from "@/i18n";

// Skip to main content link for accessibility
export const SkipToMainContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium shadow-lg"
  >
    {t('ui.skipToMain')}
  </a>
);

// Keyboard navigation helper
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle escape key to close modals
      if (event.key === "Escape") {
        const openModal = document.querySelector("[data-modal-open]");
        if (openModal) {
          (openModal as HTMLElement).click();
        }
      }

      // Handle tab navigation for better accessibility
      if (event.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("user-is-tabbing");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
};

// Reduced motion detection and respect for user preferences
export const useReducedMotion = () => {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return shouldReduceMotion;
};

// Focus management for better accessibility
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  const saveFocus = () => {
    setFocusedElement(document.activeElement as HTMLElement);
  };

  const restoreFocus = () => {
    if (focusedElement && typeof focusedElement.focus === "function") {
      focusedElement.focus();
    }
  };

  const trapFocus = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
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

  return { saveFocus, restoreFocus, trapFocus };
};

// Screen reader announcements
export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.setAttribute("class", "sr-only");
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Color contrast checker (development utility)
export const checkColorContrast = (foreground: string, background: string) => {
  // This is a simplified version - in production you'd use a proper contrast checker
  console.log(`Color contrast check: ${foreground} on ${background}`);
  return true; // Placeholder
};

// Accessibility component for landmarks
interface LandmarkProps {
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
  id?: string;
}

export const Landmark = ({ children, role = "region", ariaLabel, id }: LandmarkProps) => (
  <div role={role} aria-label={ariaLabel} id={id}>
    {children}
  </div>
);