// import models
const Sample = require('./sample');

class Example {
	/**
	 * @param {string} text
	 * @returns {object} Return all
	 */
	static create(param) {
		return new Promise((resolve, reject) => {
			Sample.create(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static find(param) {
		return new Promise((resolve, reject) => {
			Sample.find(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOne(param) {
		return new Promise((resolve, reject) => {
			Sample.findOne(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOneAndUpdate(param, text) {
		return new Promise((resolve, reject) => {
			Sample.findOneAndUpdate(param, text)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
	static findOneAndDelete(param) {
		return new Promise((resolve, reject) => {
			Sample.findOneAndDelete(param)
				.then(res => {
					resolve(res);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
}

module.exports = {
	Example,
};
