#!/usr/bin/env node

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  const runnerResult = await lighthouse('http://localhost:3000', options);
  
  // Performance score
  const performanceScore = runnerResult.lhr.categories.performance.score * 100;
  console.log(`Performance Score: ${performanceScore}`);
  
  // Key metrics
  const metrics = runnerResult.lhr.audits;
  console.log(`First Contentful Paint: ${metrics['first-contentful-paint'].displayValue}`);
  console.log(`Largest Contentful Paint: ${metrics['largest-contentful-paint'].displayValue}`);
  console.log(`Cumulative Layout Shift: ${metrics['cumulative-layout-shift'].displayValue}`);
  console.log(`Speed Index: ${metrics['speed-index'].displayValue}`);
  
  // Recommendations
  const opportunities = runnerResult.lhr.categories.performance.auditRefs
    .filter(audit => audit.result && audit.result.score < 0.9)
    .map(audit => ({
      id: audit.id,
      title: audit.result.title,
      score: audit.result.score,
      description: audit.result.description
    }));
  
  console.log('\nOptimization Opportunities:');
  opportunities.forEach(opp => {
    console.log(`- ${opp.title}: ${opp.score * 100}%`);
  });
  
  await chrome.kill();
  return runnerResult;
}

if (require.main === module) {
  runLighthouse().catch(console.error);
}

module.exports = runLighthouse;