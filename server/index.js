const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for frontend connection
app.use(
  cors({
    origin: "http://localhost:8000", // Your frontend URL
    methods: ["POST", "GET"],
    credentials: false,
  })
);

// Parse JSON data from requests
app.use(express.json());

// Updated function to create school email
function createEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Student Application</title>
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
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 26px;
        }
        .header p {
          margin: 0;
          opacity: 0.9;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 25px;
          padding: 20px;
          background-color: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .section h2 {
          color: #1e40af;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 18px;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 8px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }
        .info-item {
          background: white;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }
        .info-item strong {
          color: #374151;
          display: block;
          margin-bottom: 5px;
        }
        .highlight {
          background-color: #dbeafe;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #93c5fd;
          margin: 15px 0;
        }
        .footer {
          background: #f8fafc;
          text-align: center;
          color: #64748b;
          font-size: 13px;
          padding: 20px;
          border-top: 1px solid #e2e8f0;
        }
        .badge {
          display: inline-block;
          background-color: #10b981;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-left: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 New Student Application</h1>
          <p>Kimangu Day Secondary School - Admissions Office</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>📚 Student Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Full Name:</strong>
                ${data.studentName || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Date of Birth:</strong>
                ${data.dateOfBirth || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Gender:</strong>
                ${data.gender || "Not provided"}
              </div>
              <div class="info-item">
                <strong>KCPE Index Number:</strong>
                ${data.kcpeIndex || "Not provided"}
              </div>
            </div>
            
            <div class="highlight">
              <strong>🎯 KCPE Performance:</strong> 
              ${data.kcpeMarks || "Not provided"} marks in ${
    data.kcpeYear || "N/A"
  }
              ${
                data.kcpeMarks && parseInt(data.kcpeMarks) >= 400
                  ? '<span class="badge">Excellent</span>'
                  : data.kcpeMarks && parseInt(data.kcpeMarks) >= 350
                  ? '<span class="badge" style="background-color: #f59e0b;">Good</span>'
                  : data.kcpeMarks
                  ? '<span class="badge" style="background-color: #6b7280;">Average</span>'
                  : ""
              }
            </div>
            
            <div class="info-item">
              <strong>Previous School:</strong>
              ${data.previousSchool || "Not provided"}
            </div>
            <div class="info-item">
              <strong>NEMIS Number:</strong>
              ${data.nemis || "Not provided"}
            </div>
          </div>

          <div class="section">
            <h2>👨‍👩‍👧‍👦 Parent/Guardian Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Name:</strong>
                ${data.parentName || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Relationship:</strong>
                ${data.relationship || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Phone Number:</strong>
                ${data.phone || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Email:</strong>
                ${data.email || "Not provided"}
              </div>
              <div class="info-item">
                <strong>Occupation:</strong>
                ${data.occupation || "Not provided"}
              </div>
              <div class="info-item">
                <strong>ID Number:</strong>
                ${data.idNumber || "Not provided"}
              </div>
            </div>
            
            ${
              data.address
                ? `
            <div class="info-item" style="margin-top: 15px;">
              <strong>Home Address:</strong>
              ${data.address}
            </div>
            `
                : ""
            }
          </div>

          ${
            data.medicalConditions || data.specialNeeds
              ? `
          <div class="section">
            <h2>🏥 Medical & Special Requirements</h2>
            ${
              data.medicalConditions
                ? `
            <div class="info-item">
              <strong>Medical Conditions/Allergies:</strong>
              ${data.medicalConditions}
            </div>
            `
                : ""
            }
            
            ${
              data.specialNeeds
                ? `
            <div class="info-item">
              <strong>Special Needs:</strong>
              ${data.specialNeeds}
            </div>
            `
                : ""
            }
          </div>
          `
              : ""
          }

          <div class="section">
            <h2>ℹ️ Additional Information</h2>
            <div class="info-grid">
              ${
                data.hearAboutUs
                  ? `
              <div class="info-item">
                <strong>How they heard about us:</strong>
                ${data.hearAboutUs}
              </div>
              `
                  : ""
              }
              
              ${
                data.comments
                  ? `
              <div class="info-item" style="grid-column: 1 / -1;">
                <strong>Additional Comments:</strong>
                ${data.comments}
              </div>
              `
                  : ""
              }
            </div>
          </div>

          <div class="highlight" style="text-align: center; background-color: #ecfdf5; border-color: #10b981;">
            <strong>✅ Application Status: Received</strong>
            <p style="margin: 10px 0 0 0; color: #059669;">
              This application was submitted on ${new Date().toLocaleDateString(
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
        </div>

        <div class="footer">
          <p><strong>Next Steps:</strong></p>
          <p>• Review the application within 3-5 business days</p>
          <p>• Contact parent/guardian for any additional requirements</p>
          <p>• Schedule interview if application meets criteria</p>
          <br>
          <p>This is an automated email from Kimangu Day Secondary School Admissions System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Email sending route
app.post("/send-email", async (req, res) => {
  try {
    // Extract all the form data
    const applicationData = req.body;

    // Validate required fields
    const requiredFields = ["studentName", "email", "phone", "parentName"];
    const missingFields = requiredFields.filter(
      (field) => !applicationData[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Missing required fields",
        missingFields,
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

    // Create HTML email content
    const htmlContent = createEmailTemplate(applicationData);

    // Email to school admissions office
    const mailOptions = {
      from: `"School Admissions System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // School's email
      subject: `🎓 New Student Application: ${applicationData.studentName}`,
      html: htmlContent,
      // Also include plain text version for compatibility
      text: `
New Student Application Received

Student Information:
- Name: ${applicationData.studentName}
- Date of Birth: ${applicationData.dateOfBirth}
- Gender: ${applicationData.gender}
- KCPE Index: ${applicationData.kcpeIndex}
- KCPE Marks: ${applicationData.kcpeMarks} (${applicationData.kcpeYear})
- Previous School: ${applicationData.previousSchool}

Parent/Guardian Information:
- Name: ${applicationData.parentName}
- Relationship: ${applicationData.relationship}
- Phone: ${applicationData.phone}
- Email: ${applicationData.email}
- Occupation: ${applicationData.occupation}
- ID Number: ${applicationData.idNumber}
- Address: ${applicationData.address}

Additional Information:
- Medical Conditions: ${applicationData.medicalConditions || "None specified"}
- Special Needs: ${applicationData.specialNeeds || "None specified"}
- How they heard about us: ${applicationData.hearAboutUs || "Not specified"}
- Comments: ${applicationData.comments || "None"}

Application submitted on: ${new Date().toLocaleString()}
      `,
    };

    // Send email to school
    await transporter.sendMail(mailOptions);

    // Create application reference number
    const applicationRef = `KDS-${Date.now().toString().slice(-6)}`;

    // Send enhanced confirmation email to parent/guardian
    const confirmationEmail = {
      from: `"Kimangu Day Secondary School" <${process.env.EMAIL_USER}>`,
      to: applicationData.email,
      subject: `Application Confirmation - ${applicationData.studentName} | Kimangu Day Secondary School`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            .header h1 {
              margin: 0 0 10px 0;
              font-size: 26px;
            }
            .header p {
              margin: 0;
              opacity: 0.9;
            }
            .content { 
              padding: 10px; 
            }
            .highlight-box {
              background: #dbeafe;
              border: 1px solid #93c5fd;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              margin: 20px 0px;
            }
            .info-item {
              background: #f8fafc;
              padding: 15px;
              margin-bottom: 10px;
              border-radius: 6px;
              border-left: 4px solid #3b82f6;
            }
            .info-item strong {
              display: block;
              color: #1e40af;
              margin-bottom: 10px;
            }
            .steps {
              background: #f0fdf4;
              border: 1px solid #86efac;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .steps h3 {
              color: #15803d;
              margin-top: 0;
            }
            .steps ul {
              margin: 0;
              padding-left: 20px;
            }
            .steps li {
              margin-bottom: 8px;
            }
            .contact-info {
              background: #fef3c7;
              border: 1px solid #fbbf24;
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
            .ref-number {
              background: #10b981;
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              display: inline-block;
              font-weight: bold;
              margin: 10px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Application Received Successfully!</h1>
              <p>🎓 Kimangu Day Secondary School - Admissions Office</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${applicationData.parentName}</strong>,</p>
              
              <p>Thank you for choosing Kimangu Day Secondary School for your child's education. We have successfully received the admission application for <strong>${
                applicationData.studentName
              }</strong>.</p>
              
              <div class="highlight-box">
                <h3 style="margin-top: 0; color: #1e40af;">📋 Application Summary</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <strong>Student Name:</strong>
                    ${applicationData.studentName}
                  </div>
                  <div class="info-item">
                    <strong>KCPE Marks:</strong>
                    ${applicationData.kcpeMarks} (${applicationData.kcpeYear})
                  </div>
                  <div class="info-item">
                    <strong>Previous School:</strong>
                    ${applicationData.previousSchool}
                  </div>
                  <div class="info-item">
                    <strong>Application Date:</strong>
                    ${new Date().toLocaleDateString("en-KE")}
                  </div>
                </div>
                <div style="text-align: center;">
                  <span class="ref-number">Reference: ${applicationRef}</span>
                </div>
              </div>
              
              <div class="steps">
                <h3>🔄 What Happens Next</h3>
                <ul>
                  <li><strong>Review Phase (3-5 business days):</strong> Our admissions committee will carefully review the application</li>
                  <li><strong>Document Verification:</strong> We may contact you if additional documents are required</li>
                  <li><strong>Interview Invitation:</strong> Qualified candidates will be invited for a student and parent interview</li>
                  <li><strong>Admission Decision:</strong> You will receive our decision via email and SMS</li>
                  <li><strong>Enrollment:</strong> Successful applicants will receive enrollment instructions</li>
                </ul>
              </div>

              <div class="contact-info">
                <h3 style="margin-top: 0; color: #d97706;">📞 Need Help?</h3>
                <p><strong>Admissions Office Contact:</strong></p>
                <p>📧 Email: <strong>admissions@kimangudaysecondary.sc.ke</strong></p>
                <p>📱 Phone: <strong>+254 721 415 851</strong> (We'll use this number to contact you)</p>
                <p>🕒 Office Hours: Monday - Friday, 8:00 AM - 4:00 PM</p>
              </div>

              <div style="background: #ede9fe; border: 1px solid #c4b5fd; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #7c3aed;">📚 About Our School</h3>
                <p>Kimangu Day Secondary School is committed to providing quality education in a nurturing environment. We focus on academic excellence, character development, and preparing students for future success.</p>
                <p><strong>Average Termly Fee:</strong> KES 3,000</p>
              </div>

              <p style="margin-top: 30px;">We appreciate your interest in our school and look forward to potentially welcoming ${
                applicationData.studentName
              } to our school community.</p>
              
              <p>Warm regards,<br>
              <strong style="color: #1e40af;">The Admissions Team</strong><br>
              <em>Kimangu Day Secondary School</em></p>
            </div>
            
            <div class="footer">
              <p><strong>Please save this email for your records</strong></p>
              <p>This is an automated confirmation. For inquiries, please contact our admissions office.</p>
              <p>© 2025 Kimangu Day Secondary School - All Rights Reserved</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${applicationData.parentName},

Thank you for choosing Kimangu Day Secondary School for your child's education. We have successfully received the admission application for ${
        applicationData.studentName
      }.

APPLICATION SUMMARY:
- Student Name: ${applicationData.studentName}
- KCPE Marks: ${applicationData.kcpeMarks} (${applicationData.kcpeYear})
- Previous School: ${applicationData.previousSchool}
- Application Date: ${new Date().toLocaleDateString("en-KE")}
- Reference Number: ${applicationRef}

WHAT HAPPENS NEXT:
1. Review Phase (3-5 business days): Our admissions committee will carefully review the application
2. Document Verification: We may contact you if additional documents are required
3. Interview Invitation: Qualified candidates will be invited for a student and parent interview
4. Admission Decision: You will receive our decision via email and SMS
5. Enrollment: Successful applicants will receive enrollment instructions

CONTACT INFORMATION:
- Email: ${process.env.EMAIL_USER}
- Phone: +254 721 415 851 (We'll use this number to contact you)
- Office Hours: Monday - Friday, 8:00 AM - 4:00 PM

ABOUT OUR SCHOOL:
Kimangu Day Secondary School is committed to providing quality education in a nurturing environment. We focus on academic excellence, character development, and preparing students for future success.
Average Termly Fee: KES 3,000

We appreciate your interest in our school and look forward to potentially welcoming ${
        applicationData.studentName
      } to our school community.

Warm regards,
The Admissions Team
Kimangu Day Secondary School

Please save this email for your records.
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationEmail);

    // Log successful submission (for debugging)
    console.log(
      `New application received from ${applicationData.parentName} for student ${applicationData.studentName}`
    );

    // Send success response
    res.status(200).json({
      message:
        "Application submitted successfully! Confirmation emails have been sent.",
      applicationId: applicationRef,
    });
  } catch (error) {
    // Log error for debugging
    console.error("Error processing application:", error);

    // Send error response
    res.status(500).json({
      message: "Failed to submit application. Please try again later.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER}`);
});
