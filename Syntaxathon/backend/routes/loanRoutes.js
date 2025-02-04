const express = require("express");
const { createLoan, makePayment, getLoans } = require("../controllers/loanController");

const router = express.Router();

router.post("/create", createLoan);  // Create a new loan
router.post("/pay", makePayment);    // Make a payment on a loan
router.get("/list", getLoans);       // Get all loans for the logged-in farmer

module.exports = router;
