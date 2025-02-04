const express = require("express");
const router = express.Router();
const { storePrediction } = require("../controllers/incomePredictionController");

// Store income prediction
router.post("/predict-income", storePrediction);

module.exports = router;
