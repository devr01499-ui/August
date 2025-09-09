#!/usr/bin/env node

// Fast development server script
const { spawn } = require('child_process')

console.log('🚀 Starting AdmirerX Development Server (Fast Mode)...')

// Set development environment variables
process.env.NODE_ENV = 'development'
process.env.NEXT_TELEMETRY_DISABLED = '1'
process.env.NEXT_PRIVATE_DEBUG_CACHE = '0'

// Start Next.js with turbo mode
const nextDev = spawn('npx', ['next', 'dev', '--turbo', '--port', '3000'], {
  stdio: 'inherit',
  shell: true
})

nextDev.on('error', (err) => {
  console.error('❌ Failed to start development server:', err)
  process.exit(1)
})

nextDev.on('close', (code) => {
  console.log(`Development server exited with code ${code}`)
  process.exit(code)
})

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...')
  nextDev.kill('SIGINT')
  process.exit(0)
})
