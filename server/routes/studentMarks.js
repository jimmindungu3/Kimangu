const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const multer = require("multer");
const XLSX = require("xlsx"); // For reading Excel files
const PDFDocument = require("pdfkit"); // For generating PDFs
const path = require("path");
const fs = require("fs");

// Configure multer for Excel file uploads
const storage = multer.memoryStorage();

// File filter to allow only Excel files
const fileFilter = (req, file, cb) => {
  // Only allow Excel files
  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    "application/vnd.ms-excel", // .xls
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only Excel files (.xlsx, .xls) are allowed."
      ),
      false
    );
  }
};

// Configure multer with file size limit (10MB for Excel files)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 1, // Only one file at a time
  },
});

// Function to generate PDF report for a student with images
function generateStudentPDF(studentData) {
  return new Promise((resolve, reject) => {
    try {
      // Create a new PDF document
      const doc = new PDFDocument({ margin: 50 });
      const chunks = [];

      // Collect PDF data
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));

      // Add images to header (if available)
      const headerY = 50; // Starting Y position for header

      try {
        // Add school logo on the left (replace with your actual image path)
        const schoolLogoPath = path.join(
          __dirname,
          "../assets/images/kenya-coat-of-arms.png"
        );
        if (require("fs").existsSync(schoolLogoPath)) {
          doc.image(schoolLogoPath, 50, headerY, {
            width: 60,
            height: 60,
          });
        }

        // Add Kenya coat of arms on the right (replace with your actual image path)
        const kenyaCoatPath = path.join(
          __dirname,
          "../assets/images/kimangu-logo.png"
        );
        if (require("fs").existsSync(kenyaCoatPath)) {
          doc.image(kenyaCoatPath, 490, headerY, {
            width: 60,
            height: 60,
          });
        }
      } catch (imageError) {
        // If images fail to load, continue without them
        console.warn("Could not load header images:", imageError.message);
      }

      // Add school header text (centered between the images)
      doc
        .fontSize(18)
        .fillColor("#2563eb")
        .text("KIMANGU DAY SECONDARY SCHOOL", 120, headerY + 10, {
          width: 360,
          align: "center",
        });

      doc
        .fontSize(14)
        .fillColor("#1f2937")
        .text("STUDENT ACADEMIC REPORT", 120, headerY + 35, {
          width: 360,
          align: "center",
        });

      // Move down to account for header with images
      doc.y = headerY + 80;

      // Add student information
      doc
        .fontSize(12)
        .fillColor("#374151")
        .text(`Student Name: ${studentData.studentName || "N/A"}`, 50, doc.y)
        .text(`Class: ${studentData.class || "N/A"}`, 300, doc.y - 15)
        .text(`Term: ${studentData.term || "N/A"}`, 50, doc.y + 5)
        .text(
          `Year: ${studentData.year || new Date().getFullYear()}`,
          300,
          doc.y - 15
        )
        .moveDown(1);

      // Add horizontal line
      doc
        .strokeColor("#d1d5db")
        .lineWidth(1)
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .stroke()
        .moveDown(1);

      // Create table header
      const tableTop = doc.y;
      const tableLeft = 50;
      const colWidths = [120, 85, 80, 80, 90]; // Column widths
      const rowHeight = 25;

      // Table headers
      const headers = ["Subject", "Marks", "Grade", "Points", "Remarks"];

      // Draw table header
      doc
        .rect(
          tableLeft,
          tableTop,
          colWidths.reduce((a, b) => a + b, 0),
          rowHeight
        )
        .fillAndStroke("#f3f4f6", "#d1d5db");

      let xPos = tableLeft;
      headers.forEach((header, i) => {
        doc
          .fillColor("#1f2937")
          .fontSize(10)
          .text(header, xPos + 5, tableTop + 8, { width: colWidths[i] - 10 });
        xPos += colWidths[i];
      });

      // Add subject rows
      let currentY = tableTop + rowHeight;
      const subjects = Object.keys(studentData).filter(
        (key) =>
          ![
            "studentName",
            "class",
            "term",
            "year",
            "totalMarks",
            "averageMarks",
            "overallGrade",
            "parentEmail",
          ].includes(key)
      );

      subjects.forEach((subject, index) => {
        const marks = studentData[subject] || 0;
        const grade = calculateGrade(marks);
        const points = calculatePoints(grade);
        const remarks = getRemarks(marks);

        // Alternate row colors
        const fillColor = index % 2 === 0 ? "#ffffff" : "#f9fafb";

        doc
          .rect(
            tableLeft,
            currentY,
            colWidths.reduce((a, b) => a + b, 0),
            rowHeight
          )
          .fillAndStroke(fillColor, "#e5e7eb");

        // Add subject data
        xPos = tableLeft;
        const rowData = [subject, marks, grade, points, remarks];

        rowData.forEach((data, i) => {
          doc
            .fillColor("#374151")
            .fontSize(9)
            .text(String(data), xPos + 5, currentY + 8, {
              width: colWidths[i] - 10,
            });
          xPos += colWidths[i];
        });

        currentY += rowHeight;
      });

      // Add summary section
      doc.moveDown(2);
      doc.y += 20;
      doc
        .fontSize(12)
        .fillColor("#1f2937")
        .text("PERFORMANCE SUMMARY", 50, doc.y);

      // Summary box
      const summaryY = doc.y;
      doc.rect(50, summaryY, 500, 80).fillAndStroke("#f0f9ff", "#bae6fd");

      doc
        .fontSize(10)
        .fillColor("#1e40af")
        .text(
          `Total Marks: ${studentData.totalMarks || "N/A"}`,
          70,
          summaryY + 15
        )
        .text(
          `Average Marks: ${studentData.averageMarks.toFixed(2) || "N/A"}%`,
          300,
          summaryY + 15
        )
        .text(
          `Overall Grade: ${studentData.overallGrade || "N/A"}`,
          70,
          summaryY + 35
        )
        .text(
          `Class Position: ${studentData.position || "N/A"}`,
          300,
          summaryY + 35
        )
        .text(
          `Total Students: ${studentData.totalStudents || "N/A"}`,
          70,
          summaryY + 55
        );

      // Add footer
      doc.moveDown(3);
      doc
        .fontSize(8)
        .fillColor("#6b7280")
        .text(
          "This report was generated electronically and therefore neither signed nor stamped. To verify its authenticity, contact the HOS, Kimangu Day Secondary School, via hos@kimangudaysecondary.sc.ke or call +254 721 415 851",
          { align: "center" }
        )
        .text(`Generated on: ${new Date().toLocaleDateString("en-KE")}`, {
          align: "center",
        });

      // Finalize the PDF
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

// Helper functions for grade calculation
function calculateGrade(marks) {
  if (marks >= 80) return "A";
  if (marks >= 75) return "A-";
  if (marks >= 70) return "B+";
  if (marks >= 65) return "B";
  if (marks >= 60) return "B-";
  if (marks >= 55) return "C+";
  if (marks >= 50) return "C";
  if (marks >= 45) return "C-";
  if (marks >= 40) return "D+";
  if (marks >= 35) return "D";
  if (marks >= 30) return "D-";
  return "E";
}

function calculatePoints(grade) {
  const pointsMap = {
    A: 12,
    "A-": 11,
    "B+": 10,
    B: 9,
    "B-": 8,
    "C+": 7,
    C: 6,
    "C-": 5,
    "D+": 4,
    D: 3,
    "D-": 2,
    E: 1,
  };
  return pointsMap[grade] || 0;
}

function getRemarks(marks) {
  if (marks >= 80) return "Excellent";
  if (marks >= 65) return "Good";
  if (marks >= 50) return "Satisfactory";
  if (marks >= 40) return "Needs Improvement";
  return "Poor";
}

// Main route for uploading student results
router.post(
  "/upload-results",
  upload.single("resultsFile"),
  async (req, res) => {
    try {
      // Check if file was uploaded
      if (!req.file) {
        return res.status(400).json({
          message: "No Excel file uploaded. Please select a file.",
        });
      }

      // Parse the Excel file
      const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0]; // Use first sheet
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const studentsData = XLSX.utils.sheet_to_json(worksheet);

      if (!studentsData || studentsData.length === 0) {
        return res.status(400).json({
          message: "Excel file is empty or has no valid data.",
        });
      }

      console.log(`Processing ${studentsData.length} student records...`);

      // Create email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Process each student
      const results = {
        successful: 0,
        failed: 0,
        errors: [],
      };

      for (let i = 0; i < studentsData.length; i++) {
        const student = studentsData[i];

        try {
          // Validate required fields
          if (!student.studentName || !student.parentEmail) {
            results.failed++;
            results.errors.push(
              `Row ${i + 2}: Missing student name or parent email`
            );
            continue;
          }

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(student.parentEmail)) {
            results.failed++;
            results.errors.push(
              `Row ${i + 2}: Invalid email format for ${student.studentName}`
            );
            continue;
          }

          // Generate PDF for this student
          const pdfBuffer = await generateStudentPDF(student);

          // Prepare email with PDF attachment
          const emailOptions = {
            from: `"Kimangu Day Secondary School" <${process.env.EMAIL_USER}>`,
            to: student.parentEmail,
            subject: `Academic Report - ${student.studentName} - ${
              student.term || "Term"
            } ${student.year || new Date().getFullYear()}`,
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
                  background: linear-gradient(135deg, #2563eb, #1d4ed8);
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
                  <h1>📋 Academic Report</h1>
                  <p>Kimangu Day Secondary School</p>
                </div>
                
                <div class="content">
                  <p>Dear Parent/Guardian,</p>
                  
                  <p>We are pleased to share <strong>${
                    student.studentName
                  }</strong>'s academic report for <strong>${
              student.term || "this term"
            }</strong>.</p>
                  
                  <div class="highlight">
                    <h3 style="margin-top: 0; color: #1e40af;">📊 Quick Summary</h3>
                    <ul style="margin: 10px 0;">
                      <li><strong>Student:</strong> ${student.studentName}</li>
                      <li><strong>Class:</strong> ${student.class || "N/A"}</li>
                      <li><strong>Term:</strong> ${student.term || "N/A"}</li>
                      <li><strong>Average:</strong> ${
                        student.averageMarks || "N/A"
                      }%</li>
                      <li><strong>Overall Grade:</strong> ${
                        student.overallGrade || "N/A"
                      }</li>
                    </ul>
                  </div>
                  
                  <p>Please find the detailed academic report attached as a PDF document. The report includes:</p>
                  <ul>
                    <li>Subject-wise performance breakdown</li>
                    <li>Grades and points for each subject</li>
                    <li>Overall performance summary</li>
                    <li>Class position and remarks</li>
                  </ul>
                  
                  <p>If you have any questions about your child's performance or would like to schedule a meeting with the class teacher, please don't hesitate to contact us.</p>
                  
                  <p>Thank you for your continued support in your child's education.</p>
                  
                  <p>Best regards,<br>
                  <strong style="color: #1e40af;">The Academic Department</strong><br>
                  <em>Kimangu Day Secondary School</em><br>
                  Phone: +254 721 415 851<br>
                  Email: ${process.env.EMAIL_USER}</p>
                </div>
                
                <div class="footer">
                  <p>This is an automated email from our school management system.</p>
                  <p>© 2025 Kimangu Day Secondary School - All Rights Reserved</p>
                </div>
              </div>
            </body>
            </html>
          `,
            attachments: [
              {
                filename: `${student.studentName}_Academic_Report.pdf`,
                content: pdfBuffer,
                contentType: "application/pdf",
              },
            ],
          };

          // Send email
          await transporter.sendMail(emailOptions);

          results.successful++;
          console.log(
            `✅ Report sent successfully to ${student.parentEmail} for ${student.studentName}`
          );
        } catch (error) {
          results.failed++;
          results.errors.push(`${student.studentName}: ${error.message}`);
          console.error(
            `❌ Failed to process ${student.studentName}:`,
            error.message
          );
        }
      }

      // Send summary response
      res.status(200).json({
        message: "Bulk email processing completed",
        summary: {
          totalProcessed: studentsData.length,
          successful: results.successful,
          failed: results.failed,
          successRate: `${(
            (results.successful / studentsData.length) *
            100
          ).toFixed(1)}%`,
        },
        errors: results.errors.length > 0 ? results.errors : undefined,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // Handle multer errors
      if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            message:
              "File too large. Please ensure the Excel file is under 10MB.",
          });
        }
      }

      // Handle file type errors
      if (error.message.includes("Invalid file type")) {
        return res.status(400).json({
          message:
            "Invalid file type. Only Excel files (.xlsx, .xls) are allowed.",
        });
      }

      console.error("Error processing results upload:", error);
      res.status(500).json({
        message: "Failed to process results file. Please try again later.",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      });
    }
  }
);

module.exports = router;
