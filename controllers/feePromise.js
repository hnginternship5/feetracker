const fees = require("../models/fees");
/**
 * @param {string} text
 * @returns {object} return all
 */
class FeesDb {
    static find(param){
        return new Promise((resolve, reject) => {
            fees.find(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    static create(param){
        return new Promise((resolve, reject) => {
            fees.create(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    static findOne(param){
        return new Promise((resolve, reject) => {
            fees.findOne(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * @param {string} param
     * @param {string} text
     * @return {object} returns updated object
     */
    static findOneAndUpdate(param, text){
        return new Promise((resolve, reject) => {
            fees.findOneAndUpdate(param, text)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    static findOneAndDelete(param){
        return new Promise((resolve, reject) => {
            fees.findOneAndDelete(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = FeesDb;

