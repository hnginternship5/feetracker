const schoolDb = require("./promise").SchoolDb;

const School = {
  async create(req, res) {
    const queryText = req.body;
    try {
      const createdSchool = await schoolDb.create(queryText);
      return res.status(201).send({
        message: 'School successfully created',
        data: createdSchool,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_schools(req, res) {
    const queryText = {};
    try {
      const foundSchools = await schoolDb.find(queryText);
      return res.status(200).send({
        message: 'Schools retrieved successfully',
        data: foundSchools,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_school(req, res) {
    const queryText = {
      _id: req.params.id,
    };
    try {
      const foundSchool = await schoolDb.findOne(queryText);
      if (!foundSchool) return res.status(404).send({ message: 'School not found' });
      return res.status(200).send({
        message: 'School retrieved successfully',
        data: foundSchool,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_school(req, res) {
    const queryText = {
      _id: req.params.id,
    };
    const updateData = req.body;
    try {
      const updatedSchool = await schoolDb.findOneAndUpdate(queryText, updateData);
      if (!updatedSchool) return res.status(404).send({ message: 'School not found' });
      return res.status(200).send({
        message: 'School updated successfully',
        data: updatedSchool,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_school(req, res) {
    const queryText = {
      _id: req.params.id,
    };
    try {
      const deletedSchool = await schoolDb.findOneAndDelete(queryText);
      if (!deletedSchool) return res.status(404).send({ message: 'School not found' });
      return res.status(200).send({
        message: 'School successfully deleted',
        data: deletedSchool,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = School;
