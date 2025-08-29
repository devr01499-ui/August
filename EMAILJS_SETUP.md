# EmailJS Setup Guide for ADMIRERX Website

This guide will help you set up EmailJS to enable the contact form functionality on your ADMIRERX website.

## 🎯 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your website's contact form without requiring a backend server. It's perfect for static websites and provides a seamless user experience.

## 📋 Prerequisites

- A Gmail account (devr01499@gmail.com)
- Access to the EmailJS dashboard
- Basic understanding of web development

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. **Visit EmailJS Website**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Click "Sign Up" or "Get Started"

2. **Create Account**
   - Choose the **FREE** plan (allows 200 emails/month)
   - Fill in your details
   - Verify your email address

### Step 2: Create Email Service

1. **Navigate to Email Services**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"

2. **Configure Gmail Service**
   - **Service Type**: Gmail
   - **Service Name**: `service_admirerx`
   - **Gmail Account**: Connect your Gmail account (devr01499@gmail.com)
   - **Description**: ADMIRERX Contact Form Service

3. **Connect Gmail**
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail
   - Complete the OAuth process

### Step 3: Create Email Template

1. **Navigate to Email Templates**
   - In your EmailJS dashboard, go to "Email Templates"
   - Click "Create New Template"

2. **Template Configuration**
   - **Template Name**: `template_admirerx_contact`
   - **Subject**: `New Contact Form Submission from {{from_name}}`

3. **Template Content**
   Copy and paste this content:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            New Contact Form Submission - ADMIRERX
        </h2>
        
        <p>Hello,</p>
        
        <p>You have received a new contact form submission from the ADMIRERX website.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #22c55e;">Contact Details:</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Name:</strong> {{from_name}}</li>
                <li style="margin-bottom: 10px;"><strong>Email:</strong> {{from_email}}</li>
                <li style="margin-bottom: 10px;"><strong>Phone:</strong> {{from_phone}}</li>
                <li style="margin-bottom: 10px;"><strong>Message:</strong></li>
            </ul>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #22c55e;">
                {{message}}
            </div>
        </div>
        
        <p>Please respond to this inquiry at your earliest convenience.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #666; font-size: 14px;">
                Best regards,<br>
                <strong>ADMIRERX Website</strong><br>
                <em>This email was sent automatically from your website contact form.</em>
            </p>
        </div>
    </div>
</body>
</html>
```

4. **Save Template**
   - Click "Save" to create the template

### Step 4: Get API Keys

1. **Navigate to API Keys**
   - In your EmailJS dashboard, go to "Account" → "API Keys"

2. **Copy Public Key**
   - Copy your **Public Key** (starts with "user_")
   - Keep this key secure but it's safe to use in frontend code

### Step 5: Update Website Configuration

1. **Update EmailJS Config File**
   - Open `lib/emailjs-config.ts` in your project
   - Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_admirerx', // Your service name
  TEMPLATE_ID: 'template_admirerx_contact', // Your template name
  PUBLIC_KEY: 'user_your_actual_public_key_here', // Your public key
  TO_EMAIL: 'devr01499@gmail.com'
}
```

2. **Test the Configuration**
   - Run your development server: `npm run dev`
   - Fill out the contact form
   - Submit and check if you receive the email

## 🔧 Troubleshooting

### Common Issues

1. **"Service not found" Error**
   - Double-check your service name in EmailJS dashboard
   - Ensure the service is properly connected to Gmail

2. **"Template not found" Error**
   - Verify the template name matches exactly
   - Check that the template is saved and active

3. **"Public key invalid" Error**
   - Copy the public key again from EmailJS dashboard
   - Ensure there are no extra spaces or characters

4. **Emails not being sent**
   - Check browser console for JavaScript errors
   - Verify Gmail account permissions
   - Check EmailJS dashboard for any error logs

### Testing Your Setup

1. **Development Testing**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Fill out the contact form
   - Submit and check your email

2. **Production Testing**
   - Deploy your website
   - Test the contact form on the live site
   - Verify emails are received

## 📊 EmailJS Limits

### Free Plan
- **200 emails per month**
- **2 email services**
- **5 email templates**
- **Basic support**

### Paid Plans
- **Starter**: $15/month - 1,000 emails
- **Professional**: $35/month - 5,000 emails
- **Enterprise**: Custom pricing

## 🔒 Security Considerations

1. **Public Key Safety**
   - The public key is safe to use in frontend code
   - It only allows sending emails through your configured service

2. **Rate Limiting**
   - EmailJS has built-in rate limiting
   - Free plan: 200 emails/month
   - Consider upgrading for higher volume

3. **Spam Protection**
   - EmailJS includes spam protection
   - Monitor your dashboard for any flagged emails

## 📞 Support

If you encounter issues:

1. **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **EmailJS Support**: Contact through their dashboard
3. **Community**: Check EmailJS community forums

## ✅ Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Copied public key
- [ ] Updated configuration file
- [ ] Tested contact form
- [ ] Verified email delivery
- [ ] Deployed to production
- [ ] Tested production contact form

---

**Your contact form is now ready to send emails to devr01499@gmail.com! 🎉**
