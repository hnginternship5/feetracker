const Class = require('../models/class');
const Fee = require('../models/fee');
const School = require('../models/school');
const Student = require('../models/student');
/**
 * @param {string} text
 * @returns {object} return all
 */

// Class promise
class ClassDb {
  static find(param) {
    return new Promise((resolve, reject) => {
      Class.find(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(param) {
    return new Promise((resolve, reject) => {
      Class.create(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOne(param) {
    return new Promise((resolve, reject) => {
      Class.findOne(param)
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
  static findOneAndUpdate(param, text) {
    return new Promise((resolve, reject) => {
      Class.findOneAndUpdate(param, text)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOneAndDelete(param) {
    return new Promise((resolve, reject) => {
      Class.findOneAndDelete(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

// Fee promise
class FeeDb {
  static find(param) {
    return new Promise((resolve, reject) => {
      Fee.find(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(param) {
    return new Promise((resolve, reject) => {
      Fee.create(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOne(param) {
    return new Promise((resolve, reject) => {
      Fee.findOne(param)
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
  static findOneAndUpdate(param, text) {
    return new Promise((resolve, reject) => {
      Fee.findOneAndUpdate(param, text)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOneAndDelete(param) {
    return new Promise((resolve, reject) => {
      Fee.findOneAndDelete(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

// School promise
class SchoolDb {
  static find(param) {
    return new Promise((resolve, reject) => {
      School.find(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(param) {
    return new Promise((resolve, reject) => {
      School.create(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOne(param) {
    return new Promise((resolve, reject) => {
      School.findOne(param)
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
  static findOneAndUpdate(param, text) {
    return new Promise((resolve, reject) => {
      School.findOneAndUpdate(param, text)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOneAndDelete(param) {
    return new Promise((resolve, reject) => {
      School.findOneAndDelete(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

// Student promise
class StudentDb {
  static find(param) {
    return new Promise((resolve, reject) => {
      Student.find(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(param) {
    return new Promise((resolve, reject) => {
      Student.create(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOne(param) {
    return new Promise((resolve, reject) => {
      Student.findOne(param)
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
  static findOneAndUpdate(param, text) {
    return new Promise((resolve, reject) => {
      Student.findOneAndUpdate(param, text)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static findOneAndDelete(param) {
    return new Promise((resolve, reject) => {
      Student.findOneAndDelete(param)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
module.exports = {
  ClassDb,
  FeeDb,
  SchoolDb,
  StudentDb,
};
