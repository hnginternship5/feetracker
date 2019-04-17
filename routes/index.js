const express = require("express");
const router = express.Router();

// import controllers
var Test = require("../controllers/test");


// welcome page
router.get("/", Test.first);



module.exports = router;