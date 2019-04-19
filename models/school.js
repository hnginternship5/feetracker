const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model('School', schoolSchema);
