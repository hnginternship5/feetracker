const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School'
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.toJSON = function() {
    return {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        school: {
            id: this._id,
            name: this.school.name,
            address: this.school.address,
            currency: this.school.currency,
        }
    };
};

module.exports = mongoose.model("User", userSchema);