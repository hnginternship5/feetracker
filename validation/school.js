const validator = require("validator");

function validateSchool(data) {
    var errors = {};

    if (validator.isEmpty(data.name)) {
        errors.school_name = "School name is required";
    }
    if (validator.isEmpty(data.address)) {
        errors.school_address = "School address is required";
    }
    if (validator.isEmpty(data.currency)) {
        errors.school_currency = "School currency is required";
    }

    return {
        isValid: Object.keys(errors).length == 0,
        errors: errors
    };
}

module.exports = validateSchool;