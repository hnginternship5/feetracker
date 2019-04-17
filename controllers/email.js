var cron = require('node-cron');
var sendEmailFunction = require('../config/emailFunction');

const emailDb = require('../models/promise').EmailDb;

const Email = {
	async sendEmail(req, res, next) {
		try {
			var task = cron.schedule('* * * * Monday', () =>  {
                var receiver = req.body.email;

                sendEmailFunction(res, receiver) 
                    console.log('STARTED task');
            })
		} catch (err) {
			return res.status(400).send(error);
		}
	},
};
module.exports = Email;
