# AdmirerX Website Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Environment Setup
Create a `.env.local` file in your project root with these variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://admirerx.com

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_n9ihigq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_gkhcy08
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=x9Mlm_5Uv0iRxcxdN
NEXT_PUBLIC_EMAILJS_TO_EMAIL=devr01499@gmail.com
```

### 2. Build and Deploy
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start production server (for testing)
npm start
```

### 3. Vercel Deployment
The project is already configured for Vercel with:
- Node.js 22.x engine
- Automatic deployments from GitHub
- Environment variables configured

### 4. GitHub Repository
- Repository: `devr01499-ui`
- Branch: `main`
- Auto-deploy: Enabled

## 📋 Features Implemented

### ✅ Navigation
- Updated menu items: Home, About Us, Services, Careers, Partner With Us, Contact
- Removed: Case Studies, FAQ
- Smooth scroll navigation

### ✅ Hero Section
- New headline: "AdmirerX — Premium BPO for the Modern Enterprise"
- Sub-headline: "Scalable expertise, global focus, enterprise-grade reliability"
- CTA buttons: "Explore Services" and "Partner With Us"
- High-quality Unsplash image of diverse business professionals

### ✅ Feature Tiles
- 24/7 Multi-Channel Support
- High-Security Operations
- Adaptive Industry Expertise
- Scalable & Flexible Deployment

### ✅ Why Choose Our BPO Services
- Three badges: Expert Teams, Secure Operations, Scalable Solutions
- Updated content and messaging

### ✅ Services Page
- 6 comprehensive service cards with Unsplash images:
  - Customer Support Solutions
  - Data Processing & Back Office
  - Lead Generation & Inside Sales
  - Technical Support / Helpdesk
  - HR & Recruitment Process Outsourcing
  - Custom BPO Solutions

### ✅ Partner With Us Page
- Hero section with partnership messaging
- Why Partner With Us cards (6 benefits)
- How We Work process (4 steps)
- Partnership Benefits statistics
- Partnership inquiry form with EmailJS integration

### ✅ Careers Page
- Hero section with company culture messaging
- Why Work With Us benefits (6 cards)
- Open Positions (6 positions)
- Job application form with EmailJS integration

### ✅ Contact Page
- Updated layout with form and contact information
- Office address, phone numbers, email addresses
- Business hours
- Social media links
- Contact form with EmailJS integration

### ✅ Footer
- Updated with Privacy Policy, Terms of Service, Cookie Policy links
- Copyright notice

## 🔧 Technical Implementation

### EmailJS Integration
- All forms use EmailJS for reliable email delivery
- Service ID: `service_n9ihigq`
- Template ID: `template_gkhcy08`
- Email: `devr01499@gmail.com`

### Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Framer Motion for animations
- Pixel-perfect responsive layouts

### Performance
- Next.js 14 with App Router
- Image optimization with Next.js Image component
- Lazy loading and code splitting
- SEO optimized with proper metadata

## 🎯 Next Steps

1. **Deploy to Vercel**: Push changes to GitHub repository
2. **Test Forms**: Verify EmailJS integration works
3. **Update Domain**: Configure custom domain if needed
4. **Analytics**: Add Google Analytics or similar
5. **SEO**: Submit sitemap to search engines

## 📞 Support

For any deployment issues or questions, contact the development team.
