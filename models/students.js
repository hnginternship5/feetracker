const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        guardian_name: {
            type: String,
            required: true
        },
        guardian_number: {
            type: Number,
            required: true
        },
        guardian_email: {
            type: String,
            required: true
        },
        amount_paid: {
            type: Number,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        reg_number: {
            type: String,
            unique: true,
            required: true
        }
        // reg_number: {
        //     type: String,
        //     unique: true,
        //     required: true
        // }
    }
);
module.exports = mongoose.model("Student", studentSchema);