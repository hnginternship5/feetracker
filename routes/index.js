const express = require('express');
const router = express.Router();

// import controllers
var Test = require('../controllers/test');

// welcome page
router.get('/', Test.first);

module.exports = router;


// Updated Router here
/* GET home page. */
//router.get("/", Home.index);
router.get("/", function(req, res, next) {
  JobModel.find(function(err, jobs) {
    res.render("index", { title: "Remote Job Alert", contents: jobs });
  });
});


// GET About us page
router.get("/about", Home.aboutUs);

//Admin Page
router.get('/admin', Home.admin);

router.post('/admin', function(req, res, next){
	if (req.body.username && req.body.password) {
    Admin.authenticate(req.body.username, req.body.password, function (error, admin) {
      if (error || !admin) {
        var err = new Error('Wrong username or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.adminId = admin._id;
        return res.redirect('/managefees');
      }
    });
}
});


// GET Contact us page
router.get("/contact", Home.contactUs);

// GET FAQS us page
router.get("/faqs", Home.faqs);