const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Contact message sending route
router.post("/form", async (req, res) => {
  try {
    // Get the contact form data
    const contactData = req.body;

    // Validate required fields
    const requiredFields = ["fullName", "email", "subject", "message"];
    const missingFields = requiredFields.filter(
      (field) => !contactData[field] || contactData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Missing required fields",
        missingFields,
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return res.status(400).json({
        message: "Invalid email address format",
      });
    }

    // Create email transporter (reuse the existing one)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create HTML content for the contact message
    const contactEmailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 650px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #60a5fa, #3b82f6);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 26px;
          }
          .content {
            padding: 30px;
          }
          .info-section {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #3b82f6;
          }
          .info-item {
            margin-bottom: 15px;
            padding: 10px;
            background: white;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
          }
          .info-item strong {
            color: #374151;
            display: block;
            margin-bottom: 5px;
          }
          .message-box {
            background: #f0fdf4;
            border: 1px solid #f9fafb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .footer {
            background: #f8fafc;
            text-align: center;
            color: #64748b;
            font-size: 13px;
            padding: 20px;
            border-top: 1px solid #e2e8f0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Message</h1>
            <p>Kimangu Day Secondary School - Website Contact Form</p>
          </div>

          <div class="content">
            <div class="info-section">
              <h2 style="color: #3b82f6; margin-top: 0;">Contact Details</h2>
              <div class="info-item">
                <strong>Full Name:</strong>
                ${contactData.fullName}
              </div>
              <div class="info-item">
                <strong>Email Address:</strong>
                ${contactData.email}
              </div>
              <div class="info-item">
                <strong>Subject:</strong>
                ${contactData.subject}
              </div>
              <div class="info-item">
                <strong>Date & Time:</strong>
                ${new Date().toLocaleDateString("en-KE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div class="message-box">
              <h3 style="color: #3b82f6; margin-top: 0;">💬 Message</h3>
              <p style="margin: 0; white-space: pre-line;">${
                contactData.message
              }</p>
            </div>

            <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; margin: 20px 0;">
              <strong style="color: #d97706;">⚡ Action Required:</strong>
              <p style="margin: 5px 0 0 0; color: #92400e;">
                Please respond to this inquiry within 24-48 hours for the best customer experience.
              </p>
            </div>
          </div>

          <div class="footer">
            <p>This message was sent through the contact form on your website</p>
            <p>Reply directly to: <strong>${contactData.email}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options for school (main recipient)
    const schoolEmailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // School's email
      subject: `${contactData.subject}`,
      html: contactEmailHTML,
      // Reply-to the person who sent the message
      replyTo: contactData.email,
      // Plain text version
      text: `
New Contact Message from Website

Contact Details:
- Name: ${contactData.fullName}
- Email: ${contactData.email}
- Subject: ${contactData.subject}
- Date: ${new Date().toLocaleString()}

Message:
${contactData.message}

Please respond to: ${contactData.email}
      `,
    };

    // Send email to school
    await transporter.sendMail(schoolEmailOptions);

    // Send confirmation email to the person who contacted
    const confirmationEmailOptions = {
      from: `"Kimangu Day Secondary School" <${process.env.EMAIL_USER}>`,
      to: contactData.email,
      subject: `Thank you for contacting us - ${contactData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #3b82f6, #1d4ed8);
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .content { 
              padding: 30px; 
            }
            .highlight {
              background: #dbeafe;
              border: 1px solid #93c5fd;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .footer { 
              background: #f8fafc;
              text-align: center; 
              color: #64748b; 
              font-size: 13px; 
              padding: 20px;
              border-top: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Message Received!</h1>
              <p>Thank you for contacting Kimangu Day Secondary School</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${contactData.fullName}</strong>,</p>
              
              <p>Thank you for reaching out to us! We have successfully received your message regarding "<strong>${
                contactData.subject
              }</strong>".</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0; color: #1e40af;">Your message:</h3>
                <p style="margin: 10px 0; font-style: italic; white-space: pre-line;">"${
                  contactData.message
                }"</p>
                <p style="margin: 0; color: #6366f1; font-size: 14px;">
                  <strong>Submitted on:</strong> ${new Date().toLocaleDateString(
                    "en-KE",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>
              </div>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>📋 We will review your message carefully</li>
                <li>📞 Our team will respond within 24-48 hours</li>
                <li>💌 You'll receive a personalized response at this email address</li>
              </ul>
              
              <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #d97706;">📞 Need Immediate Assistance?</h3>
                <p style="margin: 5px 0;">
                  <strong>Phone:</strong> +254 721 415 851<br>
                  <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
              
              <p>We appreciate your interest in Kimangu Day Secondary School!</p>
              
              <p>Warm regards,<br>
              <strong style="color: #1e40af;">The Communication Team</strong><br>
              <em>Kimangu Day Secondary School</em></p>
            </div>
            
            <div class="footer">
              <p>This is an automated confirmation email.</p>
              <p>© 2025 Kimangu Day Secondary School - All Rights Reserved</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${contactData.fullName},

Thank you for reaching out to us! We have successfully received your message regarding "${
        contactData.subject
      }".

Your message:
"${contactData.message}"

Submitted on: ${new Date().toLocaleString()}

What happens next?
- We will review your message carefully
- Our team will respond within 24-48 hours  
- You'll receive a personalized response at this email address

Need immediate assistance?
Phone: +254 721 415 851
Office Hours: Monday - Friday, 8:00 AM - 5:00 PM

We appreciate your interest in Kimangu Day Secondary School!

Warm regards,
The Communication Team
Kimangu Day Secondary School
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationEmailOptions);

    // Log successful submission (for debugging)
    console.log(
      `New contact message from ${contactData.fullName} (${contactData.email}) - Subject: ${contactData.subject}`
    );

    // Send success response
    res.status(200).json({
      message: "Message sent successfully! We will get back to you soon.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // Log error for debugging
    console.error("Error processing contact message:", error);

    // Send error response
    res.status(500).json({
      message: "Failed to send message. Please try again later.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
});

module.exports = router;
