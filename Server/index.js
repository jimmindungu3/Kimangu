const express = require("express");
const cors = require("cors");

// Import functions
const { sendContactEmail } = require("./services/sendEmails");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Send contact form emails
app.post("/api/send-email", async (req, res) => {
  console.log("Received email send request:", req.body);
  try {
    const result = await sendContactEmail(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in email route:", error);
    
    if (error.message === "Missing required form fields") {
      return res.status(400).json({ 
        success: false, 
        message: error.message 
      });
    }
    
    res.status(500).json({
      success: false,
      message: error.message || "Failed to send message. Please try again later.",
    });
  }
});

// Health check route
app.get("/", (req, res) => {
  console.log("Health check endpoint hit");
  res.status(200).json({success: true, message: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});