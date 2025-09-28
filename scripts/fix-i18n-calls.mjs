#!/usr/bin/env node

/**
 * Fix i18n calls - Remove manual locale parameters
 * Automatically converts t(key, locale) to t(key)
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixI18nCalls() {
  console.log('🔧 Fixing i18n calls...');
  
  // Find all TypeScript files in components/marketing
  const files = await glob('src/components/marketing/**/*.tsx');
  
  let totalFixed = 0;
  
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let fixed = false;
    
    // Remove manual locale parameters from t() calls
    const originalContent = content;
    content = content.replace(/t\(([^)]+),\s*locale\)/g, 't($1)');
    
    // Remove locale variable declarations
    content = content.replace(/const\s+locale\s*=\s*getLocaleFromPath\([^)]+\);\s*\n?/g, '');
    content = content.replace(/import\s*{\s*t,\s*getLocaleFromPath\s*}\s*from\s*["']@\/i18n["'];\s*\n?/g, 'import { t } from "@/i18n";\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixed = true;
      totalFixed++;
    }
  }
  
  console.log(`\n🎉 Fixed ${totalFixed} files`);
}

fixI18nCalls().catch(console.error);
