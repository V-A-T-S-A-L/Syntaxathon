const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "FarmerProfile", required: true }, // Linking to FarmerProfile
  farmType: { type: String, required: true }, // Crop Farming, Dairy, Poultry, etc.
  landSize: { type: Number, required: true }, // In acres or hectares
  cropsGrown: [{ type: String }], // Array of crops (e.g., ["Wheat", "Rice"])
  livestock: [{ type: String }], // Array of livestock (e.g., ["Cows", "Goats"])
  machinery: [{ type: String }], // Array of owned machinery (e.g., ["Tractor", "Irrigation Pump"])
}, { timestamps: true });

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
