const path = require("path");
const fs = require("fs");

var api_key = 'd79d63126502f0d15e98e0865652ba10-7caa9475-388729451';
var domain = 'sandbox787f8f71d66e4b36ae02fef66edd2005.mialgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });


var sendEmail = function sendEmail(res, receiver) {

    const filename = path.normalize(path.join(__dirname, "../email-templates/email.hbs"));
    const emailTemplate = fs
      .readFileSync(filename)
      .toString()
      .replace(/{{email}}/, receiver);
	const data = {
		from: "FeeTracker <noreply@feetracker.com>",
		to: receiver,
		subject: "FeeTracker Subscription",
		html: emailTemplate.replace(/{{email}}/, receiver)
    };
    
    mailgun.messages().send(data, (error, body) => {
		if (error) {
			console.log('Email not sent')

            return res.status(400).json({
                status: 'error',
                message: 'email not sent',
            });
		} else {
            console.log('Email sent');
            return res.status(200).json({
                status: 'success',
                message: 'email sent',
            });

		}
    })
}
module.exports = sendEmail;
