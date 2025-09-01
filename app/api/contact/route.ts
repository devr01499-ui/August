import { NextRequest, NextResponse } from 'next/server'

// Google Apps Script Web App endpoint
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycqTXfITnQh_U2w_BqCRItBeEy2DO0_9Xk5baE2PwAnlTQvcU94-bvXhs2Ht29zWT-4w/exec'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    console.log(`[CONTACT FORM] New submission from ${email} at ${new Date().toISOString()}`)

    // Validate required fields
    if (!name || !email || !message) {
      console.log(`[CONTACT FORM] Validation failed - missing required fields from ${email}`)
      return NextResponse.json(
        { 
          success: false,
          message: 'Missing required fields. Please fill in all required fields.' 
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
          message: 'Invalid email format. Please enter a valid email address.' 
        },
        { status: 400 }
      )
    }

    // Prepare data to send to Google Apps Script
    const formData = {
      name: name,
      email: email,
      phone: phone || '',
      message: message,
      service: service || ''
    }

    // Send data to Google Apps Script Web App
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      console.error(`[CONTACT FORM] Google Apps Script request failed with status: ${response.status}`)
      throw new Error(`Google Apps Script request failed with status: ${response.status}`)
    }

    console.log(`[CONTACT FORM] Form data successfully sent to Google Apps Script from ${email}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('[CONTACT FORM] Error:', error)
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Something went wrong.' 
      },
      { status: 500 }
    )
  }
}
