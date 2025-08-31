import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'devr01499@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD,
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, appointmentDate, appointmentTime } = body

    // Validate required fields
    if (!name || !email || !message || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig)

    // Email content
    const mailOptions = {
      from: `"ADMIRERX Website" <${emailConfig.auth.user}>`,
      to: emailConfig.auth.user,
      replyTo: email,
      subject: `New Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Appointment Request - ADMIRERX</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Appointment Details</h3>
            <p><strong>Preferred Date:</strong> ${appointmentDate}</p>
            <p><strong>Preferred Time:</strong> ${appointmentTime} IST</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the ADMIRERX website contact form.<br>
              Please respond to this inquiry at your earliest convenience.
            </p>
          </div>
        </div>
      `,
      text: `
New Appointment Request - ADMIRERX

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Appointment Details:
- Preferred Date: ${appointmentDate}
- Preferred Time: ${appointmentTime} IST

Message:
${message}

This message was sent from the ADMIRERX website contact form.
Please respond to this inquiry at your earliest convenience.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user
    const userMailOptions = {
      from: `"ADMIRERX" <${emailConfig.auth.user}>`,
      to: email,
      subject: 'Appointment Request Received - ADMIRERX',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">Thank you for your appointment request!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your appointment request and will get back to you shortly to confirm your appointment.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Request Details</h3>
            <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
            <p><strong>Preferred Time:</strong> ${appointmentTime} IST</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>We will contact you within 24 hours to confirm your appointment and discuss your requirements.</p>
          
          <p>Best regards,<br>The ADMIRERX Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(userMailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request sent successfully! We will confirm your appointment and get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send appointment request. Please try again or contact us directly.' 
      },
      { status: 500 }
    )
  }
}
