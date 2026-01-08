const nodemailer = require("nodemailer");
require("dotenv").config();

// In sendEmails.js, replace the transporter configuration:
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Try 465 if 587 doesn't work
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Add this for Render
    ciphers: "SSLv3",
  },
  connectionTimeout: 10000, // 10 seconds timeout
});

console.log("Email transporter configured:", transporter.options);

// Email HTML Templates (using styles from sendCode.js)
const createAdminEmailHTML = (data) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="text-align: center; color: #1e40af;">KIMANGU DAY SECONDARY SCHOOL</h2>
  
  <div style="background: #1e40af; color: white; padding: 12px; border-radius: 6px; margin: 20px 0; text-align: center;">
    <h3 style="margin: 0; font-size: 18px;">${data.subject}</h3>
  </div>
  
  <div style="background: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>From:</strong> ${data.fullName}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
    <p style="margin: 10px 0;"><strong>Phone:</strong> ${
      data.phone || "Not provided"
    }</p>
  </div>
  
  <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Message:</strong></p>
    <p style="margin: 10px 0; white-space: pre-wrap;">${data.message}</p>
  </div>
  
  <p style="font-size: 14px; color: #888;">
    <strong>Submitted on:</strong> ${new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}
  </p>
  
  <hr style="margin-top: 30px; margin-bottom: 0;">

  <div style="font-size: 14px; color: #888; text-align: center;">
    <p style="margin-top: 12px;">&copy; ${new Date().getFullYear()} Kimangu Day Secondary School. All rights reserved.</p>
  </div>
</div>
`;

const createConfirmationEmailHTML = (data) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="text-align: center; color: #1e40af;">KIMANGU DAY SECONDARY SCHOOL</h2>
  
  <div style="background: #1e40af; color: white; padding: 12px; border-radius: 6px; margin: 20px 0; text-align: center;">
    <h3 style="margin: 0; font-size: 18px;">${data.subject}</h3>
  </div>
  
  <p style="font-size: 16px; color: #555;">Dear ${data.fullName},</p>
  
  <p style="font-size: 16px; color: #555;">Thank you for contacting Kimangu Day Secondary School. We have received your message and will get back to you within 24-48 hours.</p>
  
  <div style="background: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Reference:</strong> KDSS-${Date.now()
      .toString()
      .slice(-6)}</p>
    <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    )}</p>
  </div>
  
  <div style="background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Your Message:</strong></p>
    <p style="margin: 10px 0; white-space: pre-wrap; font-style: italic; color: #555;">${
      data.message
    }</p>
  </div>
  
  <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
    <p style="margin: 10px 0; font-weight: bold; color: #1e40af;">What happens next?</p>
    <ul style="margin: 10px 0; padding-left: 20px;">
      <li>Our team will review your message</li>
      <li>We aim to respond within 24-48 hours on weekdays</li>
      <li>For very urgent matters, please call +254 721 415 851</li>
    </ul>
  </div>
  
  <hr style="margin-top: 30px; margin-bottom: 0;">

  <div style="font-size: 14px; color: #888; text-align: center;">
    <p style="margin: 0;">School Hours</p>
    <p style="margin: 4px 0;">Mon-Fri: 8:00 AM – 5:00 PM | Saturday: 8:00 AM – 12:00 PM</p>
    <p style="margin-top: 12px;">This is an automated message. Please do not reply to this email.</p>
    <p style="margin-top: 12px;">&copy; ${new Date().getFullYear()} Kimangu Day Secondary School. All rights reserved.</p>
  </div>
</div>
`;

// Main email sending function
const sendContactEmail = async (emailData) => {
  console.log("=== EMAIL SENDING PROCESS START ===");
  console.log("Email data received:", JSON.stringify(emailData, null, 2));
  
  const { fullName, email, subject, phone, message } = emailData;

  // Enhanced environment check
  console.log("=== ENVIRONMENT CHECK ===");
  console.log("EMAIL env var exists:", !!process.env.EMAIL);
  console.log("PASSWORD env var exists:", !!process.env.PASSWORD);
  console.log("EMAIL value (first/last 3 chars):", 
    process.env.EMAIL ? 
    `${process.env.EMAIL.substring(0, 3)}...${process.env.EMAIL.substring(process.env.EMAIL.length - 3)}` : 
    "NOT SET"
  );
  console.log("PASSWORD length:", process.env.PASSWORD?.length || 0);
  console.log("Node environment:", process.env.NODE_ENV);

  if (!fullName || !email || !subject || !message) {
    console.error("Validation failed - missing fields");
    throw new Error("Missing required form fields");
  }

  try {
    // Test transporter connection with timeout
    console.log("=== TESTING TRANSPORTER ===");
    console.log("Transporter config:", {
      service: transporter.options.service,
      user: transporter.options.auth.user,
      passLength: transporter.options.auth.pass?.length || 0
    });
    
    await transporter.verify();
    console.log("✓ Transporter verified successfully");
    
    // Send emails
    console.log("=== SENDING EMAILS ===");
    
    const adminMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `Contact Form: ${subject}`,
      html: createAdminEmailHTML({ fullName, email, subject, phone, message }),
      text: `Contact Form Submission:\n\nSubject: ${subject}\nFrom: ${fullName}\nEmail: ${email}\nPhone: ${
        phone || "Not provided"
      }\nMessage: ${message}`,
    };

    const confirmationMailOptions = {
      from: `"Kimangu Day Secondary School" <${process.env.EMAIL}>`,
      to: email,
      subject: `Message Received: ${subject}`,
      html: createConfirmationEmailHTML({
        fullName,
        email,
        subject,
        phone,
        message,
      }),
      text: `Dear ${fullName},\n\nThank you for contacting Kimangu Day Secondary School!\n\nSubject: ${subject}\n\nWe have received your message and will get back to you within 24-48 hours.\n\nYour message: ${message}\n\nFor urgent matters, please call us at +254 721 415 851.\n\nBest regards,\nKimangu Day Secondary School Team`,
    };

    console.log("Sending admin email...");
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log("✓ Admin email sent:", adminResult.messageId);
    
    console.log("Sending confirmation email...");
    const confirmationResult = await transporter.sendMail(confirmationMailOptions);
    console.log("✓ Confirmation email sent:", confirmationResult.messageId);

    console.log("=== EMAIL SENDING PROCESS COMPLETE ===");
    
    return {
      success: true,
      message: "Message sent successfully! A confirmation email has been sent to you.",
    };
  } catch (error) {
    console.error("=== EMAIL SENDING ERROR ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error response:", error.response);
    console.error("Error stack:", error.stack);
    
    // Check for specific Gmail errors
    if (error.code === 'EAUTH') {
      console.error("AUTHENTICATION ERROR - Check your email credentials");
      console.error("This usually means:");
      console.error("1. Wrong password");
      console.error("2. Using regular password instead of app password");
      console.error("3. 2FA not enabled but required");
    }
    
    if (error.code === 'EENVELOPE') {
      console.error("ENVELOPE ERROR - Check recipient/sender addresses");
    }
    
    throw new Error("Failed to send message. Please try again later.");
  }
};

// Export the main function
module.exports = { sendContactEmail };
