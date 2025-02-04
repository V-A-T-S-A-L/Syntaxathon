const jwt = require("jsonwebtoken");
const AgricultureNeeds = require("../models/AgricultureNeeds");

exports.saveAgricultureNeeds = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const farmerId = decoded.id; // Extract farmer ID from token

    const { landSize, cropType, soilType, season, prediction } = req.body;

    const newAgricultureNeed = new AgricultureNeeds({
      farmerId,
      landSize,
      cropType,
      soilType,
      season,
      ...prediction, // Accept the prediction values directly from frontend
    });

    await newAgricultureNeed.save();
    res.status(201).json({ message: "Agriculture needs saved successfully", data: newAgricultureNeed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
