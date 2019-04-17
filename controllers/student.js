const studentDb = require('./studentPromise');

const Student = {
    async create(req, res, next){
        const queryText = {}
        try {
            const createdStudent = await studentDb.create(queryText);
            return res.status(201).json(createdStudent);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_students(req, res, next){
        const queryText = {};
        try {
            const foundStudents = await studentDb.find(queryText);
            return res.status(200).json(foundStudents);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_students_json(req, res, next){
        const queryText = {};
        try {
            const foundStudents = await studentDb.find(queryText);
            return res.status(200).json(foundStudents);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_one_student(req, res, next){
        const queryText = {
           _id: req.params.student_id 
        }
        try {
            const foundStudent = await studentDb.findOne(queryText);
            return res.status(200).json(foundStudent);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async edit_student(req, res, next){
        const queryText = {
            _id: req.params.student_id
        }
        try {
            const editedStudent = await studentDb.findOne(queryText);
            return res.status(200).json(editedStudent);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async update_students(req, res, next){
        const queryText = {
            _id: req.params.student_id
        }
        const updateText = {}
        try {
            const updatedStudent = await studentDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(updatedStudent);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async delete_student(req, res, next){
        const queryText = {
            _id: req.params.student_id
        }
        try {
            const deletedStudent = await studentDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(deletedStudent);
        }catch(error){
            return res.status(400).send(error);
        }
    }
    
}