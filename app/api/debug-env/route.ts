import { NextResponse } from 'next/server'

export async function GET() {
  const allEnvVars = process.env
  const relevantVars = {
    EMAIL_SERVER_HOST: allEnvVars.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: allEnvVars.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: allEnvVars.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: allEnvVars.EMAIL_SERVER_PASSWORD ? 'SET' : 'NOT SET',
    EMAIL_FROM: allEnvVars.EMAIL_FROM,
    NEXT_PUBLIC_SITE_URL: allEnvVars.NEXT_PUBLIC_SITE_URL,
    NODE_ENV: allEnvVars.NODE_ENV,
    VERCEL_ENV: allEnvVars.VERCEL_ENV,
    VERCEL_URL: allEnvVars.VERCEL_URL,
    timestamp: new Date().toISOString(),
    totalEnvVars: Object.keys(allEnvVars).length
  }

  return NextResponse.json(relevantVars)
}
