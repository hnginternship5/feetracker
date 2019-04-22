const _ = require('lodash');
const studentDb = require('./promise').StudentDb;

const Student = {
  async create(req, res) {
    console.log(req);
    try {
      const queryText = _.omit(req.body, ['school_id']);
      queryText.school_id = req.user.id;
      console.log(queryText); 
      const createdStudent = await studentDb.create(queryText);
      return res.status(201).send({
        message: 'Student Created',
        data: createdStudent,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_students(req, res) {
    const queryText = { school_id: req.user.id };
    try {
      const foundStudents = await studentDb.find(queryText);
      return res.status(200).send({
        message: 'Students successfully retrieved',
        data: foundStudents,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_students_json(req, res) {
    const queryText = { school_id: req.user.id };
    try {
      const foundStudents = await studentDb.find(queryText);
      return res.status(200).json({
        message: 'Student successfully retrieved',
        data: foundStudents,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_student(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.id,
    };
    try {
      const foundStudent = await studentDb.findOne(queryText);
      if (!foundStudent) return res.status(404).send({ message: 'Student not found' });
      return res.status(200).send({
        message: 'Student successfully retrieved',
        data: foundStudent,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_student(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.id,
    };
    const updateData = _.omit(req.body, ['school_id']);
    try {
      const updatedStudent = await studentDb.findOneAndUpdate(queryText, updateData);
      if (!updatedStudent) return res.status(400).send({ message: 'Student not found' });
      return res.status(200).send({
        message: 'Student successfully updated',
        data: updatedStudent,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_student(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.id
    };
    try {
      const deletedStudent = await studentDb.findOneAndDelete(queryText);
      if (!deletedStudent) return res.status(404).send({ message: 'Student not found' });
      return res.status(200).send({
        message: 'Student successfully deleted',
        data: deletedStudent,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

}

module.exports = Student;
