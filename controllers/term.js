const _ = require('lodash');
const termDb = require('./promise').TermDb;

const Term = {
  async create(req, res) {
    try {
      const queryText = _.omit(req.body, ['school_id']);
      queryText.school_id = req.user.school.id;
      const createdTerm = await termDb.create(queryText);
      return res.status(201).send({
        message: 'Term created successfully',
        data: createdTerm,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_terms(req, res) {
    const queryText = { school_id: req.user.school.id };
    try {
      const foundTerms = await termDb.find(queryText);
      return res.status(200).send({
        message: 'Terms retrieved successfully',
        data: foundTerms,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_term(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id,
    };
    try {
      const foundTerm = await termDb.findOne(queryText);
      if (!foundTerm) return res.status(404).send({ message: 'Term not found' });
      return res.status(200).send({
        message: 'Term retrieved successfully',
        data: foundTerm,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_term(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id,
    };
    const updateData = _.omit(req.body,['school_id']);
    try {
      const updatedTerm = await termDb.findOneAndUpdate(queryText, updateData);
      if (!updatedTerm) return res.status(404).send({ message: 'Term not found' });
      return res.status(200).send({
        message: 'Term updated successfully',
        data: updatedTerm,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_term(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id
    };
    try {
      const deletedTerm = await termDb.findOneAndDelete(queryText);
      if (!deletedTerm) return res.status(404).send({ message: 'Term not found' });
      return res.status(200).send({
        message: 'Term successfully deleted',
        data: deletedTerm,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Term;
