const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Load environment variables
require("dotenv").config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration optimized for Render
const createTransporter = () => {
  console.log(`📧 Creating transporter for ${process.env.NODE_ENV || 'development'} environment`);
  
  // For Render production, use more robust settings
  if (process.env.NODE_ENV === 'production') {
    console.log("🔧 Using production email configuration (Render)");
    
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // false for TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      // Important settings for Render
      tls: {
        rejectUnauthorized: false, // Allows self-signed certificates
        ciphers: 'SSLv3'
      },
      // Timeout settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
      // Debug logging
      debug: true,
      logger: true
    });
  }
  
  // Development configuration
  console.log("🔧 Using development email configuration");
  
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

const transporter = createTransporter();

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email configuration error:", error.message);
    console.log("\n🔧 TROUBLESHOOTING:");
    console.log("1. Verify GMAIL_USER and GMAIL_APP_PASSWORD are set in Render");
    console.log("2. Make sure GMAIL_APP_PASSWORD is a valid app password from https://myaccount.google.com/apppasswords");
    console.log("3. Check if 2FA is enabled on the Gmail account");
    console.log("4. On Render, try using port 465 with secure: true");
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

// Simple contact form endpoint
app.post("/api/contact-form", async (req, res) => {
  console.log("📧 Received contact form submission");
  
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Validate
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Email to admin
    const adminMailOptions = {
      from: `"Kimangu School Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
New Contact Form Submission:
From: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send admin email
    await transporter.sendMail(adminMailOptions);
    console.log("✅ Admin notification sent");

    // Send confirmation to user
    const userMailOptions = {
      from: `"Kimangu School" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Kimangu School",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for your message!</h2>
          <p>Dear ${fullName},</p>
          <p>We have received your message and will get back to you soon.</p>
          <hr>
          <p><small>Kimangu Day Secondary School<br>Rongai, Nakuru County</small></p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log(`✅ Confirmation sent to ${email}`);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("❌ Email error:", error.message);
    
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Simple test endpoint
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
    environment: process.env.NODE_ENV || 'development',
    emailConfigured: !!process.env.GMAIL_USER
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// Root
app.get("/", (req, res) => {
  res.json({
    message: "Kimangu School Contact API",
    endpoints: {
      contact: "POST /api/contact-form",
      test: "GET /api/test",
      health: "GET /api/health"
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📧 Email user: ${process.env.GMAIL_USER || 'Not configured'}`);
});