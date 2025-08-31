# Environment Variables Template for ADMIRERX

## 🚀 Production Environment (.env.local)

Create a file called `.env.local` in your project root with these variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://admirerx.com

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_n9ihigq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_gkhcy08
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=x9Mlm_5Uv0iRxcxdN
NEXT_PUBLIC_EMAILJS_TO_EMAIL=devr01499@gmail.com
```

## 🔧 Development Environment (.env.development.local)

For local development, you can also create `.env.development.local`:

```bash
# Development Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# EmailJS Configuration (same as production)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_n9ihigq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_gkhcy08
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=x9Mlm_5Uv0iRxcxdN
NEXT_PUBLIC_EMAILJS_TO_EMAIL=devr01499@gmail.com
```

## 📝 Setup Instructions

1. **Copy the production template** above
2. **Create `.env.local`** file in your project root
3. **Paste the configuration** and save
4. **Restart your development server**: `npm run dev`

## ⚠️ Important Notes

- **Never commit** `.env.local` to version control
- **Use HTTPS URLs** in production
- **Test EmailJS** before deploying
- **Update site URL** when you have your actual domain

## 🧪 Testing

After setup, test the contact form:
1. Fill out all required fields
2. Submit the form
3. Check your email (devr01499@gmail.com)
4. Verify EmailJS dashboard shows successful sends
