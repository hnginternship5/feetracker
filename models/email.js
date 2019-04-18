const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
});

const EmailSchema = mongoose.model('EmailSchema', emailSchema);

module.exports = { EmailSchema };
