const schools = require("../models/schools");
/**
 * @param {string} text
 * @returns {object} return all
 */
class SchoolsDb {
    static find(param){
        return new Promise((resolve, reject) => {
            schools.find(param)
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
            schools.create(param)
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
            schools.findOne(param)
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
            schools.findOneAndUpdate(param, text)
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
            schools.findOneAndDelete(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = SchoolsDb;

