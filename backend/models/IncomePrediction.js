const mongoose = require("mongoose");

const incomePredictionSchema = new mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmer",
        required: true
    },
    cropType: {
        type: String,
        required: true
    },
    landArea: {
        type: Number,
        required: true
    },
    expectedYield: {
        type: Number,
        required: true
    },
    marketPrice: {
        type: Number,
        required: true
    },
    predictedIncome: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("IncomePrediction", incomePredictionSchema);
