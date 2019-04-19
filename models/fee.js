const mongoose = require('mongoose');

const { Schema } = mongoose;

const feeSchema = new Schema({
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  amount: {
    type: Number,
    required: true,
  },
  term: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Term',
  },
});
module.exports = mongoose.model('Fee', feeSchema);
