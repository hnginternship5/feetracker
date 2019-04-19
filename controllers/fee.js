const feeDb = require("./feePromise");
const classModel = require("../models/classes");
const schoolModel = require("../models/schools");
const termModel = require("../models/term");

const Fees = {
    async create(req, res, next){
        const queryText = {
            amount: req.body.amount,
            class_id: req.body.class_id,
            school_id: req.body.school_id,
            term: req.body.term
        };
        try {
            const createdFee = await feeDb.create(queryText);
            return res.status(201).json(createdFee);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_fees(req, res, next){
        const queryText = {};
        try {
            const foundFees = await feeDb.find(queryText);
            return res.status(200).json(foundFees);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_one_fee(req, res, next){
        const queryText = {
           _id: req.params.fee_id 
        }
        try {
            const foundFee = await feeDb.findOne(queryText);
            return res.status(200).json(foundFee);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async update_fee(req, res, next){
        const queryText = {
            _id: req.params.fee_id
        }
        const updateText = {
            amount: req.body.amount,
            class_id: req.body.class_id
        };
        try {
            const updatedFee = await feeDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(updatedFee);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async delete_fee(req, res, next){
        const queryText = {
            _id: req.params.fee_id
        }
        try {
            const deletedFee = await feeDb.findOneAndDelete(queryText);
            return res.status(200).json(deletedFee);
        }catch(error){
            return res.status(400).send(error);
        }
    }
}