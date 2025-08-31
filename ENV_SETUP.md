# Environment Variables Setup for ADMIRERX Contact Form

## 🔧 Required Configuration

To make the contact form work, you need to set up email credentials. Create a `.env.local` file in your project root with one of these options:

### Option 1: Gmail SMTP (Nodemailer Backend)

```bash
# Create .env.local file with these variables:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_TO=devr01499@gmail.com
```

**Setup Steps:**
1. Go to your Gmail account settings
2. Enable 2-factor authentication
3. Generate an "App Password" for this application
4. Use the app password as SMTP_PASS

### Option 2: EmailJS (Frontend Service)

```bash
# Create .env.local file with these variables:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_TO_EMAIL=devr01499@gmail.com
```

**Setup Steps:**
1. Follow the EmailJS setup guide in `EMAILJS_SETUP.md`
2. Get your credentials from EmailJS dashboard
3. Update the variables above

## 🚀 Quick Start

1. **Copy the example above** to a new file called `.env.local`
2. **Fill in your actual credentials**
3. **Restart your development server**: `npm run dev`
4. **Test the contact form** at http://localhost:3000

## ⚠️ Important Notes

- **Choose ONE option** (EmailJS OR Nodemailer), not both
- **EmailJS is simpler** but has monthly limits (200 emails/month free)
- **Nodemailer gives full control** but requires Gmail setup
- **Never commit .env.local** to version control (it's already in .gitignore)

## 🔍 Testing

After setup, test the contact form:
1. Fill out all required fields
2. Select a future appointment date
3. Choose a time slot
4. Submit the form
5. Check your email for confirmation

## 📞 Need Help?

- Check the console for error messages
- Verify your credentials are correct
- Ensure your development server is running
- Check the EmailJS setup guide for detailed instructions
