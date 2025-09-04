# AdmirerX Project Fix Script
# Run this script as Administrator to fix OneDrive and dependency issues

Write-Host "🚀 AdmirerX Project Fix Script" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ This script must be run as Administrator" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Check current Node.js version
Write-Host "📋 Checking Node.js version..." -ForegroundColor Blue
try {
    $nodeVersion = node --version
    Write-Host "Current Node.js version: $nodeVersion" -ForegroundColor Yellow
    
    if ($nodeVersion -like "v22*") {
        Write-Host "❌ Node.js 22.x detected - incompatible with this project" -ForegroundColor Red
        Write-Host "Please install Node.js 18.x LTS from: https://nodejs.org/" -ForegroundColor Yellow
        Write-Host "Or use NVM for Windows to switch versions" -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit
    }
    
    if ($nodeVersion -like "v18*") {
        Write-Host "✅ Node.js 18.x detected - compatible!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Unknown Node.js version - proceed with caution" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Node.js not found or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js 18.x LTS from: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Check if project is in OneDrive
$currentPath = Get-Location
if ($currentPath -like "*OneDrive*") {
    Write-Host "❌ Project is in OneDrive folder - this will cause permission issues" -ForegroundColor Red
    Write-Host "Current path: $currentPath" -ForegroundColor Yellow
    
    $safePath = "C:\Projects\admirerx-website"
    Write-Host "Moving project to: $safePath" -ForegroundColor Blue
    
    # Create safe directory
    if (!(Test-Path "C:\Projects")) {
        New-Item -ItemType Directory -Path "C:\Projects" -Force
    }
    
    # Copy project to safe location
    try {
        Copy-Item -Path $currentPath -Destination $safePath -Recurse -Force
        Write-Host "✅ Project copied to safe location" -ForegroundColor Green
        Write-Host "Please navigate to: $safePath" -ForegroundColor Blue
        Write-Host "Then run this script again" -ForegroundColor Blue
        Read-Host "Press Enter to exit"
        exit
    } catch {
        Write-Host "❌ Failed to copy project" -ForegroundColor Red
        Write-Host "Please manually move the project to: $safePath" -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit
    }
} else {
    Write-Host "✅ Project is in safe location (not OneDrive)" -ForegroundColor Green
}

# Check if package.json exists
if (!(Test-Path "package.json")) {
    Write-Host "❌ package.json not found" -ForegroundColor Red
    Write-Host "Please ensure you're in the correct project directory" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Check if node_modules exists
if (Test-Path "node_modules") {
    Write-Host "🗑️  Removing existing node_modules..." -ForegroundColor Blue
    try {
        Remove-Item -Path "node_modules" -Recurse -Force
        Write-Host "✅ node_modules removed" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to remove node_modules" -ForegroundColor Red
        Write-Host "Please close any applications using these files and try again" -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit
    }
}

# Check if package-lock.json exists
if (Test-Path "package-lock.json") {
    Write-Host "🗑️  Removing package-lock.json..." -ForegroundColor Blue
    try {
        Remove-Item -Path "package-lock.json" -Force
        Write-Host "✅ package-lock.json removed" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Could not remove package-lock.json - continuing anyway" -ForegroundColor Yellow
    }
}

# Clean npm cache
Write-Host "🧹 Cleaning npm cache..." -ForegroundColor Blue
try {
    npm cache clean --force
    Write-Host "✅ npm cache cleaned" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Could not clean npm cache - continuing anyway" -ForegroundColor Yellow
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
try {
    npm install
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    Write-Host "Please check your internet connection and try again" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Test if Next.js is working
Write-Host "🧪 Testing Next.js installation..." -ForegroundColor Blue
try {
    $nextVersion = npx next --version
    Write-Host "✅ Next.js version: $nextVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Next.js not working properly" -ForegroundColor Red
    Write-Host "Please run: npm run fix:env" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Write-Host ""
Write-Host "🎉 Project fixed successfully!" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Blue
Write-Host "1. Run: npm run dev" -ForegroundColor White
Write-Host "2. Open: http://localhost:3000" -ForegroundColor White
Write-Host "3. Verify the AdmirerX website loads correctly" -ForegroundColor White
Write-Host ""
Write-Host "If you encounter any issues, run: npm run fix:env" -ForegroundColor Yellow

Read-Host "Press Enter to exit"
