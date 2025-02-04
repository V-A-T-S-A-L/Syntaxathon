const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const farmerRoutes = require("./routes/farmerRoutes");
const incomePredictionRoutes = require("./routes/incomePredictionRoutes");
const agricultureNeedsRoutes = require("./routes/agricultureNeedsRoutes");

const app = express();
app.use(express.json());

// Enhanced CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Route to fetch Gemini insights
app.post("/api/insights", async (req, res) => {
  try {
    console.log("🔹 Incoming request:", req.body);

    const { cropType, landArea, expectedYield, marketPrice } = req.body;
    if (!cropType || !landArea || !expectedYield || !marketPrice) {
      return res.status(400).json({ message: "Missing required fields", receivedData: req.body });
    }

    const prompt = `Given a ${cropType} farm with ${landArea} acres present in India today, an expected yield of ${expectedYield} kg, and a market price of $${marketPrice} per kg, what are the best farming strategies?Be precise crisp and upto the point structure ur answer..use emojis wherever needed to liven up u=your response..ensure code readability and accessibility of ur insight also ensure theres no '**' anywhere in the output pls remove that also ensure that everything is in Ruppees ie inr not usd`;

    // ✅ Use process.env for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "Missing Gemini API Key" });
    }

    // ✅ Correct API call
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Gemini API Full Response:", response.data);

    // ✅ Extract response properly
    const generatedText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received from Gemini API";

    console.log("✅ Extracted Insight:", generatedText);

    res.json({ success: true, insight: generatedText });
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.response?.data || error.message,
    });
  }
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// ✅ Existing routes
app.use("/api/farmers", farmerRoutes);
app.use("/api", incomePredictionRoutes);
app.use("/api", agricultureNeedsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
