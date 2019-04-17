const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
    {
        school_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "School"
        },
        name: {
            type: String,
            required: true
        },
        isArm: {
            type: Boolean,
            required: true,
            default: false
        },
        parent_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: false,
            default: null
        }
    }
);
module.exports = mongoose.model("Class", classSchema);