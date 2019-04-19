const mongoose = require('mongoose');

const  Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  currency: {
    type: String,
  },
});

module.exports = mongoose.model('School', schoolSchema);
