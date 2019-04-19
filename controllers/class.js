const classDb = require("./classPromise");
const classModel = require("../models/school");
const feeModel = require("../models/fee");

const Classes = {
    async create(req, res, next){
        const queryText = {
            name: req.body.name
        };
        try {
            const createdClass = await classDb.create(queryText);
            return res.status(201).json(createdClass);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_classes(req, res, next){
        const queryText = {};
        try {
            const foundClasses = await classDb.find(queryText);
            return res.status(200).json(foundClasses);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_parent_classes(req, res, next){
        const queryText = {
            parent_id: null
        };
        try {
            const foundClasses = await classDb.find(queryText);
            return res.status(200).json(foundClasses);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_one_class(req, res, next){
        const queryText = {
           _id: req.params.class_id 
        }
        try {
            const foundClass = await classDb.findOne(queryText);
            return res.status(200).json(foundClass);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    // async get_class_arms(req, res, next) {
    //     const queryText = {
    //         isArm: true,
    //         parent_id: req.params.class_id
    //     };
    //     try {
    //         const foundArms = await classDb.findOne(queryText);
    //         return res.status(200).json(foundArms);
    //     }catch(error){
    //         return res.status(400).send(error);
    //     }
    // },
    async update_class(req, res, next){
        const queryText = {
            _id: req.params.class_id
        }
        const updateText = {
            school_id: req.body.school_id,
            name: req.body.name,
            fee: req.body.fee
        };
        try {
            const updatedClass = await classDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(updatedClass);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async delete_class(req, res, next){
        const queryText = {
            _id: req.params.class_id
        }
        try {
            const deletedClass = await classDb.findOneAndDelete(queryText);
            return res.status(200).json(deletedClass);
        }catch(error){
            return res.status(400).send(error);
        }
    }, 
};

module.exports = Class;
