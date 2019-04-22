const mongoose = require('mongoose');

const { Schema } = mongoose;

const termSchema = new Schema({
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
  },
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  fee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fee',
  },
});
module.exports = mongoose.model('Term', termSchema);
