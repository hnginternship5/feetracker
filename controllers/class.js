const _ = require('lodash');
const classDb = require('./promise').ClassDb;

const Class = {
  async create(req, res) {
    try {
      const queryText = _.omit(req.body, ['school_id']);
      queryText.school_id = req.user.school.id;
      const createdClass = await classDb.create(queryText);
      return res.status(201).send({
        message: 'Class successfully created',
        data: createdClass,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_classes(req, res) {
    try {
      const queryText = { school_id: req.user.school.id };
      const foundClasses = await classDb.find(queryText);
      return res.status(200).send({
        message: 'Classes retrieved successfully',
        data: foundClasses,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_parent_classes(req, res) {
    try {
      const queryText = {
        parent_id: null,
        school_id: req.user.school.id,
      };
      const foundClasses = await classDb.find(queryText);
      return res.status(200).json(foundClasses);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_class(req, res) {
    try {
      const queryText = {
        _id: req.params.id,
        school_id: req.user.school.id,
      };
      const foundClass = await classDb.findOne(queryText);
      if (!foundClass) return res.status(404).send({ message: 'Class not found' });
      return res.status(200).send({
        message: 'Class retrieved successfully',
        data: foundClass,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_class_arms(req, res) {
    try {
      const queryText = {
        isArm: true,
        parent_id: req.params.id,
        school_id: req.user.school.id,
      };
      const foundArms = await classDb.findOne(queryText);
      return res.status(200).json(foundArms);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_class(req, res) {
    try {
      const queryText = {
        _id: req.params.id,
        school_id: req.user.school.id,
      };
      const updateData = _.omit(req.body, ['school_id']);
      const updatedClass = await classDb.findOneAndUpdate(queryText, updateData);
      if (!updatedClass) return res.status(404).send({ message: 'Class not found' });
      return res.status(200).send({
        message: 'Class updated successfully',
        data: updatedClass,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_class(req, res) {
    try {
      const queryText = {
        _id: req.params.id,
        school_id: req.user.school.id,
      };
      const deletedClass = await classDb.findOneAndDelete(queryText);
      if (!deletedClass) return res.status(404).send({ message: 'Class not found' });
      return res.status(200).send({
        message: 'Class successfully deleted',
        data: deletedClass,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Class;
