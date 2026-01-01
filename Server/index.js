const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify email configuration
transporter.verify((error) => {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Contact form submission route
app.post("/api/contact-form", async (req, res) => {
    console.log("Received contact form submission:", req.body);
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Validate required fields (phone is optional)
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields except phone are required",
      });
    }

    // Email content - updated to include phone
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself, or change to another email
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>This email was sent from your website contact form.</small></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user - updated to include phone if provided
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting Kimangu Day Secondary School",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for your message!</h2>
          <p>Dear ${fullName},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 0 0 5px 0;"><strong>Subject:</strong> ${subject}</p>
            ${phone ? `<p style="margin: 0 0 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 10px 0 0 0;"><strong>Your Message:</strong></p>
            <p style="margin: 5px 0 0 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p>We typically respond within 24-48 hours during working days.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="font-size: 14px; color: #6b7280;">
            <strong>Kimangu Day Secondary School</strong><br>
            Rongai, Nakuru County<br>
            Phone: +254 721 415 851<br>
            Email: info@kimangu.sc.ke
          </p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Test route
app.get("/api/contact-form", async (req, res) => {
  try {
    const testMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Test Email from Contact Form",
      text: "This is a test email to verify the email setup is working.",
    };

    await transporter.sendMail(testMailOptions);
    res.json({ success: true, message: "Test email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});