const classDb = require("./classPromise");

const Classes = {
    async create(req, res, next){
        const queryText = {}
        try {
            const createdClass = await classDb.create(queryText);
            return res.status(201).json(createdClass);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_students(req, res, next){
        const queryText = {};
        try {
            const foundClasses = await classDb.find(queryText);
            return res.status(200).json(foundClasses);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_students_json(req, res, next){
        const queryText = {};
        try {
            const foundclasses = await classDb.find(queryText);
            return res.status(200).json(foundClasses);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_one_student(req, res, next){
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
    async edit_student(req, res, next){
        const queryText = {
            _id: req.params.class_id
        }
        try {
            const editedClass = await classDb.findOne(queryText);
            return res.status(200).json(editedClass);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async update_students(req, res, next){
        const queryText = {
            _id: req.params.class_id
        }
        const updateText = {}
        try {
            const updatedClass = await classDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(updatedClass);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async delete_student(req, res, next){
        const queryText = {
            _id: req.params.class_id
        }
        try {
            const deletedClass = await classDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(deletedClass);
        }catch(error){
            return res.status(400).send(error);
        }
    }
}