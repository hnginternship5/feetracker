const students = require('../models/student');

/**
 * @param {string} text
 * @returns {object} return all
 */
class StudentDb {
    static find(param){
        return new Promise((resolve, reject) => {
            students.find(param)
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
            students.create(param)
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
            students.findOne(param)
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
            students.findOneAndUpdate(param, text)
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
            students.findOneAndDelete(param)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = StudentDb;

