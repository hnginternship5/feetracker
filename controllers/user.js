const _ = require('lodash');
const userDb = require("./promise").UserDb;

const User = {
    async create(req, res, next){
        const queryText = _.omit(req.body,['school_id']);
        try {
            const createdUser = await userDb.create(queryText);
            return res.status(201).send({
                message: 'User successfully created',
                data: createdUser,
              });
        } catch(error){
            return res.status(400).send(error);
        }
    },
    async get_all_users(req, res, next){
        const queryText = { school_id: req.user.school.id };
        try {
            const foundUsers = await userDb.find(queryText);
            return res.status(200).send({
                message: 'Users retrieved successfully',
                data: foundUsers,
              });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async get_one_user(req, res, next){
        const queryText = {
           _id: req.params.id,
           school_id: req.user.school.id,
        }
        try {
            const foundUser = await userDb.findOne(queryText);
            if (!foundUser) return res.status(404).send({ message: 'User not found' });
            return res.status(200).send({
                message: 'User retrieved successfully',
                data: foundUser,
              });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async update_user(req, res, next){
        const queryText = {
            _id: req.params.id,
            school_id: req.user.school.id,
        }
        const updateData = _.omit(req.body, ['school_id']);
        try {
            const updatedUser = await userDb.findOneAndUpdate(queryText, updateData);
            if (!updatedUser) return res.status(404).send({ message: 'User not found' });
            return res.status(200).send({
                message: 'User updated successfully',
                data: updatedUser,
              });
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async delete_user(req, res, next){
        const queryText = {
            _id: req.params.id,
            school_id: req.user.school.id,
        }
        try {
            const deletedUser = await userDb.findOneAndDelete(queryText);
            if (!deletedUser) return res.status(404).send({ message: 'User not found' });
            return res.status(200).send({
                message: 'User successfully deleted',
                data: deletedUser,
              });
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

module.exports = User;