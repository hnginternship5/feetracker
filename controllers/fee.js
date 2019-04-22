const _ = require('lodash');
const feeDb = require('./promise').FeeDb;

const Fee = {
  async create(req, res) {
    const queryText = _.omit(req.body, ['school_id']);
    queryText.school_id = req.user.school.id;
    try {
      const createdFee = await feeDb.create(queryText);
      return res.status(201).send({
        message: 'Fee successfully created',
        data: createdFee,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_all_fees(req, res) {
    const queryText = { school_id: req.user.school.id };
    try {
      const foundFees = await feeDb.find(queryText);
      return res.status(200).send({
        message: 'Fees retrieved successfully',
        data: foundFees,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async get_one_fee(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id
    };
    try {
      const foundFee = await feeDb.findOne(queryText);
      if (!foundFee) return res.status(404).send({ message: 'Fee not found' });
      return res.status(200).send({
        message: 'Fee successfully retrieved',
        data: foundFee,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async update_fee(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id
    };
    const updateData = _.omit(req.body, ['school_id']);
    try {
      const updatedFee = await feeDb.findOneAndUpdate(queryText, updateData);
      if (!updatedFee) return res.status(404).send({ message: 'Fee not found' });
      return res.status(200).send({
        message: 'Fee successfully updated',
        data: updatedFee,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete_fee(req, res) {
    const queryText = {
      _id: req.params.id,
      school_id: req.user.school.id
    };
    try {
      const deletedFee = await feeDb.findOneAndDelete(queryText);
      if (!deletedFee) return res.status(404).send({ message: 'Fee not found' });
      return res.status(200).send({
        message: 'Fee successfully deleted',
        data: deletedFee,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Fee;
