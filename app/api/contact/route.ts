import { NextRequest, NextResponse } from 'next/server'

// Google Apps Script Web App URL (Contact)
const CONTACT_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmsUSD9eUD1PDkDOYTPJPRbpS5qTXBUK5AJwmWydJM/dev'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { source, fullName, email, phone, message, selectedService } = body

    console.log(`[CONTACT FORM] New submission from ${email} at ${new Date().toISOString()}`)

    // Validate required fields
    if (!fullName || !email || !message) {
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

    // Determine source based on service type
    let formSource = source || 'contact'
    if (selectedService && selectedService.toLowerCase().includes('partnership')) {
      formSource = 'partnership'
    } else if (selectedService && (selectedService.toLowerCase().includes('appointment') || selectedService.toLowerCase().includes('book'))) {
      formSource = 'appointment'
    }

    // Prepare data to send to Google Apps Script
    const formData = {
      source: formSource,
      fullName: fullName,
      email: email,
      phone: phone || '',
      message: selectedService ? `${selectedService}: ${message}` : message,
      selectedService: selectedService || ''
    }

    // Send data to Google Apps Script
    const response = await fetch(CONTACT_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      console.error(`[CONTACT FORM] Backend request failed with status: ${response.status}`)
      throw new Error(`Backend request failed with status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      console.log(`[CONTACT FORM] Form data successfully processed by backend from ${email}`)
      return NextResponse.json(
        { 
          success: true, 
          message: result.message || 'Form submitted successfully! We\'ll get back to you soon.' 
        },
        { status: 200 }
      )
    } else {
      console.error(`[CONTACT FORM] Backend returned error: ${result.error}`)
      return NextResponse.json(
        { 
          success: false,
          message: result.error || 'Something went wrong. Please try again.' 
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('[CONTACT FORM] Error:', error)
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Something went wrong. Please try again.' 
      },
      { status: 500 }
    )
  }
}
