const userDb = require("./userPromise");

const User = {
    
    async createUser(req, res) {
        const { errors, isValid } = validateUserQueryText(/*@*/);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const queryText = {}
        try {
            const createdUser = await db.create(queryText);
            return res.status(201).json(createdUser);
        } catch (error) {
            return res.status(400).send(error);
        }
    },
    async get_user(req, res) {
        const queryText = {};
        try {
            const foundUser = await db.find(queryText);
            return res.status(200).render('user', { user: foundUser });
        } catch (error) {
            return res.status(400).send(error);
        }

    },
    async delete_user(req, res){
        const queryText = {};
        try {
            const deletedUser = await userDb.findOneAndUpdate(queryText, updateText);
            return res.status(200).json(deletedUser);
        }catch(error){
            return res.status(400).send(error);
        }
    }
}

module.exports = User;