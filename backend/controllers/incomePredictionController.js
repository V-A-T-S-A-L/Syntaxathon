const jwt = require("jsonwebtoken");
const IncomePrediction = require("../models/IncomePrediction");

exports.storePrediction = async (req, res) => {
    try {
      // Extract token from headers
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) return res.status(401).json({ message: "No token provided" });
  
      // Decode token to get farmer ID
      let decoded;
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        return res.status(400).json({ message: "Invalid token" });
      }
      const farmerId = decoded.id;
  
      // Extract form data
      const { cropType, landArea, expectedYield, marketPrice, predictedIncome } = req.body;
  
      // Validate incoming data
      if (landArea <= 0 || expectedYield <= 0 || marketPrice <= 0) {
        return res.status(400).json({ message: "Invalid input data. Fields must be positive numbers." });
      }
  
      // Create a new income prediction record
      const newPrediction = new IncomePrediction({
        farmer: farmerId,
        cropType,
        landArea,
        expectedYield,
        marketPrice,
        predictedIncome
      });
  
      await newPrediction.save();
      res.status(201).json({ message: "Prediction stored successfully", data: newPrediction });
    } catch (error) {
      console.error("Error storing prediction:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  