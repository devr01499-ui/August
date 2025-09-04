# AdmirerX Website - Environment Setup Guide

## 🚨 **CRITICAL: OneDrive Issues**
This project **MUST NOT** be run from a OneDrive folder due to file permission conflicts with Node.js.

**Move the project to:** `C:\Projects\admirerx-website` or any non-OneDrive location.

## 📋 **Prerequisites**

### 1. Node.js Version
- **Required:** Node.js 18.x (LTS)
- **Current:** You have Node.js 22.18.0 (incompatible)
- **Solution:** Install Node.js 18.x

### 2. Install Node.js 18.x

#### Option A: Using NVM for Windows (Recommended)
```powershell
# Install NVM for Windows from: https://github.com/coreybutler/nvm-windows/releases
# Then run:
nvm install 18.19.0
nvm use 18.19.0
nvm list
```

#### Option B: Direct Installer
1. Download Node.js 18.x LTS from: https://nodejs.org/
2. Uninstall current Node.js 22.x
3. Install Node.js 18.x
4. Restart terminal

### 3. Verify Node.js Version
```powershell
node --version
# Should show: v18.x.x
npm --version
# Should show: 8.x.x or 9.x.x
```

## 🛠️ **Project Setup**

### 1. Move Project Out of OneDrive
```powershell
# Copy project to safe location
Copy-Item -Path "C:\Users\Rohit Kumar Sha\OneDrive\Desktop\21 august" -Destination "C:\Projects\admirerx-website" -Recurse

# Navigate to new location
cd C:\Projects\admirerx-website
```

### 2. Clean Install Dependencies
```powershell
# Run the fix script (cleans everything and reinstalls)
npm run fix:env
```

**What this script does:**
- Removes `node_modules` folder
- Deletes `package-lock.json`
- Cleans npm cache
- Fresh install of all dependencies

### 3. Start Development Server
```powershell
npm run dev
```

**Expected output:**
```
> admirerx-website@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

## 🌐 **Access Website**
Open your browser and go to: **http://localhost:3000**

## 🔧 **Troubleshooting**

### Issue: "next is not recognized"
```powershell
# Solution: Clean reinstall
npm run fix:env
```

### Issue: EBADENGINE warnings
```powershell
# Solution: Use correct Node.js version
nvm use 18.19.0
# or reinstall Node.js 18.x
```

### Issue: EPERM unlink errors
```powershell
# Solution: Move project out of OneDrive
# Then run:
npm run fix:env
```

### Issue: Port 3000 already in use
```powershell
# Kill process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## 📁 **Project Structure**
```
admirerx-website/
├── app/                    # Next.js 14 app directory
├── components/            # React components
├── public/               # Static assets
├── package.json          # Dependencies & scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
└── ENV_SETUP.md         # This file
```

## ✅ **Verification Checklist**

- [ ] Project moved out of OneDrive
- [ ] Node.js 18.x installed and active
- [ ] `npm run fix:env` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Website loads on http://localhost:3000
- [ ] No EBADENGINE warnings
- [ ] No EPERM errors

## 🚀 **Production Deployment**
After local testing, deploy to Vercel:
```powershell
npm run build
vercel --prod
```

## 📞 **Support**
If you encounter issues:
1. Ensure you're using Node.js 18.x
2. Project is NOT in OneDrive
3. Run `npm run fix:env`
4. Check the troubleshooting section above

---
**Last Updated:** $(Get-Date -Format "yyyy-MM-dd")
**Node.js Version:** 18.x LTS
**Next.js Version:** 14.2.32
