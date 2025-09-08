# AdmirerX Contact Backend

A production-ready Node.js Express backend for handling contact forms with Telegram notifications and Google Sheets integration.

## Features

- 📧 **Contact Form Processing** - Handles contact, appointment, and partnership inquiries
- 🤖 **Telegram Bot Integration** - Sends formatted notifications to your Telegram bot
- 📊 **Google Sheets Integration** - Automatically appends form data to a Google Sheet
- 🛡️ **Input Validation** - Validates all form inputs and sources
- 🚀 **Production Ready** - Error handling, logging, and health checks
- 🎨 **Beautiful Sample Form** - Responsive HTML form for testing

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy the example environment file
cp env.example .env

# Edit .env and add your Telegram chat ID
TELEGRAM_CHAT_ID=your_telegram_chat_id_here
```

### 3. Set Up Google Sheets
1. Create a Google Cloud Project
2. Enable the Google Sheets API
3. Create a Service Account
4. Download the service account JSON key
5. Rename it to `google-credentials.json` and place in the root directory
6. Share your Google Sheet with the service account email (give Editor access)

### 4. Configure Google Sheet
Create a Google Sheet with these headers in row 1:
- Timestamp
- Source
- Name
- Email
- Phone
- Message

### 5. Get Your Telegram Chat ID
1. Start a chat with your bot
2. Send a message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find your chat ID in the response

### 6. Run the Server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### POST /submitContact
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services.",
  "source": "contact"
}
```

**Sources:**
- `contact` - General contact form
- `appointment` - Book appointment
- `partnership` - Partnership inquiry

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully! We'll get back to you soon.",
  "data": {
    "telegram": { /* Telegram API response */ },
    "sheets": { /* Google Sheets API response */ }
  }
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "services": {
    "telegram": "configured",
    "googleSheets": "configured"
  }
}
```

## Sample Form

Visit `http://localhost:3001` to see the sample contact form.

## Configuration

### Environment Variables
- `PORT` - Server port (default: 3001)
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID

### Google Sheets Setup
1. The service account JSON file must be named `google-credentials.json`
2. The service account must have Editor access to your Google Sheet
3. The sheet should have the correct headers in row 1

### Telegram Bot Setup
1. Create a bot with @BotFather
2. Get your bot token
3. Get your chat ID
4. Update the `TELEGRAM_CHAT_ID` in your `.env` file

## Security Notes

- Never expose tokens in client-side code
- Keep your service account JSON file secure
- Use environment variables for sensitive configuration
- The bot token is hardcoded for this example - consider using environment variables in production

## Error Handling

The server includes comprehensive error handling:
- Input validation
- Service availability checks
- Graceful degradation if one service fails
- Detailed logging for debugging

## Production Deployment

1. Set up environment variables
2. Configure your reverse proxy (nginx/Apache)
3. Set up SSL certificates
4. Configure process management (PM2)
5. Set up monitoring and logging

## License

MIT