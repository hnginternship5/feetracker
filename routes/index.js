const express = require('express');

const router = express.Router();
// import controllers
const StudentController = require('../controllers/student');
const ClassController = require('../controllers/class');
const FeeController = require('../controllers/fee');
const TermController = require('../controllers/term');
const AuthController = require('../controllers/auth');
const studentValidations = require('../validation/student.validation.js')
const HomeController = require('../controllers/home');


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

router.get('/pricing', (req, res) => {
  res.render('pricing');
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
router.post('/register', AuthController.register); // School administrator registration

router.post('/login', AuthController.login); // School administrator login

router.get('/logout', AuthController.logout);

// Passport authentication test confirmation
router.get('/profile', isAuthenticated, (req, res) => {
	res.status(200).send(req.user);
});

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
router.post('/student', isAuthenticated, StudentController.create);
router.get('/student/:id', isAuthenticated, StudentController.get_one_student);
router.get('/students', isAuthenticated, StudentController.get_all_students);
router.patch('/student/:id', isAuthenticated, StudentController.update_student);
router.delete('/student/:id', isAuthenticated, StudentController.delete_student);

// Class Routes
router.post('/class', isAuthenticated, ClassController.create);
router.get('/class/:id', isAuthenticated, ClassController.get_one_class);
router.get('/classes', isAuthenticated, ClassController.get_all_classes);
router.patch('/class/:id', isAuthenticated, ClassController.update_class);
router.delete('/class/:id', isAuthenticated, ClassController.delete_class);

// Fee Routes
router.post('/fee', isAuthenticated, FeeController.create);
router.get('/fee/:id', isAuthenticated, FeeController.get_one_fee);
router.get('/fees', isAuthenticated, FeeController.get_all_fees);
router.patch('/fee/:id', isAuthenticated, FeeController.update_fee);
router.delete('/fee/:id', isAuthenticated, FeeController.delete_fee);

// Term Routes
router.post('/term', isAuthenticated, TermController.create);
router.get('/term/:id', isAuthenticated, TermController.get_one_term);
router.get('/terms', isAuthenticated, TermController.get_all_terms);
router.patch('/term/:id', isAuthenticated, TermController.update_term);
router.delete('/term/:id', isAuthenticated, TermController.delete_term);

module.exports = router;
