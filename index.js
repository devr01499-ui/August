const express = require('express');
const axios = require('axios');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const multer = require('multer');
const FormData = require('form-data');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuration
const GOOGLE_SHEET_ID = '1vvNJFTobxjRQU7X3pDP6_mFOYsa51hvsCeB1Cxm1A_c';
const GMAIL_USER = process.env.GMAIL_USER || 'devr01499@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || 'dtgx rton ntaq gwqf';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'devr01499@gmail.com';

// Careers Bot Configuration
const CAREERS_BOT_TOKEN = '8460992738:AAFmr_uMHDOel05joM-GsVsLxjn8Q-0EuKw';
const CAREERS_BOT_CHAT_ID = process.env.CAREERS_BOT_CHAT_ID || 'YOUR_CAREERS_CHAT_ID';
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwuG8VrTHObnNCzK6XshkWDvFXLWZNfwpt6z9maJxC56nmt7rR7sCIlrocqCtl6_nfWiA/exec';
const HR_EMAIL = 'hr@yourcompany.com';

// Resume ID counter (in production, use database)
let resumeCounter = 1;

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only PDF, DOC, DOCX files
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
    }
  }
});

// Initialize Gmail SMTP
let emailTransporter;
async function initializeGmailSMTP() {
  try {
    emailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    });

    // Verify connection
    await emailTransporter.verify();
    console.log('✅ Gmail SMTP initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing Gmail SMTP:', error.message);
    console.log('⚠️  Make sure Gmail credentials are correct in .env file');
  }
}

// Initialize Google Sheets API
let sheets;
async function initializeGoogleSheets() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './google-credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();
    sheets = google.sheets({ version: 'v4', auth: authClient });
    console.log('✅ Google Sheets API initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing Google Sheets API:', error.message);
    console.log('⚠️  Make sure google-credentials.json is in the root directory');
  }
}

// Email Functions
async function sendEmailNotification(formData) {
  try {
    const { name, email, phone, message, source } = formData;
    
    // Format the message based on source
    let emoji = '📧';
    let title = 'Contact Form';
    
    switch (source) {
      case 'appointment':
        emoji = '📅';
        title = 'Book Appointment';
        break;
      case 'partnership':
        emoji = '🤝';
        title = 'Partnership Inquiry';
        break;
      default:
        emoji = '📧';
        title = 'Contact Form';
    }

    const emailSubject = `${emoji} ${title} - AdmirerX Website`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">${emoji} ${title}</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">New inquiry from AdmirerX website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">👤 Name:</strong>
              <span style="margin-left: 10px; color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📧 Email:</strong>
              <span style="margin-left: 10px; color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📞 Phone:</strong>
              <span style="margin-left: 10px; color: #333;">${phone}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">💬 Message:</strong>
              <div style="margin-top: 8px; padding: 15px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="border-top: 1px solid #e1e5e9; padding-top: 15px; color: #666; font-size: 14px;">
              <strong>🕒 Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
            </div>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"AdmirerX Website" <${GMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      subject: emailSubject,
      html: emailHtml
    };

    const response = await emailTransporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully');
    return { success: true, data: response };
  } catch (error) {
    console.error('❌ Error sending email notification:', error.message);
    return { success: false, error: error.message };
  }
}

// Google Sheets Functions
async function appendToGoogleSheet(formData) {
  try {
    const { name, email, phone, message, source } = formData;
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    
    const values = [
      [timestamp, source, name, email, phone, message]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Adjust range as needed
      valueInputOption: 'RAW',
      resource: {
        values: values
      }
    });

    console.log('✅ Data appended to Google Sheet successfully');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ Error appending to Google Sheet:', error.message);
    return { success: false, error: error.message };
  }
}

// Careers-specific functions
function generateResumeId() {
  const year = new Date().getFullYear();
  const id = resumeCounter.toString().padStart(4, '0');
  resumeCounter++;
  return `CAREER-${year}-${id}`;
}

