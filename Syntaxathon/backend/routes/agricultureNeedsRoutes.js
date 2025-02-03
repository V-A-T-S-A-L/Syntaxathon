const express = require("express");
const router = express.Router();
const { saveAgricultureNeeds } = require("../controllers/agricultureNeedsController");

router.post("/agriculture-needs", saveAgricultureNeeds);

module.exports = router;
