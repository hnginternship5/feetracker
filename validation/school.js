const validator = require("validator");

const schoolTypes = ['secondary', 'primary'];

function validateSchool(data) {
    var errors = {};

    if (validator.isEmpty(data.name)) {
        errors.school_name = "School name is required";
    }
    if (validator.isEmpty(data.type)) {
        errors.school_type = "School type is required";
    }
    else if (!schoolTypes.includes(data.type.toLowerCase())) {
        errors.school_type = "School type is not valid";
    }

    return {
        isValid: Object.keys(errors).length == 0,
        errors: errors
    };
}

module.exports = validateSchool;