async function uploadCVToTelegram(cvFile, resumeId, candidateData) {
  try {
    const { fullName, role, email, phone } = candidateData;
    
    const caption = `Resume ID: ${resumeId}
Name: ${fullName}
Role Applied For: ${role}
Email: ${email}
Phone: ${phone}`;

    const formData = new FormData();
    formData.append('chat_id', CAREERS_BOT_CHAT_ID);
    formData.append('document', cvFile.buffer, {
      filename: `${resumeId}_${fullName.replace(/\s+/g, '_')}.pdf`,
      contentType: cvFile.mimetype
    });
    formData.append('caption', caption);

    const response = await axios.post(
      `https://api.telegram.org/bot${CAREERS_BOT_TOKEN}/sendDocument`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    console.log('✅ CV uploaded to Telegram successfully');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ Error uploading CV to Telegram:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}

async function appendToCareersGoogleSheet(careersData) {
  try {
    const { resumeId, fullName, email, phone, role, coverLetter, submissionTime } = careersData;
    
    const data = {
      resumeId,
      fullName,
      email,
      phone,
      role,
      coverLetter,
      submissionTime
    };

    const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ Careers data appended to Google Sheet successfully');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('❌ Error appending careers data to Google Sheet:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}

async function sendCareersEmailNotification(careersData) {
  try {
    const { resumeId, fullName, email, phone, role, coverLetter, submissionTime } = careersData;
    
    const emailSubject = `New Career Application - ${resumeId}`;
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
    `;

    const mailOptions = {
      from: `"AdmirerX Careers" <${GMAIL_USER}>`,
      to: HR_EMAIL,
      subject: emailSubject,
      html: emailHtml
    };

    const response = await emailTransporter.sendMail(mailOptions);
    console.log('✅ Careers email notification sent successfully');
    return { success: true, data: response };
  } catch (error) {
    console.error('❌ Error sending careers email notification:', error.message);
    return { success: false, error: error.message };
  }
}

// Main Contact Form Endpoint
app.post('/submitContact', async (req, res) => {
  try {
    const { name, email, phone, message, source } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message || !source) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, phone, message, source'
      });
    }

    // Validate source
    const validSources = ['contact', 'appointment', 'partnership'];
    if (!validSources.includes(source)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid source. Must be one of: contact, appointment, partnership'
      });
    }

    const formData = { name, email, phone, message, source };

    // Send email notification and append to Google Sheets in parallel
    const [emailResult, sheetsResult] = await Promise.allSettled([
      sendEmailNotification(formData),
      appendToGoogleSheet(formData)
    ]);

    // Check results
    const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value.success;
    const sheetsSuccess = sheetsResult.status === 'fulfilled' && sheetsResult.value.success;

    if (emailSuccess && sheetsSuccess) {
      res.json({
        success: true,
        message: 'Form submitted successfully! We\'ll get back to you soon.',
        data: {
          email: emailResult.value.data,
          sheets: sheetsResult.value.data
        }
      });
    } else {
      // Log partial failures but still return success to user
      console.warn('⚠️  Partial failure in form submission');
      if (!emailSuccess) console.error('Email failed:', emailResult.reason || emailResult.value?.error);
      if (!sheetsSuccess) console.error('Sheets failed:', sheetsResult.reason || sheetsResult.value?.error);

      res.json({
        success: true,
        message: 'Form submitted successfully! We\'ll get back to you soon.',
        warning: 'Some services may be temporarily unavailable, but your message was received.'
      });
    }

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Careers Application Endpoint
app.post('/submitCareers', upload.single('cvFile'), async (req, res) => {
  try {
    const { fullName, email, phone, role, coverLetter } = req.body;
    const cvFile = req.file;

    // Validate required fields
    if (!fullName || !email || !phone || !role || !coverLetter) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: fullName, email, phone, role, coverLetter'
      });
    }

    // Validate CV file
    if (!cvFile) {
      return res.status(400).json({
        success: false,
        error: 'CV file is required'
      });
    }

    // Generate unique Resume ID
    const resumeId = generateResumeId();
    const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    const candidateData = { fullName, role, email, phone };
    const careersData = { resumeId, fullName, email, phone, role, coverLetter, submissionTime };

    // Execute all three operations in parallel
    const [telegramResult, sheetsResult, emailResult] = await Promise.allSettled([
      uploadCVToTelegram(cvFile, resumeId, candidateData),
      appendToCareersGoogleSheet(careersData),
      sendCareersEmailNotification(careersData)
    ]);

    // Check results
    const telegramSuccess = telegramResult.status === 'fulfilled' && telegramResult.value.success;
    const sheetsSuccess = sheetsResult.status === 'fulfilled' && sheetsResult.value.success;
    const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value.success;

    if (telegramSuccess && sheetsSuccess && emailSuccess) {
      res.json({
        success: true,
        message: 'Application submitted successfully! We\'ll review your application and get back to you soon.',
        resumeId: resumeId,
        data: {
          telegram: telegramResult.value.data,
          sheets: sheetsResult.value.data,
          email: emailResult.value.data
        }
      });
    } else {
      // Log partial failures but still return success to user
      console.warn('⚠️  Partial failure in careers application submission');
      if (!telegramSuccess) console.error('Telegram failed:', telegramResult.reason || telegramResult.value?.error);
      if (!sheetsSuccess) console.error('Sheets failed:', sheetsResult.reason || sheetsResult.value?.error);
      if (!emailSuccess) console.error('Email failed:', emailResult.reason || emailResult.value?.error);

      res.json({
        success: true,
        message: 'Application submitted successfully! We\'ll review your application and get back to you soon.',
        resumeId: resumeId,
        warning: 'Some services may be temporarily unavailable, but your application was received.'
      });
    }

  } catch (error) {
    console.error('❌ Error processing careers application:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    services: {
      email: emailTransporter ? 'configured' : 'not configured',
      googleSheets: sheets ? 'configured' : 'not configured',
      careersBot: 'configured'
    }
  });
});

// Serve sample form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
async function startServer() {
  try {
    await initializeGmailSMTP();
    await initializeGoogleSheets();
    
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📝 Contact form endpoint: http://localhost:${PORT}/submitContact`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`📄 Sample form: http://localhost:${PORT}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Trying port ${PORT + 1}...`);
        const newPort = PORT + 1;
        const newServer = app.listen(newPort, () => {
          console.log(`🚀 Server running on http://localhost:${newPort}`);
          console.log(`📝 Contact form endpoint: http://localhost:${newPort}/submitContact`);
          console.log(`🏥 Health check: http://localhost:${newPort}/health`);
          console.log(`📄 Sample form: http://localhost:${newPort}`);
        });
      } else {
        console.error('❌ Server error:', err);
      }
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer().catch(console.error);
