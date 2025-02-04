const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true }, 
  farmType: { type: String, required: true }, 
  landSize: { type: Number, required: true }, 
  inventory: {
    crops: [{
      name: { type: String, required: true }, 
      yield: { type: Number, required: true },
      year: { type: Number, required: true }, 
    }],
    livestock: [{
      name: { type: String, required: true }, 
      count: { type: Number, default: 0 }, 
    }],
    machinery: [{
      name: { type: String, required: true },
      count: { type: Number, default: 0 }, 
    }]
  },
  monthlyFinance: {
    revenue: [{
      month: { type: String, required: true },
      amount: { type: Number, required: true }, 
    }],
    expenses: [{
      month: { type: String, required: true }, 
      amount: { type: Number, required: true }, 
    }]
  }
}, { timestamps: true });

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
