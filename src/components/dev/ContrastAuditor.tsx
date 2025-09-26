import React, { useEffect, useMemo, useState } from "react";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";

extend([a11yPlugin]);

// Development-only contrast auditor overlay
// Scans visible text nodes and reports low-contrast pairs (< 4.5:1 for normal text, < 3:1 for large text)
const ContrastAuditor: React.FC = () => {
  const [results, setResults] = useState<Array<{
    selector: string;
    text: string;
    color: string;
    bg: string;
    ratio: number;
    size: number;
    weight: number;
  }>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isVisible = (el: Element) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        style.visibility !== "hidden" &&
        style.display !== "none" &&
        parseFloat(style.opacity || "1") > 0.01
      );
    };

    const getBgColor = (el: Element): string => {
      let node: Element | null = el;
      while (node && node !== document.documentElement) {
        const cs = window.getComputedStyle(node);
        const bg = cs.backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          return bg;
        }
        node = node.parentElement;
      }
      // Fallback to body/bg token
      const body = window.getComputedStyle(document.body);
      return body.backgroundColor || "rgb(255,255,255)";
    };

    const toRgbString = (val: string) => {
      // Normalize CSS color string to rgb() for colord
      try {
        return colord(val).toRgbString();
      } catch {
        return "rgb(0,0,0)";
      }
    };

    const MIN_RATIO = 4.5; // normal text
    const LARGE_RATIO = 3.0; // for >= 18px or 14px bold

    const violations: typeof results = [];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
        const text = node.nodeValue.trim();
        if (text.length < 2) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || !isVisible(parent)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let current: Node | null = walker.nextNode();
    while (current) {
      const parent = (current as Text).parentElement!;
      const cs = window.getComputedStyle(parent);
      const color = toRgbString(cs.color);
      const bg = toRgbString(getBgColor(parent));

      const fontSize = parseFloat(cs.fontSize || "16");
      const fontWeight = parseInt(cs.fontWeight || "400", 10);
      const ratio = colord(color).contrast(bg);
      const isLarge = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
      const threshold = isLarge ? LARGE_RATIO : MIN_RATIO;

      if (ratio < threshold) {
        const selector = parent.tagName.toLowerCase() + (parent.className ? "." + parent.className.toString().replace(/\s+/g, ".") : "");
        violations.push({
          selector,
          text: (current as Text).nodeValue!.trim().slice(0, 80),
          color,
          bg,
          ratio: parseFloat(ratio.toFixed(2)),
          size: fontSize,
          weight: fontWeight,
        });
      }
      current = walker.nextNode();
    }

    setResults(violations);

    if (violations.length) {
      // Group log for developers
      // eslint-disable-next-line no-console
      console.groupCollapsed(`%cContrast violations: ${violations.length}`, "color: #ef4444; font-weight: bold;");
      violations.slice(0, 20).forEach((v, i) => {
        // eslint-disable-next-line no-console
        console.log(`#${i+1}`, v);
      });
      // eslint-disable-next-line no-console
      console.groupEnd();
    } else {
      // eslint-disable-next-line no-console
      console.log("%cNo contrast violations detected (AA)", "color: #10b981; font-weight: bold;");
    }
  }, []);

  if (results.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 99999,
      }}
      className="glass-world-class rounded-xl px-4 py-3 shadow-card text-sm"
      aria-live="polite"
    >
      <div className="font-bold text-brand-warning">Kontrast-Probleme: {results.length}</div>
      <div className="mt-1 text-xs opacity-80">Details in der Konsole (axe + Auditor)</div>
    </div>
  );
};

export default ContrastAuditor;
