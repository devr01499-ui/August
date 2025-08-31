import { NextResponse } from 'next/server'

export async function GET() {
  const envCheck = {
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST || 'NOT SET',
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT || 'NOT SET',
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER || 'NOT SET',
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD ? 'SET' : 'NOT SET',
    EMAIL_FROM: process.env.EMAIL_FROM || 'NOT SET',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(envCheck)
}
