const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
// Store files in memory as buffers for email attachments
const storage = multer.memoryStorage();

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  // Allowed file types for job applications
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only PDF, DOC, DOCX, JPG, JPEG, PNG files are allowed."
      ),
      false
    );
  }
};

// Configure multer with file size limit (5MB per file)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
    files: 10, // Maximum 10 files
  },
});

// Career application submission route
router.post(
  "/application-form",
  upload.array("documents"),
  async (req, res) => {
    try {
      // Get the application form data
      const applicationData = req.body;
      const uploadedFiles = req.files || [];

      // Validate required fields
      const requiredFields = [
        "fullName",
        "email",
        "phone",
        "position",
        "experience",
        "education",
        "availableStartDate",
      ];

      const missingFields = requiredFields.filter(
        (field) =>
          !applicationData[field] || applicationData[field].trim() === ""
      );

      if (missingFields.length > 0) {
        return res.status(400).json({
          message: "Missing required fields",
          missingFields,
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(applicationData.email)) {
        return res.status(400).json({
          message: "Invalid email address format",
        });
      }

      // Validate phone number (basic validation)
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
      if (!phoneRegex.test(applicationData.phone)) {
        return res.status(400).json({
          message: "Invalid phone number format",
        });
      }

      // Create email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Prepare attachments from uploaded files
      const attachments = uploadedFiles.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      }));

      // Create HTML content for the job application email
      const applicationEmailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application</title>
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
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
          }
          .content {
            padding: 30px;
          }
          .section {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #10b981;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
          }
          .info-item {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
          }
          .info-item strong {
            color: #374151;
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
          }
          .info-item span {
            color: #1f2937;
            font-size: 16px;
          }
          .full-width {
            grid-column: 1 / -1;
          }
          .attachments {
            background: #ecfdf5;
            border: 1px solid #a7f3d0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .attachment-list {
            list-style: none;
            padding: 0;
            margin: 10px 0 0 0;
          }
          .attachment-list li {
            background: white;
            margin: 5px 0;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #10b981;
          }
          .footer {
            background: #f8fafc;
            text-align: center;
            color: #64748b;
            font-size: 13px;
            padding: 20px;
            border-top: 1px solid #e2e8f0;
          }
          .priority-box {
            background: #fef3c7;
            border: 1px solid #fbbf24;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Job Application</h1>
            <p>Position: ${applicationData.position}</p>
            <p>Kimangu Day Secondary School</p>
          </div>

          <div class="content">
            <div class="section">
              <h2 style="color: #10b981; margin-top: 0;">👤 Personal Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <strong>Full Name:</strong>
                  <span>${applicationData.fullName}</span>
                </div>
                <div class="info-item">
                  <strong>Email Address:</strong>
                  <span>${applicationData.email}</span>
                </div>
                <div class="info-item">
                  <strong>Phone Number:</strong>
                  <span>${applicationData.phone}</span>
                </div>
                <div class="info-item">
                  <strong>Available Start Date:</strong>
                  <span>${applicationData.availableStartDate}</span>
                </div>
                ${
                  applicationData.address
                    ? `
                <div class="info-item full-width">
                  <strong>Address:</strong>
                  <span>${applicationData.address}</span>
                </div>
                `
                    : ""
                }
              </div>
            </div>

            <div class="section">
              <h2 style="color: #10b981; margin-top: 0;">💼 Professional Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <strong>Position Applied For:</strong>
                  <span>${applicationData.position}</span>
                </div>
                <div class="info-item">
                  <strong>Years of Experience:</strong>
                  <span>${applicationData.experience}</span>
                </div>
                <div class="info-item full-width">
                  <strong>Education Background:</strong>
                  <span>${applicationData.education}</span>
                </div>
                ${
                  applicationData.previousEmployment
                    ? `
                <div class="info-item full-width">
                  <strong>Previous Employment:</strong>
                  <span style="white-space: pre-line;">${applicationData.previousEmployment}</span>
                </div>
                `
                    : ""
                }
                ${
                  applicationData.skills
                    ? `
                <div class="info-item full-width">
                  <strong>Key Skills:</strong>
                  <span>${applicationData.skills}</span>
                </div>
                `
                    : ""
                }
              </div>
            </div>

            ${
              applicationData.coverLetter
                ? `
            <div class="section">
              <h2 style="color: #10b981; margin-top: 0;">📝 Cover Letter</h2>
              <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; white-space: pre-line; line-height: 1.8;">${applicationData.coverLetter}</p>
              </div>
            </div>
            `
                : ""
            }

            ${
              uploadedFiles.length > 0
                ? `
            <div class="attachments">
              <h3 style="color: #065f46; margin-top: 0;">📎 Attached Documents (${
                uploadedFiles.length
              })</h3>
              <ul class="attachment-list">
                ${uploadedFiles
                  .map(
                    (file) => `
                  <li>
                    <strong>${file.originalname}</strong>
                    <span style="color: #6b7280; font-size: 14px;">
                      (${(file.size / 1024).toFixed(1)} KB)
                    </span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
            `
                : ""
            }

            <div class="section">
              <h2 style="color: #10b981; margin-top: 0;">📅 Application Details</h2>
              <div class="info-item">
                <strong>Application Submitted:</strong>
                <span>${new Date().toLocaleDateString("en-KE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</span>
              </div>
            </div>

            <div class="priority-box">
              <strong style="color: #d97706;">⚡ Action Required:</strong>
              <p style="margin: 5px 0 0 0; color: #92400e;">
                Please review this application and schedule an interview if the candidate meets the requirements.
              </p>
            </div>
          </div>

          <div class="footer">
            <p>This application was submitted through the careers page on your website</p>
            <p>Applicant Contact: <strong>${
              applicationData.email
            }</strong> | <strong>${applicationData.phone}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

      // Email options for school (main recipient)
      const schoolEmailOptions = {
        from: `"Career Applications" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // School's email
        subject: `New Application: ${applicationData.position} - ${applicationData.fullName}`,
        html: applicationEmailHTML,
        attachments: attachments, // Include all uploaded files
        replyTo: applicationData.email,
        // Plain text version
        text: `
New Job Application Received

Position: ${applicationData.position}
Applicant: ${applicationData.fullName}

Personal Information:
- Email: ${applicationData.email}
- Phone: ${applicationData.phone}
- Available Start Date: ${applicationData.availableStartDate}
${applicationData.address ? `- Address: ${applicationData.address}` : ""}

Professional Information:
- Years of Experience: ${applicationData.experience}
- Education: ${applicationData.education}
${
  applicationData.previousEmployment
    ? `- Previous Employment: ${applicationData.previousEmployment}`
    : ""
}
${applicationData.skills ? `- Skills: ${applicationData.skills}` : ""}

${
  applicationData.coverLetter
    ? `Cover Letter:\n${applicationData.coverLetter}`
    : ""
}

Attachments: ${uploadedFiles.length} file(s) attached
${uploadedFiles.map((file) => `- ${file.originalname}`).join("\n")}

Application Date: ${new Date().toLocaleString()}
Contact: ${applicationData.email} | ${applicationData.phone}
      `,
      };

      // Send email to school
      await transporter.sendMail(schoolEmailOptions);

      // Send confirmation email to applicant
      const confirmationEmailOptions = {
        from: `"Kimangu Day Secondary School" <${process.env.EMAIL_USER}>`,
        to: applicationData.email,
        subject: `Application Received - ${applicationData.position}`,
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
              background: linear-gradient(135deg, #10b981, #059669);
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .content { 
              padding: 30px; 
            }
            .highlight {
              background: #ecfdf5;
              border: 1px solid #a7f3d0;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .info-box {
              background: #f0f9ff;
              border: 1px solid #7dd3fc;
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
              <h1>✅ Application Received!</h1>
              <p>Thank you for applying to Kimangu Day Secondary School</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${applicationData.fullName}</strong>,</p>
              
              <p>Thank you for your interest in the <strong>${
                applicationData.position
              }</strong> position at Kimangu Day Secondary School. We have successfully received your application!</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0; color: #065f46;">📋 Application Summary</h3>
                <ul style="margin: 10px 0;">
                  <li><strong>Position:</strong> ${
                    applicationData.position
                  }</li>
                  <li><strong>Experience:</strong> ${
                    applicationData.experience
                  } years</li>
                  <li><strong>Available Start Date:</strong> ${
                    applicationData.availableStartDate
                  }</li>
                  <li><strong>Documents Submitted:</strong> ${
                    uploadedFiles.length
                  } file(s)</li>
                </ul>
                <p style="margin: 10px 0 0 0; color: #047857; font-size: 14px;">
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
              
              <div class="info-box">
                <h3 style="margin-top: 0; color: #0369a1;">🚀 What Happens Next?</h3>
                <ol style="margin: 10px 0; padding-left: 20px;">
                  <li><strong>Review Process:</strong> Our HR team will carefully review your application and documents</li>
                  <li><strong>Initial Screening:</strong> Qualified candidates will be contacted within 1-2 weeks</li>
                  <li><strong>Interview Process:</strong> Selected candidates will be invited for an interview</li>
                  <li><strong>Final Decision:</strong> We'll notify all applicants of our decision</li>
                </ol>
              </div>
              
              <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #d97706;">📞 Need to Update Your Application?</h3>
                <p style="margin: 5px 0;">
                  If you need to submit additional documents or update any information, please contact us:<br>
                  <strong>Email:</strong> ${process.env.EMAIL_USER}<br>
                  <strong>Phone:</strong> +254 721 415 851
                </p>
              </div>
              
              <p>We appreciate the time you took to apply and look forward to potentially welcoming you to our team!</p>
              
              <p>Best regards,<br>
              <strong style="color: #065f46;">Human Resources Department</strong><br>
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
Dear ${applicationData.fullName},

Thank you for your interest in the ${
          applicationData.position
        } position at Kimangu Day Secondary School. We have successfully received your application!

Application Summary:
- Position: ${applicationData.position}
- Experience: ${applicationData.experience} years
- Available Start Date: ${applicationData.availableStartDate}
- Documents Submitted: ${uploadedFiles.length} file(s)
- Submitted on: ${new Date().toLocaleString()}

What Happens Next?
1. Review Process: Our HR team will carefully review your application and documents
2. Initial Screening: Qualified candidates will be contacted within 1-2 weeks
3. Interview Process: Selected candidates will be invited for an interview
4. Final Decision: We'll notify all applicants of our decision

Need to update your application?
Email: ${process.env.EMAIL_USER}
Phone: +254 721 415 851

We appreciate the time you took to apply and look forward to potentially welcoming you to our team!

Best regards,
Human Resources Department
Kimangu Day Secondary School
      `,
      };

      // Send confirmation email
      await transporter.sendMail(confirmationEmailOptions);

      // Log successful submission
      console.log(
        `New job application from ${applicationData.fullName} (${applicationData.email}) for position: ${applicationData.position}`
      );

      // Send success response
      res.status(200).json({
        message:
          "Application submitted successfully! We will review your application and get back to you soon.",
        applicationId: `APP-${Date.now()}`, // Simple application ID
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // Handle multer errors specifically
      if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            message: "File too large. Please ensure each file is under 5MB.",
          });
        }
        if (error.code === "LIMIT_FILE_COUNT") {
          return res.status(400).json({
            message: "Too many files. Maximum 10 files allowed.",
          });
        }
      }

      // Handle custom file filter errors
      if (error.message.includes("Invalid file type")) {
        return res.status(400).json({
          message:
            "Invalid file type. Only PDF, DOC, DOCX, JPG, JPEG, PNG files are allowed.",
        });
      }

      // Log error for debugging
      console.error("Error processing job application:", error);

      // Send error response
      res.status(500).json({
        message: "Failed to submit application. Please try again later.",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      });
    }
  }
);

module.exports = router;
