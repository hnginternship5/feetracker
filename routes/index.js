const express = require('express');
const router = express.Router();
var Home = require("../controllers/home");

// import controllers
var Test = require('../controllers/test');


// welcome page
router.get('/', Test.first);

module.exports = router;


// Updated Router here
/* GET home page. */
//router.get("/", Home.index);
router.get("/", function(req, res, next) {
 Test.find(function(err, fees) {
    res.render("index", { title: "School_fees_tracker"});
  });
});


// GET About us page
router.get("/about", Home.aboutUs);


// GET Contact us page
router.get("/contact", Home.contactUs);

// GET FAQS us page
router.get("/faqs", Home.faqs);