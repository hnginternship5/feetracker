const classes = require("../models/classes");
/**
 * @param {string} text
 * @returns {object} return all
 */
class ClassesDb {
    static find(param){
        return new Promise((resolve, reject) => {
            classes.find(param)
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
            classes.create(param)
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
            classes.findOne(param)
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
            classes.findOneAndUpdate(param, text)
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
            classes.findOneAndDelete(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = ClassesDb;

