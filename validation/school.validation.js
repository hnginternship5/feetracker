const { check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
 
const sanitizeAndValidateSchools = function(req, res, next){
    req.checkBody('school_name').trim()
        .isLength({ min:1 }).withMessage('School name is a required field.')
        .isAlphanumeric().withMessage('School name must be alphanumeric.');

    req.checkBody('email').trim()
        .isLength({ min:1 }).withMessage('Email address is a required field.')
        .isAlphanumeric().withMessage('Email must be alphanumeric.');

    req.checkBody('password').trim()
        .isLength({ min:6 })
        .matches('[0-9]')
        .matches('[a-z]')
        .matches('[A-Z]')
        .matches('[&,$,!,#,%,@,*]')
        .custom((value, {req,loc,path})=>{
            if (value !==req.body.password2){
                return false;
            }else{
                return value;
            }
        }).withMessage("Password don't match");
    

    sanitizeBody('school_name').escape();
    sanitizeBody('email').escape();
    sanitizeBody('password').escape();
    sanitizeBody('password2').escape();
    // sanitizeBody('guardian_email').escape();
    // sanitizeBody('guardian_number').escape();
    

    
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

module.exports.sanitizeAndValidateSchools = sanitizeAndValidateSchools;