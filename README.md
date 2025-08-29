# ADMIRERX - Business Website

A modern, responsive single-page business website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a contact form integrated with EmailJS for seamless communication.

## 🚀 Features

- **Modern Design**: Clean, professional corporate style with green accent colors
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: EmailJS integration for direct email communication
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Production Ready**: Deploy-ready with Vercel/Netlify

## 📋 Sections

1. **Top Bar**: ADMIRERX logo with navigation menu
2. **Hero Section**: Eye-catching hero with call-to-action
3. **About Section**: Company information with business meeting image
4. **Services Section**: Three service cards (Customer Support, IT Solutions, Data Entry)
5. **Contact Form**: EmailJS integrated contact form
6. **Footer**: Links and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Language**: TypeScript
- **Deployment**: Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd admirerx-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (Required for contact form)
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Create a new Email Service (Gmail recommended)
   - Create an email template (see EmailJS setup below)
   - Get your Public Key from Account > API Keys

4. **Configure EmailJS**
   - Update `lib/emailjs-config.ts` with your credentials
   - Or update the ContactSection component directly

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

### Step 1: Create EmailJS Account
1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose "Gmail" as service type
4. Name: `service_admirerx`
5. Connect your Gmail account (devr01499@gmail.com)

### Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Template Name: `template_admirerx_contact`
4. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from the ADMIRERX website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{from_phone}}
- Message: {{message}}

Please respond to this inquiry at your earliest convenience.

Best regards,
ADMIRERX Website
```

### Step 4: Get API Keys
1. Go to Account > API Keys
2. Copy your Public Key

### Step 5: Update Configuration
Update the following files with your EmailJS credentials:

**Option 1: Update lib/emailjs-config.ts**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
  TO_EMAIL: 'devr01499@gmail.com'
}
```

**Option 2: Update ContactSection component directly**
```typescript
const result = await emailjs.send(
  'your_service_id',
  'your_template_id',
  templateParams,
  'your_public_key'
)
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain
   - Update DNS settings as instructed

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com/)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#22c55e', // Main green color
    600: '#16a34a', // Darker green
    700: '#15803d', // Even darker green
  }
}
```

### Content
- Update text content in respective component files
- Replace images with your own (update URLs in components)
- Modify contact information in Footer and ContactSection

### Styling
- All styles use Tailwind CSS classes
- Custom styles can be added to `app/globals.css`
- Component-specific styles are in the respective component files

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project Structure

```
admirerx-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── TopBar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Hero section
│   ├── AboutSection.tsx  # About section
│   ├── ServicesSection.tsx # Services section
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx        # Footer
├── lib/                   # Utility functions
│   └── emailjs-config.ts # EmailJS configuration
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 📞 Support

For support or questions:
- Email: devr01499@gmail.com
- Create an issue in the GitHub repository

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

- **Web Design**: B12
- **Images**: Unsplash
- **Icons**: Heroicons (via Tailwind CSS)
- **Fonts**: Inter (Google Fonts)

---

**Built with ❤️ for ADMIRERX**
