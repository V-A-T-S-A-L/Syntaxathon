const express = require("express");
const { farmerSignup, farmerLogin } = require("../controllers/farmerController");

const router = express.Router();

router.post("/signup", farmerSignup);
router.post("/login", farmerLogin);

module.exports = router;
