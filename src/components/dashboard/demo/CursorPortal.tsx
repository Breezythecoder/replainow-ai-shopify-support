/**
 * 🎯 CURSOR PORTAL - Render cursor at document.body level
 * Prevents transform/scale interference from parent containers
 * ENTERPRISE SOLUTION for cursor positioning issues
 */

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface CursorPortalProps {
  children: ReactNode;
}

/**
 * Renders children at document.body level
 * This ensures cursor is outside any scaled/transformed containers
 */
export const CursorPortal = ({ children }: CursorPortalProps) => {
  return createPortal(children, document.body);
};












