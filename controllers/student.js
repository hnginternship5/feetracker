const studentDb = require('./studentPromise');

const Student = {
    async create(req, res, next){
        const queryText = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            guardian_name: req.body.guardian_name,
            guardian_number: req.body.guardian_number,
            guardian_email: req.body.guardian_email,
            amount_paid: req.body.amount_paid,
            class: req.body.class,
            reg_number:  req.body.reg_number
        };
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
        };
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
        };
        const updateText = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            guardian_name: req.body.guardian_name,
            guardian_number: req.body.guardian_number,
            guardian_email: req.body.guardian_email,
            amount_paid: req.body.amount_paid,
            class: req.body.class,
            reg_number:  req.body.reg_number
        };
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
        };
        try {
            const deletedStudent = await studentDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(deletedStudent);
        }catch(error){
            return res.status(400).send(error);
        }
    }
    
}

module.exports = students;