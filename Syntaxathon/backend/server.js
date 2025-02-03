const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const farmerRoutes = require("./routes/farmerRoutes"); // Import Routes

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", methods: "GET,POST" })); // CORS settings

// Debugging: Check environment variables
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT);

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173", // Your React app URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  };
  
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if connection fails
  });

// Use farmer routes
app.use("/api/farmers", farmerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
