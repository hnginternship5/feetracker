const express = require('express');

const router = express.Router();
const StudentController = require('../controllers/student');
const ClassController = require('../controllers/class');
const FeeController = require('../controllers/fee');
const TermController = require('../controllers/term');
const studentValidations = require('../validation/student.validation.js')

// import controllers
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
router.get('/dashboard', (req, res) => {
  res.render('dashboard/index');
});

router.get('/dashboard/settings', (req, res) => {
  res.render('dashboard/settings');
});

router.get('/dashboard/students', (req, res) => {
  res.render('dashboard/students');
});

router.get('/about', (req, res) => {
  res.render('about');
});

// Student Routes
router.post('/student', studentValidations.sanitizeAndValidateStudents,  StudentController.create);
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
