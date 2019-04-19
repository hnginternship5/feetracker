const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    school_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    term_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Term',
    },
    amount_paid: {
      type: Number,
      default: 0.00,
    },
    amount_owed: {
      type: Number,
    },
  }
);
module.exports = mongoose.model('Class', accountSchema);
