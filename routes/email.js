var express = require('express');
var Email = require('../controllers/email');
var router = express.Router();

router.post('/', Email.sendEmail);

module.exports = router;
