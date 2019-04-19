const classDb = require('./promise').ClassDb;

const Class = {
  async create(req, res) {
    const queryText = req.body;
    try {
      const createdClass = await classDb.create(queryText);
      return res.status(201).json(createdClass);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_classes(req, res) {
    const queryText = {};
    try {
      const foundClasses = await classDb.find(queryText);
      return res.status(200).json(foundClasses);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_parent_classes(req, res) {
    const queryText = {
      parent_id: null,
    };
    try {
      const foundClasses = await classDb.find(queryText);
      return res.status(200).json(foundClasses);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_class(req, res) {
    const queryText = {
      id: req.params.class_id,
    };
    try {
      const foundClass = await classDb.findOne(queryText);
      return res.status(200).json(foundClass);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_class_arms(req, res) {
    const queryText = {
      isArm: true,
      parent_id: req.params.class_id,
    };
    try {
      const foundArms = await classDb.findOne(queryText);
      return res.status(200).json(foundArms);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_class(req, res) {
    const queryText = {
      id: req.params.class_id,
    };
    const updateData = req.body;
    try {
      const updatedClass = await classDb.findOneAndUpdate(queryText, updateData);
      return res.status(200).json(updatedClass);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_class(req, res) {
    const queryText = {
      id: req.params.class_id,
    };
    try {
      const deletedClass = await classDb.findOneAndDelete(queryText);
      return res.status(200).json(deletedClass);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Class;
