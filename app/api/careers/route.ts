import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import axios from 'axios'
import FormData from 'form-data'

// Configuration
const GMAIL_USER = process.env.GMAIL_USER || 'devr01499@gmail.com'
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || 'dtgx rton ntaq gwqf'
const CAREERS_BOT_TOKEN = '8460992738:AAFmr_uMHDOel05joM-GsVsLxjn8Q-0EuKw'
const CAREERS_BOT_CHAT_ID = process.env.CAREERS_BOT_CHAT_ID || 'YOUR_CAREERS_CHAT_ID'
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwuG8VrTHObnNCzK6XshkWDvFXLWZNfwpt6z9maJxC56nmt7rR7sCIlrocqCtl6_nfWiA/exec'

// Resume ID counter (in production, use database)
let resumeCounter = 1

function generateResumeId() {
  const year = new Date().getFullYear()
  const id = resumeCounter.toString().padStart(4, '0')
  resumeCounter++
  return `CAREER-${year}-${id}`
}

async function uploadCVToTelegram(cvFile: File, resumeId: string, candidateData: any) {
  try {
    const { fullName, role, email, phone } = candidateData
    
    const caption = `Resume ID: ${resumeId}
Name: ${fullName}
Role Applied For: ${role}
Email: ${email}
Phone: ${phone}`

    const formData = new FormData()
    formData.append('chat_id', CAREERS_BOT_CHAT_ID)
    formData.append('document', cvFile, {
      filename: `${resumeId}_${fullName.replace(/\s+/g, '_')}.pdf`,
      contentType: cvFile.type
    })
    formData.append('caption', caption)

    const response = await axios.post(
      `https://api.telegram.org/bot${CAREERS_BOT_TOKEN}/sendDocument`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    )

    console.log('✅ CV uploaded to Telegram successfully')
    return { success: true, data: response.data }
  } catch (error: any) {
    console.error('❌ Error uploading CV to Telegram:', error.response?.data || error.message)
    return { success: false, error: error.message }
  }
}

async function appendToCareersGoogleSheet(careersData: any) {
  try {
    const { resumeId, fullName, email, phone, role, coverLetter, submissionTime } = careersData
    
    const data = {
      resumeId,
      fullName,
      email,
      phone,
      role,
      coverLetter,
      submissionTime
    }

    const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('✅ Careers data appended to Google Sheet successfully')
    return { success: true, data: response.data }
  } catch (error: any) {
    console.error('❌ Error appending careers data to Google Sheet:', error.response?.data || error.message)
    return { success: false, error: error.message }
  }
}

async function sendCareersEmailNotification(careersData: any) {
  try {
    const { resumeId, fullName, email, phone, role, coverLetter, submissionTime } = careersData
    
    const emailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    })
    
    const emailSubject = `New Career Application - ${resumeId}`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">📄 New Career Application</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Resume ID: ${resumeId}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Application Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📄 Resume ID:</strong>
              <span style="margin-left: 10px; color: #333; font-weight: bold;">${resumeId}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">👤 Full Name:</strong>
              <span style="margin-left: 10px; color: #333;">${fullName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📧 Email:</strong>
              <span style="margin-left: 10px; color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📞 Phone:</strong>
              <span style="margin-left: 10px; color: #333;">${phone}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">💼 Role Applied For:</strong>
              <span style="margin-left: 10px; color: #333;">${role}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">💬 Cover Letter:</strong>
              <div style="margin-top: 8px; padding: 15px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                ${coverLetter.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="border-top: 1px solid #e1e5e9; padding-top: 15px; color: #666; font-size: 14px;">
              <strong>🕒 Submission Time:</strong> ${submissionTime}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
              <strong style="color: #1976d2;">📎 CV File:</strong> Check Telegram bot for the uploaded CV file.
            </div>
          </div>
        </div>
      </div>
    `

    const mailOptions = {
      from: `"AdmirerX Careers" <${GMAIL_USER}>`,
      to: GMAIL_USER, // Send to devr01499@gmail.com as specified
      subject: emailSubject,
      html: emailHtml
    }

    const response = await emailTransporter.sendMail(mailOptions)
    console.log('✅ Careers email notification sent successfully')
    return { success: true, data: response }
  } catch (error: any) {
    console.error('❌ Error sending careers email notification:', error.message)
    return { success: false, error: error.message }
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const role = formData.get('role') as string
    const coverLetter = formData.get('coverLetter') as string
    const cvFile = formData.get('cvFile') as File

    // Validate required fields
    if (!fullName || !email || !phone || !role || !coverLetter) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: fullName, email, phone, role, coverLetter' },
        { status: 400 }
      )
    }

    // Validate CV file
    if (!cvFile) {
      return NextResponse.json(
        { success: false, error: 'CV file is required' },
        { status: 400 }
      )
    }

    // Generate unique Resume ID
    const resumeId = generateResumeId()
    const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })

    const candidateData = { fullName, role, email, phone }
    const careersData = { resumeId, fullName, email, phone, role, coverLetter, submissionTime }

    // Execute all three operations in parallel
    const [telegramResult, sheetsResult, emailResult] = await Promise.allSettled([
      uploadCVToTelegram(cvFile, resumeId, candidateData),
      appendToCareersGoogleSheet(careersData),
      sendCareersEmailNotification(careersData)
    ])

    // Check results
    const telegramSuccess = telegramResult.status === 'fulfilled' && telegramResult.value.success
    const sheetsSuccess = sheetsResult.status === 'fulfilled' && sheetsResult.value.success
    const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value.success

    if (telegramSuccess && sheetsSuccess && emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully! We\'ll review your application and get back to you soon.',
        resumeId: resumeId,
        data: {
          telegram: telegramResult.value.data,
          sheets: sheetsResult.value.data,
          email: emailResult.value.data
        }
      })
    } else {
      // Log partial failures but still return success to user
      console.warn('⚠️  Partial failure in careers application submission')
      if (!telegramSuccess) console.error('Telegram failed:', telegramResult.status === 'rejected' ? telegramResult.reason : telegramResult.value?.error)
      if (!sheetsSuccess) console.error('Sheets failed:', sheetsResult.status === 'rejected' ? sheetsResult.reason : sheetsResult.value?.error)
      if (!emailSuccess) console.error('Email failed:', emailResult.status === 'rejected' ? emailResult.reason : emailResult.value?.error)

      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully! We\'ll review your application and get back to you soon.',
        resumeId: resumeId,
        warning: 'Some services may be temporarily unavailable, but your application was received.'
      })
    }

  } catch (error: any) {
    console.error('❌ Error processing careers application:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
