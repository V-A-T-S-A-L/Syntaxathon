const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Farmer = require("../models/Farmer");

// ✅ Farmer Signup
const farmerSignup = async (req, res) => {
    try {
        const { name, phone, email, password, district, state, aadharOrKisaanId, age } = req.body;

        // Check required fields
        if (!name || !phone || !password || !district || !state || !aadharOrKisaanId || !age) {
            return res.status(400).json({ error: "All required fields must be filled." });
        }

        // Check if farmer already exists
        const existingFarmer = await Farmer.findOne({ $or: [{ phone }, { aadharOrKisaanId }] });
        if (existingFarmer) {
            return res.status(400).json({ error: "Farmer with this phone number or Aadhar/Kisaan ID already exists." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new farmer
        const newFarmer = new Farmer({
            name, phone, email, password: hashedPassword, district, state, aadharOrKisaanId, age
        });

        await newFarmer.save();
        res.status(201).json({ message: "Signup Successful!" });

    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ error: "Server error during signup" });
    }
};

// ✅ Farmer Login
const farmerLogin = async (req, res) => {
    try {
        const { phone, password } = req.body;

        // Find the farmer
        const farmer = await Farmer.findOne({ phone });
        if (!farmer) {
            return res.status(404).json({ error: "Farmer not found" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, farmer.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: farmer._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token });
    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ error: "Server error during login" });
    }
};

module.exports = { farmerSignup, farmerLogin };
