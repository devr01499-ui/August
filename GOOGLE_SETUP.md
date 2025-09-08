# Google Sheets Setup Guide

## Why Service Account Instead of App Password?

- **App Passwords** are for Gmail SMTP authentication
- **Google Sheets API** requires OAuth2 with Service Account
- Service Account provides secure, programmatic access to Google Sheets

## Step-by-Step Setup

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Note your Project ID

### 2. Enable Google Sheets API
1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 3. Create Service Account
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in:
   - **Name**: `admirerx-sheets-service`
   - **Description**: `Service account for AdmirerX contact form`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 4. Generate Service Account Key
1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Download the JSON file
7. Rename it to `google-credentials.json`
8. Place it in your project root directory

### 5. Share Google Sheet with Service Account
1. Open your Google Sheet: `https://docs.google.com/spreadsheets/d/1vvNJFTobxjRQU7X3pDP6_mFOYsa51hvsCeB1Cxm1A_c/edit`
2. Click "Share" button (top right)
3. Add the service account email (from the JSON file, looks like: `admirerx-sheets-service@your-project-id.iam.gserviceaccount.com`)
4. Give it **Editor** permissions
5. Click "Send"

### 6. Set Up Sheet Headers
Make sure your Google Sheet has these headers in row 1:
- Column A: `Timestamp`
- Column B: `Source`
- Column C: `Name`
- Column D: `Email`
- Column E: `Phone`
- Column F: `Message`

## Alternative: Using App Password for Gmail Notifications

If you want to use your App Password for email notifications instead of Telegram, I can modify the backend to send emails using Nodemailer with Gmail SMTP.

Would you like me to:
1. Help you set up the Service Account (recommended for Google Sheets)
2. Or modify the backend to use Gmail SMTP with your App Password instead of Telegram?

## Testing the Setup

Once you have the `google-credentials.json` file in place:

1. Install dependencies: `npm install`
2. Set up environment: `cp env.example .env`
3. Add your Telegram chat ID to `.env`
4. Run the server: `npm run dev`
5. Test the form at `http://localhost:3001`

The server will automatically detect the Google credentials and enable Sheets integration.
