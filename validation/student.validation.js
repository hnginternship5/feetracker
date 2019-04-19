const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
 
const sanitizeAndValidateStudents = function(req, res, next){
    req.checkBody('first_name').trim()
        .isLength({ min:1 }).withMessage('First name is a required field.')
        .isAlphanumeric().withMessage('First name must be alphanumeric.');

    req.checkBody('last_name').trim()
        .isLength({ min:1 }).withMessage('Last name is a required field.')
        .isAlphanumeric().withMessage('Last name must be alphanumeric.');

    req.checkBody('guardian_name').trim()
        .isLength({ min:1 }).withMessage('Guardian name is a required field.')
        .isAlphanumeric().withMessage('Guardian name must be alphanumeric.');

    req.checkBody('guardian_email').trim()
        .isEmail().withMessage('Must be a valid email address');

    req.checkBody('guardian_number').trim()
        .isLength({ min:1 }).withMessage('Guardian number is a required field.')
        .isNumeric().withMessage('Guardian number Must be a number');
    
    req.checkBody('amount_paid').trim()
        .isLength({ min:1 }).withMessage('Amount paid is a required field.')
        .isNumeric().withMessage('Amount paid must be a number');

    req.checkBody('class').trim()
        .isLength({ min:1 }).withMessage('Class is a required field.')
        .isAlphanumeric().withMessage('Class name must be alphanumeric.');

    req.checkBody('reg_number').trim()
        .isLength({ min:1 }).withMessage('Reg number is a required field.')
        .isNumeric().withMessage('Reg number must be a number');
    
    sanitizeBody('first_name').escape();
    sanitizeBody('last_name').escape();
    sanitizeBody('guardian_name').escape();
    sanitizeBody('guardian_email').escape();
    sanitizeBody('guardian_number').escape();
    sanitizeBody('amount_paid').escape();
    sanitizeBody('class').escape();
    sanitizeBody('reg_number').escape();

    
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

module.exports.sanitizeAndValidateStudents = sanitizeAndValidateStudents;