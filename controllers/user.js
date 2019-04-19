const userDb = require("./promises").UsersDb;

const Users = {
    async create(req, res, next){
        const queryText = {}
        try {
            const createdUser = await userDb.create(queryText);
            return res.status(201).json(createdUser);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_users(req, res, next){
        const queryText = {};
        try {
            const foundUsers = await userDb.find(queryText);
            return res.status(200).json(foundUsers);
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_one_user(req, res, next){
        const queryText = {
           _id: req.params.user_id 
        }
        try {
            const foundUser = await userDb.findOne(queryText);
            return res.status(200).json(foundUser);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async update_user(req, res, next){
        const queryText = {
            _id: req.params.user_id
        }
        const updateText = {}
        try {
            const updatedUser = await userDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(updatedUser);
        }catch(error){
            return res.status(400).send(error);
        }
    },
    async delete_user(req, res, next){
        const queryText = {
            _id: req.params.user_id
        }
        try {
            const deletedUser = await userDb.findOneAndDelete(queryText);
            return res.status(200).json(deletedUser);
        }catch(error){
            return res.status(400).send(error);
        }
    }
}