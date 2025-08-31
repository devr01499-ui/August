// EmailJS Configuration for ADMIRERX Contact Form
// This file contains the setup instructions and configuration for EmailJS

export const EMAILJS_CONFIG = {
  // Environment variables for EmailJS credentials
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_admirerx',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_admirerx_contact',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'x9Mlm_5Uv0iRxcxdN',
  TO_EMAIL: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'devr01499@gmail.com'
}

// EmailJS Template Structure (to be created in EmailJS dashboard):
/*
Template Name: template_admirerx_contact
Template Subject: New Contact Form Submission - ADMIRERX

Template Content:
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from the ADMIRERX website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{from_phone}}
- Message: {{message}}
- Preferred Appointment Date: {{appointment_date}}
- Preferred Time Slot: {{appointment_time}}

Please respond to this inquiry at your earliest convenience.

Best regards,
ADMIRERX Website

Template Variables:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{from_phone}} - Sender's phone number
- {{message}} - Sender's message
- {{appointment_date}} - Preferred appointment date
- {{appointment_time}} - Preferred time slot
- {{reply_to}} - Reply-to email (same as from_email)
*/

// Setup Instructions:
/*
1. Go to https://www.emailjs.com/ and create an account
2. Create a new Email Service:
   - Service Type: Gmail
   - Service Name: service_admirerx
   - Connect your Gmail account (devr01499@gmail.com)

3. Create a new Email Template:
   - Template Name: template_admirerx_contact
   - Use the template content above
   - Set the template variables as shown

4. Get your Public Key:
   - Go to Account > API Keys
   - Copy your Public Key

5. Update the EMAILJS_CONFIG object above with your actual credentials

6. The contact form will automatically send emails to devr01499@gmail.com
*/

export const initializeEmailJS = () => {
  // This function should be called in your app to initialize EmailJS
  // import emailjs from '@emailjs/browser'
  // emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}
