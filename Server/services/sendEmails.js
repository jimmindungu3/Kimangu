const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter using configurable SMTP settings so it works on Render/other hosts.
// Priority of configuration:
// 1. If `SMTP_HOST` is provided, use SMTP settings (works with SendGrid/Mailgun/SMTP providers).
// 2. Otherwise fall back to Gmail SMTP using `EMAIL` and `PASSWORD` (use an App Password if using Google accounts with 2FA).
const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = process.env.SMTP_PORT
  ? Number(process.env.SMTP_PORT)
  : smtpHost === "smtp.gmail.com"
  ? 465
  : 587;
const smtpSecure = smtpPort === 465;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL,
    pass: process.env.SMTP_PASS || process.env.PASSWORD,
  },
  tls: {
    // Allow self-signed certificates on some hosts — set to true for stricter validation.
    rejectUnauthorized: process.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0",
  },
});

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
  const { fullName, email, subject, phone, message } = emailData;

  if (!fullName || !email || !subject || !message) {
    throw new Error("Missing required form fields");
  }

  try {
    // Send email to admin (yourself)
    const adminMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `Contact Form: ${subject}`,
      html: createAdminEmailHTML({ fullName, email, subject, phone, message }),
      text: `Contact Form Submission:\n\nSubject: ${subject}\nFrom: ${fullName}\nEmail: ${email}\nPhone: ${
        phone || "Not provided"
      }\nMessage: ${message}`,
    };

    // Send confirmation email to sender
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

    // Send both emails
    const adminResult = await transporter.sendMail(adminMailOptions);
    const confirmationResult = await transporter.sendMail(
      confirmationMailOptions
    );

    console.log("Admin email sent:", adminResult.messageId);
    console.log("Confirmation email sent:", confirmationResult.messageId);

    return {
      success: true,
      message:
        "Message sent successfully! A confirmation email has been sent to you.",
    };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};

// Export the main function
module.exports = { sendContactEmail };
