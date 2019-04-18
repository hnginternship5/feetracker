const express = require('express');
const router = express.Router();


// import controllers
var Test = require('../controllers/test');


// welcome page
router.get('/', Test.first);

router.get('/login', function(req, res, next){
	res.render('signin');
});

router.get('/register', function(req, res, next){
	res.render('signup');
});

router.get('/forgotpassword', function(req, res, next){
	res.render('forgot');
});

router.get('/dashboard', function(req, res, next){
	res.render('dashboard/index');
});

router.get('/dashboard/settings', function(req, res, next){
	res.render('dashboard/settings');
});

router.get('/dashboard/students', function(req, res, next){
	res.render('dashboard/students');
});

router.get('/about', function(req,res,next){
	res.render('about');
})
module.exports = router;


// Updated Router here
/* GET home page. */
//router.get("/", Home.index);
router.get("/", function(req, res, next) {
 Test.find(function(err, fees) {
    res.render("index", { title: "School_fees_tracker"});
  });
});


