const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
  amount: { type: Number, required: true },
  remainingBalance: { type: Number, required: true },
  nextPaymentDue: { type: Date, required: true },
  interestRate: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Loan", LoanSchema);
