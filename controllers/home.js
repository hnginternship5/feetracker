// import whenever interaction is needed for db(models)
const home = require('../models/promise').Home;

const Home = {
	async first(req, res, next) {
		try {
			return res.status(200).render('index');
		} catch (error) {
			return res.status(400).send(error);
		}
	},
};

module.exports = Home;
