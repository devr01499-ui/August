import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration with proper environment variable names
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'devr01499@gmail.com',
    pass: process.env.SMTP_PASS || '',
  },
  tls: {
    rejectUnauthorized: false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, appointmentDate, appointmentTime } = body

    // Validate required fields
    if (!name || !email || !message || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields. Please fill in all required fields.' 
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid email format. Please enter a valid email address.' 
        },
        { status: 400 }
      )
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { 
          success: false,
          error: 'Email service not configured. Please contact administrator.' 
        },
        { status: 500 }
      )
    }

    // Create transporter with proper error handling
    const transporter = nodemailer.createTransport(emailConfig)

    // Verify SMTP connection
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { 
          success: false,
          error: 'Email service temporarily unavailable. Please try again later.' 
        },
        { status: 500 }
      )
    }

    // Email content for admin notification
    const adminMailOptions = {
      from: `"ADMIRERX Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
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

    // Send email to admin
    await transporter.sendMail(adminMailOptions)
    console.log('Admin notification email sent successfully')

    // Send confirmation email to user
    const userMailOptions = {
      from: `"ADMIRERX" <${process.env.SMTP_USER}>`,
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
    console.log('User confirmation email sent successfully')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request sent successfully! We will confirm your appointment and get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Return specific error messages based on error type
    if (error && typeof error === 'object' && 'code' in error && error.code === 'EAUTH') {
      return NextResponse.json(
        { 
          success: false,
          error: 'Email authentication failed. Please contact administrator.' 
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send appointment request. Please try again or contact us directly.' 
      },
      { status: 500 }
    )
  }
}
