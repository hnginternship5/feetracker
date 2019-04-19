const express = require('express');

const router = express.Router();
// import controllers
const StudentController = require('../controllers/student');
const ClassController = require('../controllers/class');
const FeeController = require('../controllers/fee');
const TermController = require('../controllers/term');
var HomeController = require('../controllers/home');
var AuthController = require('../controllers/auth');


// welcome page
router.get('/', HomeController.index);

router.get('/login', (req, res) => {
  res.render('signin');
});

router.get('/register', (req, res) => {
  res.render('signup');
});

router.get('/forgotpassword', (req, res) => {
  res.render('forgot');
});
router.get('/dashboard', (req, res) => {
  res.render('dashboard/index');
});

router.get('/dashboard/settings', (req, res) => {
  res.render('dashboard/settings');
});

router.get('/dashboard/students', (req, res) => {
  res.render('dashboard/students');
});

router.get('/about', function(req,res,next){
	res.render('about');
});

// API routes

// Authentication routes
router.post('/api/register', AuthController.register); // School administrator registration

router.post('/api/login', AuthController.login); // School administrator login

router.get('/api/logout', AuthController.logout);

// Passport authentication test confirmation
router.get('/api/profile', isAuthenticated, (req, res) => {
	res.status(200).send(req.user);
});

module.exports = router;

//Authentication middleware
function isAuthenticated(req, res, next) {
	if(req.isAuthenticated())
	   return next();
	else
	   return res.status(401).send({
		 error: 'User not authenticated'
	   });
}

// Updated Router here
/* GET home page. */
//router.get("/", Home.index);
router.get("/", function(req, res, next) {
 Home.find(function(err, fees) {
    res.render("index", { title: "School_fees_tracker"});
  });
});

// Student Routes
router.post('/student', StudentController.create);
router.get('/student', StudentController.get_one_student);
router.get('/student', StudentController.get_all_students);

// Class Routes
router.post('/class', ClassController.create);
router.get('/class', ClassController.get_one_class);
router.get('/classes', ClassController.get_all_classes);

// Fee Routes
router.post('/fee', FeeController.create);
router.get('/fee', FeeController.get_one_fee);
router.get('/fees', FeeController.get_all_fees);

// Term Routes
router.post('/term', TermController.create);
router.get('/term', TermController.get_one_term);
router.get('/terms', TermController.get_all_terms);

module.exports = router;
