const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = { Sample };
