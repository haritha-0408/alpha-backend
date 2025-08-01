const express = require("express");
const router = express.Router();
const { home } = require("../controllers/indexControllers");

router.get("/", home);

module.exports = router;