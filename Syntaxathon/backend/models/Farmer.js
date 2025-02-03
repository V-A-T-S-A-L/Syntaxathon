const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  email: { type: String },
  password: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  aadharOrKisaanId: { type: String, unique: true, required: true },
  age: { type: Number, required: true },
}, { timestamps: true });

const Farmer = mongoose.model("Farmer", farmerSchema);
module.exports = Farmer;
