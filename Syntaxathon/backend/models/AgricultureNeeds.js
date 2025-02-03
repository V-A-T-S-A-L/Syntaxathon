const mongoose = require("mongoose");

const AgricultureNeedsSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
  landSize: { type: Number, required: true },
  cropType: { type: String, required: true },
  soilType: { type: String, required: true },
  season: { type: String, required: true },
  fertilizer: { type: String },
  water: { type: String },
  seeds: { type: String },
  pesticide: { type: String },
  nutrients: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AgricultureNeeds", AgricultureNeedsSchema);
