const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Create school email
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
          line-height: 1.5;
          color: #333;
          margin: 0;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .header {
          background-color: #2563eb;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 20px;
        }
        .section {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 5px;
        }
        .section h2 {
          color: #2563eb;
          margin: 0 0 10px 0;
          font-size: 18px;
        }
        .info-row {
          margin-bottom: 8px;
        }
        .info-row strong {
          color: #555;
          display: inline-block;
          width: 150px;
        }
        .highlight {
          background-color: #e6f3ff;
          padding: 12px;
          border-radius: 5px;
          border-left: 4px solid #2563eb;
          margin: 15px 0;
        }
        .footer {
          background-color: #f1f1f1;
          padding: 15px;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        .status-badge {
          background-color: #22c55e;
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Student Application</h1>
          <p>Kimangu Day Secondary School</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>Student Information</h2>
            <div class="info-row">
              <strong>Full Name:</strong> ${data.studentName || "Not provided"}
            </div>
            <div class="info-row">
              <strong>Date of Birth:</strong> ${
                data.dateOfBirth || "Not provided"
              }
            </div>
            <div class="info-row">
              <strong>Gender:</strong> ${data.gender || "Not provided"}
            </div>
            <div class="info-row">
              <strong>KCPE Index:</strong> ${data.kcpeIndex || "Not provided"}
            </div>
            <div class="info-row">
              <strong>KCPE Marks:</strong> ${
                data.kcpeMarks || "Not provided"
              } (${data.kcpeYear || "N/A"})
            </div>
            <div class="info-row">
              <strong>Previous School:</strong> ${
                data.previousSchool || "Not provided"
              }
            </div>
            <div class="info-row">
              <strong>NEMIS Number:</strong> ${data.nemis || "Not provided"}
            </div>
          </div>

          <div class="section">
            <h2>Parent/Guardian Information</h2>
            <div class="info-row">
              <strong>Name:</strong> ${data.parentName || "Not provided"}
            </div>
            <div class="info-row">
              <strong>Relationship:</strong> ${
                data.relationship || "Not provided"
              }
            </div>
            <div class="info-row">
              <strong>Phone:</strong> ${data.phone || "Not provided"}
            </div>
            <div class="info-row">
              <strong>Email:</strong> ${data.email || "Not provided"}
            </div>
            <div class="info-row">
              <strong>Occupation:</strong> ${data.occupation || "Not provided"}
            </div>
            <div class="info-row">
              <strong>ID Number:</strong> ${data.idNumber || "Not provided"}
            </div>
            ${
              data.address
                ? `<div class="info-row"><strong>Address:</strong> ${data.address}</div>`
                : ""
            }
          </div>

          ${
            data.medicalConditions || data.specialNeeds
              ? `
          <div class="section">
            <h2>Medical & Special Requirements</h2>
            ${
              data.medicalConditions
                ? `<div class="info-row"><strong>Medical Conditions:</strong> ${data.medicalConditions}</div>`
                : ""
            }
            ${
              data.specialNeeds
                ? `<div class="info-row"><strong>Special Needs:</strong> ${data.specialNeeds}</div>`
                : ""
            }
          </div>
          `
              : ""
          }

          ${
            data.hearAboutUs || data.comments
              ? `
          <div class="section">
            <h2>Additional Information</h2>
            ${
              data.hearAboutUs
                ? `<div class="info-row"><strong>How they heard about us:</strong> ${data.hearAboutUs}</div>`
                : ""
            }
            ${
              data.comments
                ? `<div class="info-row"><strong>Comments:</strong> ${data.comments}</div>`
                : ""
            }
          </div>
          `
              : ""
          }

          <div class="highlight">
            <strong>Application Status:</strong> 
            <span class="status-badge">Received</span>
            <br><br>
            <strong>Submitted:</strong> ${new Date().toLocaleDateString(
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
          </div>
        </div>

        <div class="footer">
          <p><strong>Next Steps:</strong></p>
          <p>Review application → Contact for requirements → Schedule interview</p>
          <br>
          <p>Kimangu Day Secondary School Admissions System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Email sending route
router.post("/send-admission-emails", async (req, res) => {
  try {
    const applicationData = req.body;

    // Check required fields
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
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create HTML email content
    const htmlContent = createEmailTemplate(applicationData);

    // Email to school
    const mailOptions = {
      from: `"School Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Application: ${applicationData.studentName}`,
      html: htmlContent,
      text: `
New Student Application

Student: ${applicationData.studentName}
Date of Birth: ${applicationData.dateOfBirth}
KCPE: ${applicationData.kcpeMarks} marks (${applicationData.kcpeYear})
Previous School: ${applicationData.previousSchool}

Parent: ${applicationData.parentName}
Phone: ${applicationData.phone}
Email: ${applicationData.email}

Submitted: ${new Date().toLocaleString()}
      `,
    };

    // Send email to school
    await transporter.sendMail(mailOptions);

    // Create reference number
    const applicationRef = `KDS-${Date.now().toString().slice(-6)}`;

    // Simple confirmation email to parent
    const confirmationEmail = {
      from: `"Kimangu Day Secondary School" <${process.env.EMAIL_USER}>`,
      to: applicationData.email,
      subject: `Application Received - ${applicationData.studentName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.5; 
              color: #333; 
              margin: 0; 
              padding: 20px;
              background-color: #f9f9f9;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white;
              border: 1px solid #ddd;
              border-radius: 8px;
            }
            .header { 
              background-color: #2563eb;
              color: white; 
              padding: 20px; 
              text-align: center; 
            }
            .content { 
              padding: 20px; 
            }
            .info-box {
              background: #f0f8ff;
              border: 1px solid #b3d9ff;
              border-radius: 5px;
              padding: 15px;
              margin: 15px 0;
            }
            .steps {
              background: #f0f9f0;
              border: 1px solid #90ee90;
              border-radius: 5px;
              padding: 15px;
              margin: 15px 0;
            }
            .contact {
              background: #fff8dc;
              border: 1px solid #ffd700;
              border-radius: 5px;
              padding: 15px;
              margin: 15px 0;
            }
            .footer { 
              background: #f1f1f1;
              text-align: center; 
              color: #666; 
              font-size: 14px; 
              padding: 15px;
            }
            .ref-number {
              background: #22c55e;
              color: white;
              padding: 5px 12px;
              border-radius: 15px;
              display: inline-block;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Application Received</h1>
              <p>Kimangu Day Secondary School</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${applicationData.parentName}</strong>,</p>
              
              <p>Thank you for applying to Kimangu Day Secondary School. We have received the application for <strong>${
                applicationData.studentName
              }</strong>.</p>
              
              <div class="info-box">
                <h3>Application Summary</h3>
                <p><strong>Student:</strong> ${applicationData.studentName}</p>
                <p><strong>KCPE Marks:</strong> ${applicationData.kcpeMarks} (${
        applicationData.kcpeYear
      })</p>
                <p><strong>Previous School:</strong> ${
                  applicationData.previousSchool
                }</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString(
                  "en-KE"
                )}</p>
                <p><strong>Reference:</strong> <span class="ref-number">${applicationRef}</span></p>
              </div>
              
              <div class="steps">
                <h3>What's Next</h3>
                <p><strong>1.</strong> We review your application (3-5 days)</p>
                <p><strong>2.</strong> We may contact you for additional documents</p>
                <p><strong>3.</strong> Interview invitation (if qualified)</p>
                <p><strong>4.</strong> Admission decision via email/SMS</p>
              </div>

              <div class="contact">
                <h3>Contact Us</h3>
                <p><strong>Email:</strong> admissions@kimangudaysecondary.sc.ke</p>
                <p><strong>Phone:</strong> +254 721 415 851</p>
                <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM</p>
              </div>

              <p>We will contact you soon with updates on your application.</p>
              
              <p>Best regards,<br>
              <strong>Admissions Team</strong><br>
              Kimangu Day Secondary School</p>
            </div>
            
            <div class="footer">
              <p>Please save this email for your records</p>
              <p>© 2025 Kimangu Day Secondary School</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${applicationData.parentName},

Thank you for applying to Kimangu Day Secondary School. We have received the application for ${applicationData.studentName}.

APPLICATION SUMMARY:
- Student: ${applicationData.studentName}
- KCPE Marks: ${applicationData.kcpeMarks} (${applicationData.kcpeYear})
- Previous School: ${applicationData.previousSchool}
- Reference: ${applicationRef}

WHAT'S NEXT:
1. We review your application (3-5 days)
2. We may contact you for additional documents  
3. Interview invitation (if qualified)
4. Admission decision via email/SMS

CONTACT US:
Email: admissions@kimangudaysecondary.sc.ke
Phone: +254 721 415 851
Hours: Monday - Friday, 8:00 AM - 4:00 PM

We will contact you soon with updates.

Best regards,
Admissions Team
Kimangu Day Secondary School
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationEmail);

    console.log(`Application received: ${applicationData.studentName}`);

    res.status(200).json({
      message: "Application submitted successfully!",
      applicationId: applicationRef,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Failed to submit application. Please try again.",
      error:
        process.env.NODE_ENV === "development" ? error.message : "Server error",
    });
  }
});

module.exports = router;
