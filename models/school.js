const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const  Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

schoolSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

schoolSchema.methods.toJSON = function() {
  return {
      name: this.name,
      email: this.email,
      username: this.username
  };
};

module.exports = mongoose.model('School', schoolSchema);
