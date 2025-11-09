import React from 'react';
import { z } from 'zod';
import { t, type TranslationKeys } from '../i18n';

// Base schema for common UI patterns
export const FeaturesItemSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  story: z.string().min(1),
  impact: z.string().min(1)
});

export const FeaturesArraySchema = z.array(FeaturesItemSchema);

export const StatItemSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1)
});

export const StatsArraySchema = z.array(StatItemSchema);

export const TestimonialSchema = z.object({
  name: z.string().min(1),
  content: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1)
});

export const TestimonialsArraySchema = z.array(TestimonialSchema);

export const LinkSchema = z.object({
  href: z.string().url(),
  text: z.string().min(1),
  external: z.boolean().optional()
});

export const NavigationSchema = z.object({
  home: LinkSchema,
  features: LinkSchema,
  pricing: LinkSchema,
  demo: LinkSchema,
  contact: LinkSchema
});

export const SocialLinkSchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  icon: z.string().min(1)
});

export const SocialLinksArraySchema = z.array(SocialLinkSchema);

// Safe wrapper for translation function with schema validation
export function safeT<T>(
  schema: z.ZodType<T>,
  translationKey: string,
  locale?: string
): T | null {
  try {
    const translation = t(translationKey, locale);

    // If translation is missing or empty, return null
    if (!translation || translation === translationKey) {
      console.warn(`[i18n] Missing translation for key: ${translationKey} in locale: ${locale || 'default'}`);
      return null;
    }

    // Try to parse the translation as the expected type
    const result = schema.safeParse(translation);

    if (!result.success) {
      console.warn(`[i18n] Schema validation failed for key: ${translationKey}`, {
        errors: result.error.issues,
        received: translation
      });

      // Return null instead of crashing
      return null;
    }

    return result.data;
  } catch (error) {
    console.error(`[i18n] Error processing translation key: ${translationKey}`, error);
    return null;
  }
}

// Safe array wrapper
export function safeArray<T>(
  schema: z.ZodType<T[]>,
  translationKey: string,
  locale?: string
): T[] {
  try {
    const result = safeT(schema, translationKey, locale);

    if (!result) {
      console.warn(`[i18n] Empty array returned for key: ${translationKey}`);
      return [];
    }

    // Additional check for arrays
    if (!Array.isArray(result)) {
      console.warn(`[i18n] Expected array for key: ${translationKey}, got:`, typeof result);
      return [];
    }

    return result;
  } catch (error) {
    console.error(`[i18n] Error processing array for key: ${translationKey}`, error);
    return [];
  }
}

// Safe object wrapper
export function safeObject<T>(
  schema: z.ZodType<T>,
  translationKey: string,
  locale?: string
): T | null {
  return safeT(schema, translationKey, locale);
}

// Kill switch HOC type definition
export type KillSwitchComponent<T> = React.ComponentType<{ data: T | null }>;

// Translation key type guard
export function isValidTranslationKey(
  key: string,
  translations: TranslationKeys
): key is keyof TranslationKeys {
  return key in translations;
}

// Runtime type checker for translation values
export function validateTranslationStructure(
  translations: TranslationKeys,
  locale: string
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  try {
    // Check for required namespaced keys (new structure)
    const requiredNamespaces = ['common', 'marketing', 'seo', 'legal'];
    requiredNamespaces.forEach(namespace => {
      if (!(namespace in translations)) {
        errors.push(`Missing required namespace: ${namespace}`);
      }
    });

    // Validate common namespace structure
    if (translations.common) {
      const commonKeys = ['navigation', 'footer'];
      commonKeys.forEach(key => {
        if (!translations.common[key as keyof typeof translations.common]) {
          errors.push(`Missing common key: ${key}`);
        }
      });
    }

    // Validate SEO structure
    if (translations.seo) {
      const seoKeys = ['title', 'description'];
      seoKeys.forEach(key => {
        if (!translations.seo[key as keyof typeof translations.seo]) {
          errors.push(`Missing SEO key: ${key}`);
        }
      });
    }

  } catch (error) {
    errors.push(`Error validating ${locale} translations: ${error}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Enhanced error boundary for i18n failures
export class I18nErrorBoundary extends Error {
  constructor(
    message: string,
    public readonly key: string,
    public readonly locale: string,
    public readonly originalError?: Error
  ) {
    super(message);
    this.name = 'I18nError';
  }
}

// Safe translation function that throws structured errors
export function safeTranslate(
  key: string,
  locale?: string,
  fallback?: string
): string {
  try {
    const result = t(key, locale);

    // If translation is missing or same as key, use fallback or key itself
    if (!result || result === key) {
      if (fallback) {
        console.warn(`[i18n] Using fallback for key: ${key}`);
        return fallback;
      }

      console.warn(`[i18n] Missing translation for key: ${key}`);
      return key;
    }

    return result;
  } catch (error) {
    console.error(`[i18n] Error translating key: ${key}`, error);

    if (fallback) {
      return fallback;
    }

    // Throw structured error for better debugging
    throw new I18nErrorBoundary(
      `Translation failed for key: ${key}`,
      key,
      locale || 'unknown',
      error as Error
    );
  }
}
