import React from 'react';
import { z } from 'zod';
import { safeArray, safeObject, type FeaturesArraySchema, type TestimonialsArraySchema, type KillSwitchComponent } from '@/utils/safeT';

interface SectionKillSwitchProps {
  children: React.ReactNode;
  translationKey: string;
  schema: any;
  fallbackText?: string;
  locale?: string;
  className?: string;
}

/**
 * SectionKillSwitch - Conditionally renders sections based on translation availability
 *
 * This component:
 * - Checks if translation data exists and is valid
 * - Shows a fallback message if data is missing
 * - Only renders children if data is available
 * - Helps prevent white-screen issues from missing translations
 */
export const SectionKillSwitch: React.FC<SectionKillSwitchProps> = ({
  children,
  translationKey,
  schema,
  fallbackText,
  locale,
  className = ''
}) => {
  // Check if this is an array schema or object schema
  const isArraySchema = schema._def?.typeName === 'ZodArray';

  let data: any;
  let isValid = false;

  if (isArraySchema) {
    data = safeArray(schema, translationKey, locale);
    isValid = Array.isArray(data) && data.length > 0;
  } else {
    data = safeObject(schema, translationKey, locale);
    isValid = data !== null && data !== undefined;
  }

  // If data is missing or invalid, show fallback
  if (!isValid) {
    if (import.meta.env.VITE_DEBUG_I18N === '1') {
      // Show debug info in staging
      return (
        <div className={`p-6 border-2 border-dashed border-orange-300 bg-orange-50 ${className}`}>
          <div className="text-center">
            <div className="text-orange-600 font-semibold mb-2">
              🔧 Translation Missing
            </div>
            <div className="text-sm text-orange-700 mb-2">
              Key: <code className="bg-orange-100 px-1 rounded">{translationKey}</code>
            </div>
            <div className="text-sm text-orange-700 mb-2">
              Locale: <code className="bg-orange-100 px-1 rounded">{locale || 'auto'}</code>
            </div>
            {fallbackText && (
              <div className="text-sm text-orange-700">
                Fallback: <span className="italic">"{fallbackText}"</span>
              </div>
            )}
            <div className="text-xs text-gray-600 mt-3">
              This section is hidden in production when translations are missing
            </div>
          </div>
        </div>
      );
    } else {
      // Hide section in production
      return null;
    }
  }

  // Render children with validated data
  return (
    <div className={className}>
      {React.cloneElement(children as React.ReactElement, { data })}
    </div>
  );
};

// Convenience components for common patterns
export const FeaturesSection: React.FC<{
  children: React.ReactNode;
  locale?: string;
  className?: string;
}> = ({ children, locale, className }) => (
  <SectionKillSwitch
    translationKey="ui.features.items"
    schema={FeaturesArraySchema}
    fallbackText="Features section coming soon"
    locale={locale}
    className={className}
  >
    {children}
  </SectionKillSwitch>
);

export const TestimonialsSection: React.FC<{
  children: React.ReactNode;
  locale?: string;
  className?: string;
}> = ({ children, locale, className }) => (
  <SectionKillSwitch
    translationKey="ui.testimonials.items"
    schema={TestimonialsArraySchema}
    fallbackText="Customer testimonials coming soon"
    locale={locale}
    className={className}
  >
    {children}
  </SectionKillSwitch>
);

export const StatsSection: React.FC<{
  children: React.ReactNode;
  locale?: string;
  className?: string;
}> = ({ children, locale, className }) => (
  <SectionKillSwitch
    translationKey="ui.stats.items"
    schema={z.array(z.object({ value: z.string(), label: z.string() }))}
    fallbackText="Statistics section coming soon"
    locale={locale}
    className={className}
  >
    {children}
  </SectionKillSwitch>
);

  // Hook for programmatic section checking
export const useSectionData = <T,>(
  translationKey: string,
  schema: z.ZodType<T>,
  locale?: string
): T | null => {
  const isArraySchema = schema._def?.typeName === 'ZodArray';

  if (isArraySchema) {
    return safeArray(schema as z.ZodType<T[]>, translationKey, locale) as T;
  } else {
    return safeObject(schema, translationKey, locale);
  }
};

// Kill switch HOC - renders fallback when data is missing
export function withKillSwitch<T>(
  Component: React.ComponentType<{ data: T }>,
  fallbackComponent?: React.ComponentType,
  fallbackText?: string
) {
  return function SafeComponent({ data, ...props }: { data: T | null } & any) {
    if (!data) {
      if (fallbackComponent) {
        return React.createElement(fallbackComponent, props);
      }

      return fallbackText ? (
        <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
          <p className="text-yellow-800">{fallbackText}</p>
        </div>
      ) : null;
    }

    return React.createElement(Component, { data, ...props });
  };
}
