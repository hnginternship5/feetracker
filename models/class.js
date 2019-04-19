const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema(
  {
    school_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School',
    },
    name: {
      type: String,
      required: true,
    },
    fee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fee',
    },
  }
);
module.exports = mongoose.model('Class', classSchema);
