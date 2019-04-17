// import whenever interaction is needed for db(models)
const test = require('../models/promise').Test;

const Test = {
	async first(req, res, next) {
		try {
			return res.status(200).render('index');
		} catch (error) {
			return res.status(400).send(error);
		}
	},
};

module.exports = Test;
