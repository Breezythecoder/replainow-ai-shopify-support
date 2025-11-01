#!/usr/bin/env node

/**
 * Pre-commit Quality Checks
 * Runs essential checks before commits to ensure code quality
 */

import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

console.log('🔍 Pre-commit Quality Checks');
console.log('===========================\n');

let allChecksPassed = true;

// Helper function to log results
const logResult = (check, passed, message) => {
  const icon = passed ? '✅' : '❌';
  console.log(`${icon} ${check}: ${message}`);
  
  if (!passed) {
    allChecksPassed = false;
  }
};

// 1. TypeScript Type Checking
const checkTypeScript = () => {
  console.log('📝 TypeScript Checks:');
  console.log('---------------------');
  
  try {
    execSync('npm run typecheck', { stdio: 'pipe' });
    logResult('TypeScript Types', true, 'No type errors found');
  } catch (error) {
    logResult('TypeScript Types', false, 'Type errors detected');
    console.log('TypeScript errors:');
    console.log(error.stdout.toString());
  }
};

// 2. ESLint Checks
const checkESLint = () => {
  console.log('\n🔍 ESLint Checks:');
  console.log('-----------------');
  
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    logResult('ESLint', true, 'No linting errors found');
  } catch (error) {
    logResult('ESLint', false, 'Linting errors detected');
    console.log('ESLint errors:');
    console.log(error.stdout.toString());
  }
};

// 3. Build Verification
const checkBuild = () => {
  console.log('\n🏗️ Build Verification:');
  console.log('----------------------');
  
  try {
    execSync('npm run build', { stdio: 'pipe' });
    logResult('Build Process', true, 'Build completed successfully');
  } catch (error) {
    logResult('Build Process', false, 'Build failed');
    console.log('Build errors:');
    console.log(error.stdout.toString());
  }
};

// 4. Critical File Checks
const checkCriticalFiles = () => {
  console.log('\n📁 Critical File Checks:');
  console.log('------------------------');
  
  const criticalFiles = [
    'src/App.tsx',
    'src/main.tsx',
    'index.html',
    'vite.config.ts',
    'package.json'
  ];
  
  criticalFiles.forEach(file => {
    const exists = existsSync(file);
    logResult(`File: ${file}`, exists, exists ? 'Present' : 'Missing');
  });
};

// 5. Configuration Validation
const checkConfiguration = () => {
  console.log('\n⚙️ Configuration Validation:');
  console.log('----------------------------');
  
  // Check package.json
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    const hasBuildScript = packageJson.scripts && packageJson.scripts.build;
    const hasDevScript = packageJson.scripts && packageJson.scripts.dev;
    
    logResult('Package.json Build Script', hasBuildScript, hasBuildScript ? 'Present' : 'Missing');
    logResult('Package.json Dev Script', hasDevScript, hasDevScript ? 'Present' : 'Missing');
  } catch (error) {
    logResult('Package.json', false, 'Invalid JSON');
  }
  
  // Check vite.config.ts syntax
  try {
    const viteConfig = readFileSync('vite.config.ts', 'utf8');
    const hasBaseConfig = viteConfig.includes('base:');
    const hasBuildConfig = viteConfig.includes('build:');
    
    logResult('Vite Base Config', hasBaseConfig, hasBaseConfig ? 'Present' : 'Missing');
    logResult('Vite Build Config', hasBuildConfig, hasBuildConfig ? 'Present' : 'Missing');
  } catch (error) {
    logResult('Vite Config', false, 'File not found or invalid');
  }
};

// 6. Security Checks
const checkSecurity = () => {
  console.log('\n🔒 Security Checks:');
  console.log('-------------------');
  
  // Check for sensitive data in source files
  const sensitivePatterns = [
    /password\s*=\s*["'][^"']+["']/i,
    /api[_-]?key\s*=\s*["'][^"']+["']/i,
    /secret\s*=\s*["'][^"']+["']/i,
    /token\s*=\s*["'][^"']+["']/i
  ];
  
  let foundSensitive = false;
  
  try {
    const files = ['src/App.tsx', 'src/main.tsx', 'index.html'];
    files.forEach(file => {
      if (existsSync(file)) {
        const content = readFileSync(file, 'utf8');
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            foundSensitive = true;
            console.log(`  ⚠️ Potential sensitive data in ${file}`);
          }
        });
      }
    });
    
    logResult('Sensitive Data', !foundSensitive, foundSensitive ? 'Potential sensitive data found' : 'No sensitive data detected');
  } catch (error) {
    logResult('Security Check', false, 'Security check failed');
  }
};

// 7. Dependencies Check
const checkDependencies = () => {
  console.log('\n📦 Dependencies Check:');
  console.log('----------------------');
  
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    logResult('Dependencies Count', dependencies.length > 0, `${dependencies.length} production dependencies`);
    logResult('Dev Dependencies Count', devDependencies.length > 0, `${devDependencies.length} dev dependencies`);
    
    // Check for critical dependencies
    const criticalDeps = ['react', 'react-dom', 'vite'];
    const missingCritical = criticalDeps.filter(dep => !dependencies.includes(dep));
    
    logResult('Critical Dependencies', missingCritical.length === 0, 
      missingCritical.length === 0 ? 'All critical deps present' : `Missing: ${missingCritical.join(', ')}`);
    
  } catch (error) {
    logResult('Dependencies Check', false, 'Failed to parse package.json');
  }
};

// Main execution
const runPreCommitChecks = () => {
  try {
    checkCriticalFiles();
    checkConfiguration();
    checkSecurity();
    checkDependencies();
    checkTypeScript();
    checkESLint();
    checkBuild();
    
    console.log('\n🎯 Pre-commit Summary:');
    console.log('======================');
    
    if (allChecksPassed) {
      console.log('🎉 ALL PRE-COMMIT CHECKS PASSED!');
      console.log('\n✅ Critical files present');
      console.log('✅ Configuration valid');
      console.log('✅ Security checks passed');
      console.log('✅ Dependencies verified');
      console.log('✅ TypeScript types valid');
      console.log('✅ ESLint rules satisfied');
      console.log('✅ Build process working');
      
      console.log('\n🚀 Ready to commit!');
      process.exit(0);
    } else {
      console.log('❌ PRE-COMMIT CHECKS FAILED');
      console.log('\nPlease fix the issues above before committing.');
      console.log('💡 Tip: Run "npm run lint" and "npm run typecheck" to see detailed errors');
      
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Pre-commit checks failed:', error.message);
    process.exit(1);
  }
};

runPreCommitChecks();
