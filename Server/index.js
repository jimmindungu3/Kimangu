// index.js - Simple Email API for Contact Form
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter (same as sendCode.js)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Single API endpoint for contact form
app.post("/api/contact-form", async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields",
      });
    }

    // 1. Email to Admin
    const adminMailOptions = {
      from: `Xirion Africa Contact <${process.env.MY_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || process.env.MY_EMAIL, // Send to admin
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #ff6600;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // 2. Confirmation Email to User
    const userMailOptions = {
      from: `Xirion Africa <${process.env.MY_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting Xirion Africa",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #ff6600;">XIRION AFRICA</h2>
          <p style="font-size: 16px; color: #555;">Dear <strong>${fullName}</strong>,</p>
          <p style="font-size: 16px; color: #555;">Thank you for reaching out to us. We have received your message and our team will get back to you within 24-48 hours.</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0;"><strong>Your Message:</strong></p>
            <p style="margin: 10px 0; padding: 10px; background: white; border-left: 3px solid #ff6600;">${message}</p>
          </div>
          
          <p style="font-size: 16px; color: #555;">If you need immediate assistance, please call us at: <strong>+254 XXX XXX XXX</strong></p>
          
          <hr style="margin-top: 30px; margin-bottom: 20px;">
          
          <div style="font-size: 14px; color: #888; text-align: center;">
            <p style="margin: 0;">Why shop with us?</p>
            <p style="margin: 4px 0;">Affordable quality. Ethical sourcing. Fast shipping. Easy returns.</p>
            <p style="margin-top: 12px 0;">Follow Us: 
              <a href="#" style="text-decoration: none; color: #3b5998;">Facebook</a> | 
              <a href="#" style="text-decoration: none; color: #000;">TikTok</a> | 
              <a href="#" style="text-decoration: none; color: #C13584;">Instagram</a> | 
              <a href="#" style="text-decoration: none; color: #000;">Twitter</a>
            </p>
            <p style="margin-top: 12px;">&copy; ${new Date().getFullYear()} Xirion Africa. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send both emails in parallel
    const [adminResponse, userResponse] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    res.json({
      success: true,
      message:
        "Message sent successfully! A confirmation has been sent to your email.",
      data: {
        adminEmailId: adminResponse.messageId,
        userEmailId: userResponse.messageId,
      },
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint (Render requires this)
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "Xirion Africa Email API",
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Xirion Africa Email API is running",
    endpoints: {
      contact: "POST /api/contact",
      health: "GET /health",
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Email API running on port ${PORT}`);
  console.log(`📧 Using email: ${process.env.MY_EMAIL}`);
});
