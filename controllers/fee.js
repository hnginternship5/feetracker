const feeDb = require("./feePromise");

const Fees = {
    async create(req, res, next){
        const queryText = {}
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
        const updateText = {}
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