#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Performance Testing...\n');

// Function to run command and return output
function runCommand(command, description) {
  console.log(`📊 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return output;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

// Function to check bundle size
function checkBundleSize() {
  console.log('\n📦 Checking Bundle Size...');
  
  const buildDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(buildDir)) {
    console.log('❌ Build directory not found. Please run "npm run build" first.');
    return;
  }

  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    const files = fs.readdirSync(staticDir, { recursive: true });
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(staticDir, file);
      if (fs.statSync(filePath).isFile()) {
        totalSize += fs.statSync(filePath).size;
      }
    });
    
    const sizeInKB = (totalSize / 1024).toFixed(2);
    const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
    
    console.log(`📊 Total bundle size: ${sizeInKB} KB (${sizeInMB} MB)`);
    
    if (totalSize > 500 * 1024) { // 500KB
      console.log('⚠️  Bundle size is larger than recommended (500KB)');
    } else {
      console.log('✅ Bundle size is within recommended limits');
    }
  }
}

// Function to check image optimization
function checkImageOptimization() {
  console.log('\n🖼️  Checking Image Optimization...');
  
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    console.log('❌ Images directory not found');
    return;
  }

  const images = fs.readdirSync(imagesDir);
  let totalImageSize = 0;
  let optimizedImages = 0;

  images.forEach(image => {
    const imagePath = path.join(imagesDir, image);
    const stats = fs.statSync(imagePath);
    totalImageSize += stats.size;
    
    if (image.endsWith('.webp') || image.endsWith('.avif')) {
      optimizedImages++;
    }
  });

  const sizeInKB = (totalImageSize / 1024).toFixed(2);
  console.log(`📊 Total image size: ${sizeInKB} KB`);
  console.log(`📊 Optimized images: ${optimizedImages}/${images.length}`);
  
  if (optimizedImages / images.length < 0.5) {
    console.log('⚠️  Consider converting more images to WebP/AVIF format');
  } else {
    console.log('✅ Good image optimization');
  }
}

// Function to check CSS optimization
function checkCSSOptimization() {
  console.log('\n🎨 Checking CSS Optimization...');
  
  const buildDir = path.join(process.cwd(), '.next');
  const cssFiles = [];
  
  function findCSSFiles(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        findCSSFiles(filePath);
      } else if (file.endsWith('.css')) {
        cssFiles.push(filePath);
      }
    });
  }
  
  findCSSFiles(buildDir);
  
  let totalCSSSize = 0;
  cssFiles.forEach(file => {
    totalCSSSize += fs.statSync(file).size;
  });
  
  const sizeInKB = (totalCSSSize / 1024).toFixed(2);
  console.log(`📊 Total CSS size: ${sizeInKB} KB`);
  
  if (totalCSSSize > 100 * 1024) { // 100KB
    console.log('⚠️  CSS size is larger than recommended (100KB)');
  } else {
    console.log('✅ CSS size is within recommended limits');
  }
}

// Main execution
async function main() {
  console.log('🔍 Performance Analysis Report\n');
  console.log('=' .repeat(50));
  
  // Check if build exists
  if (!fs.existsSync(path.join(process.cwd(), '.next'))) {
    console.log('📦 Building project first...');
    runCommand('npm run build', 'Building project');
  }
  
  // Run performance checks
  checkBundleSize();
  checkImageOptimization();
  checkCSSOptimization();
  
  // Run Lighthouse if available
  console.log('\n🔍 Running Lighthouse audit...');
  const lighthouseResult = runCommand(
    'npx lighthouse http://localhost:3000 --output json --output-path ./lighthouse-report.json --chrome-flags="--headless"',
    'Lighthouse audit'
  );
  
  if (lighthouseResult) {
    try {
      const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));
      const scores = report.categories;
      
      console.log('\n📊 Lighthouse Scores:');
      Object.keys(scores).forEach(category => {
        const score = Math.round(scores[category].score * 100);
        const emoji = score >= 90 ? '🟢' : score >= 50 ? '🟡' : '🔴';
        console.log(`${emoji} ${scores[category].title}: ${score}/100`);
      });
      
      // Check Core Web Vitals
      const audits = report.audits;
      console.log('\n⚡ Core Web Vitals:');
      
      const fcp = audits['first-contentful-paint'];
      const lcp = audits['largest-contentful-paint'];
      const fid = audits['max-potential-fid'];
      const cls = audits['cumulative-layout-shift'];
      
      if (fcp) console.log(`📊 First Contentful Paint: ${fcp.displayValue}`);
      if (lcp) console.log(`📊 Largest Contentful Paint: ${lcp.displayValue}`);
      if (fid) console.log(`📊 Max Potential FID: ${fid.displayValue}`);
      if (cls) console.log(`📊 Cumulative Layout Shift: ${cls.displayValue}`);
      
    } catch (error) {
      console.log('❌ Could not parse Lighthouse report');
    }
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log('✅ Performance analysis completed!');
  console.log('\n💡 Recommendations:');
  console.log('• Use WebP/AVIF images for better compression');
  console.log('• Implement lazy loading for below-the-fold content');
  console.log('• Use code splitting for non-critical components');
  console.log('• Optimize animations with GPU acceleration');
  console.log('• Implement service worker for caching');
}

main().catch(console.error);
