const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const contactForm = require("./routes/contactForm");
const admissionForm = require("./routes/admissionForm");

const app = express();
app.use(express.json());

// Enable CORS for frontend connection
app.use(
  cors({
    origin: ["http://localhost:5500", "https://kimangu.vercel.app"], // DEV and PROD URLs
    methods: ["POST", "GET"],
    credentials: false,
  })
);

app.use("/contact", contactForm);
app.use("/admission", admissionForm);

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
