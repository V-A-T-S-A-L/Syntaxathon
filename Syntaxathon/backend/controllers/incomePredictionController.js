const jwt = require("jsonwebtoken");
const IncomePrediction = require("../models/IncomePrediction");

exports.storePrediction = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "No token provided" });

        // Decode token to get farmer ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const farmerId = decoded.id;

        // Extract form data
        const { cropType, landArea, expectedYield, marketPrice, predictedIncome } = req.body;

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
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
