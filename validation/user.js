const validator = require("validator");

function validateUser(data) {
    var errors = {};

    if (validator.isEmpty(data.first_name)) {
        errors.first_name = "First name is required";
    }
    if (validator.isEmpty(data.last_name)) {
        errors.last_name = "Last name is required";
    }   
    if (validator.isEmpty(data.email)) {
        errors.email = "Email address is required";
    }
    else if (!validator.isEmail(data.email)) {
        errors.email = "Email address is not valid";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    return {
        isValid: Object.keys(errors).length == 0,
        errors: errors
    };
}

module.exports = validateUser;