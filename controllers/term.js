const termDb = require('./promise').TermDb;

const Term = {
  async create(req, res) {
    const queryText = req.body;
    try {
      const createdTerm = await termDb.create(queryText);
      return res.status(201).json(createdTerm);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_terms(req, res) {
    const queryText = {};
    try {
      const foundTerms = await termDb.find(queryText);
      return res.status(200).json(foundTerms);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_term(req, res) {
    const queryText = {
      id: req.params.termId,
    };
    try {
      const foundTerm = await termDb.findOne(queryText);
      return res.status(200).json(foundTerm);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_term(req, res) {
    const queryText = {
      id: req.params.termId,
    };
    const updateData = req.body;
    try {
      const updatedTerm = await termDb.findOneAndUpdate(queryText, updateData);
      return res.status(200).json(updatedTerm);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_term(req, res) {
    const queryText = {
      id: req.params.termId,
    };
    try {
      const deletedTerm = await termDb.findOneAndDelete(queryText);
      return res.status(200).json(deletedTerm);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Term;
