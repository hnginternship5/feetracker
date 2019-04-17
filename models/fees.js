const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feeSchema = new Schema(
    {
        class_id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        },
        amount: {
            type: Number,
            required: true,
        }
    }
);
module.exports = mongoose.model("Fee", feeSchema);