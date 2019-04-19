const classes = require("../models/classes");
const fees = require("../models/fees");
const schools = require("../models/schools");
const students = require('../models/student');
//const user = require('../models/user');
/**
 * @param {string} text
 * @returns {object} return all
 */

 //classes promise
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

//fees promise
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

//school promise
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

//student promise
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
module.exports = {ClassesDb,
                  FeesDb,
                  SchoolsDb,
                  StudentDb
};
