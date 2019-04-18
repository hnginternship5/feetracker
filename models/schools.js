const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['Primary', 'Secondary'],
            default: 'Primary'
        }
    }
);

module.exports = mongoose.model("School", schoolSchema);