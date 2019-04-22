const validator = require("validator");
const { sanitizeBody } = require('express-validator/filter');

const sanitizeAndValidateSchool = function(req, res, next) {
    req.checkBody('name').trim()
    .isLength({ min:1 }).withMessage('School name is a required field.');

    req.checkBody('email').trim()
        .isLength({ min:1 }).withMessage('School email address is a required field.')
        .isEmail().withMessage('School email address must be a valid email.');

    req.checkBody('password').trim()
        .isLength({ min:1 }).withMessage('Password is a required field.')
        .matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/).withMessage("Password be at least 8 characters, alphanumeric with at least one uppercase letter, and contain at least one special character");

    req.assert('password', 'Passwords do not match').equals(req.body.confirm_password);

    sanitizeBody('name').escape();
    sanitizeBody('email').escape();

    var errors = req.validationErrors();

    if (errors) {
        var response = { errors: [] };
        errors.forEach(function(err) {
            response.errors.push(err.msg);
        });
        res.statusCode = 400;
        return res.json(response);
    }
    return next();
}

module.exports = sanitizeAndValidateSchool;