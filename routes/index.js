const express = require("express");
const router = express.Router();
const { home } = require("../controllers/indexControllers");
const {addUser } = require("../controllers/userControllers");
router.get("/", home);
router.post("/add-user",addUser);

module.exports = router;