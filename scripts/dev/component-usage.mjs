#!/usr/bin/env node

/**
 * Component Usage Analyzer
 * Finds potentially unused components in the codebase
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '../..');

console.log('🔍 Component Usage Analyzer');
console.log('==========================\n');

// Get all component files
function getComponentFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('dist')) {
        getComponentFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') && !file.endsWith('.test.tsx') && !file.endsWith('.spec.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Extract component name from file
function getComponentName(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for export const ComponentName or export function ComponentName
  const exportMatch = content.match(/export (?:const|function) (\w+)/);
  if (exportMatch) {
    return exportMatch[1];
  }
  
  // Fallback to filename
  return path.basename(filePath, '.tsx');
}

// Search for component usage in all files
function isComponentUsed(componentName, files) {
  const pattern = new RegExp(`<${componentName}[\\s/>]|import.*${componentName}|from.*${componentName}`);
  
  let usageCount = 0;
  const usedIn = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (pattern.test(content)) {
      usageCount++;
      usedIn.push(path.relative(ROOT_DIR, file));
    }
  });
  
  return { usageCount, usedIn };
}

// Get all TypeScript/React files
function getAllTSFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('dist') && !file.includes('.vite')) {
        getAllTSFiles(filePath, fileList);
      }
    } else if ((file.endsWith('.ts') || file.endsWith('.tsx')) && 
               !file.endsWith('.test.ts') && 
               !file.endsWith('.spec.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Analyze components
const componentsDir = path.join(ROOT_DIR, 'src/components');
const componentFiles = getComponentFiles(componentsDir);
const allFiles = getAllTSFiles(path.join(ROOT_DIR, 'src'));

console.log(`📦 Found ${componentFiles.length} component files`);
console.log(`📄 Searching in ${allFiles.length} source files\n`);

const unusedComponents = [];
const underusedComponents = [];

componentFiles.forEach(componentFile => {
  const componentName = getComponentName(componentFile);
  const { usageCount, usedIn } = isComponentUsed(componentName, allFiles);
  
  const relativePath = path.relative(ROOT_DIR, componentFile);
  
  // Consider component in its own file as 1 usage
  const externalUsage = usageCount - 1;
  
  if (externalUsage === 0) {
    unusedComponents.push({ name: componentName, path: relativePath });
  } else if (externalUsage === 1) {
    underusedComponents.push({ name: componentName, path: relativePath, usedIn: usedIn.filter(f => f !== relativePath) });
  }
});

// Report results
if (unusedComponents.length > 0) {
  console.log(`❌ Potentially Unused Components (${unusedComponents.length}):\n`);
  unusedComponents.forEach(({ name, path }) => {
    console.log(`   ${name}`);
    console.log(`   └─ ${path}\n`);
  });
} else {
  console.log('✅ No unused components detected!\n');
}

if (underusedComponents.length > 0) {
  console.log(`⚠️  Underused Components (${underusedComponents.length}) - used in only 1 place:\n`);
  underusedComponents.forEach(({ name, path, usedIn }) => {
    console.log(`   ${name}`);
    console.log(`   └─ ${path}`);
    console.log(`   └─ Used in: ${usedIn.join(', ')}\n`);
  });
}

console.log('\n📊 Summary:');
console.log(`   Total components: ${componentFiles.length}`);
console.log(`   Unused: ${unusedComponents.length}`);
console.log(`   Underused: ${underusedComponents.length}`);
console.log(`   Well-used: ${componentFiles.length - unusedComponents.length - underusedComponents.length}`);

console.log('\n✨ Analysis complete!');

