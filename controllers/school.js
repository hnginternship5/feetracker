const schoolDb = require("./promises").SchoolsDb;

const School = {
  async create(req, res) {
    const queryText = req.body;
    try {
      const createdSchool = await schoolDb.create(queryText);
      return res.status(201).json(createdSchool);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_schools(req, res) {
    const queryText = {};
    try {
      const foundSchools = await schoolDb.find(queryText);
      return res.status(200).json(foundSchools);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_school(req, res) {
    const queryText = {
      _id: req.params.school_id,
    };
    try {
      const foundSchool = await schoolDb.findOne(queryText);
      return res.status(200).json(foundSchool);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_school(req, res) {
    const queryText = {
      _id: req.params.school_id,
    };
    const updateData = req.body;
    try {
      const updatedSchool = await schoolDb.findOneAndUpdate(queryText, updateData);
      return res.status(200).json(updatedSchool);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_school(req, res) {
    const queryText = {
      _id: req.params.class_id,
    };
    try {
      const deletedSchool = await schoolDb.findOneAndDelete(queryText);
      return res.status(200).json(deletedSchool);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = School;
