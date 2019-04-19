const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userDb = require("./promises").UsersDb;
const schoolDb = require("./promises").SchoolsDb;
const validateSchool = require("../validation/school");
const validateUser = require("../validation/user");

const passwordSecret = process.env.SECRET || 'DragonBeastSecret';

const Auth = {
    async register(req, res, next) {
        try {
            const { school_name, school_type, first_name, last_name, email, password  } = req.body;

            // Validate and create the administrator's school
            const newSchool = {
                name: school_name,
                type: school_type
            };
            const { isValid, errors } = validateSchool(newSchool);
            if (!isValid)
                res.status(400).send({ errors: errors });
            else {
                schoolDb.create(newSchool)
                    .then(school => {
                        // Validate the user
                        const newUser = {
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            school: school._id,
                            password: password
                        };
        
                        const { isValid, errors } = validateUser(newUser);
                        if (!isValid)
                            res.status(400).send({ errors: errors });
                        else {
                            //Validate duplicate email addresses
                            var existingUser = userDb.findOne({ email: email });
                            if (existingUser) {
                                res.status(400).send({ 
                                    errors: {
                                        email: "Email address already exists"
                                    }
                                });
                            }
                            else {
                                //Hash password
                                bcrypt.hash(password, 10, function(err, hash) {
                                    if (err)
                                        res.status(500).send(err);
                                    else {
                                        newUser.password = hash;
                                        userDb.create(newUser) //Create user and return user
                                            .then(user => {
                                                user.school.name = school_name;
                                                user.school.type = school_type;
                                                res.status(201).send(user.toJSON());
                                            });
                                    }
                                });
                            }
                        }

                    });
            }
        }
        catch(error) {
            res.status(500).json({ errors: error });
        }
    },

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            userDb.findOne({ email: email })
                .then(user => {
                    if (!user)
                        res.status(400).send({ message: "Invalid username or password" });
                    else {
                        bcrypt.compare(password, user.password, function(err, result) {
                            if (err) throw err;

                            if (!result)
                                res.status(400).send({ message: "Invalid username or password" });
                            else {
                                var expirationDate = new Date();
                                expirationDate.setMonth(expirationDate.getMonth() + 3);

                                jwt.sign({
                                    email: user.email,
                                    id: user._id,
                                }, passwordSecret, { 
                                    expiresIn:  parseInt(expirationDate.getTime() / 1000, 10)
                                }, function(err, token) {
                                    if (err) throw err;

                                    res.status(200).send({
                                        token: token,
                                        user: user.toJSON()
                                    });
                                });
                            }
                        });
                    }
                });
        }
        catch(error) {
            res.status(500).json({ errors: error });
        }
    }
}

module.exports = Auth;