const bcrypt = require("bcryptjs");
const schoolDb = require("./promises").SchoolsDb;
const userDb = require("./promises").UsersDb;
const passport  = require("passport");
const validateSchool = require("../validation/school");
const validateUser = require("../validation/user");

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
                            userDb.findOne({ email: email })
                                .then(existingUser => {
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
                                });
                        }

                    });
            }
        }
        catch(error) {
            res.status(500).json({ errors: error });
        }
    },

    async login(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err) }
            if (!user) {
              return res.status(400).send({ message: info.message })
            }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.status(200).send({ user: user });
            });
          })(req, res, next);
    },

    async logout(req, res, next) {
        req.logout();
        res.status(200).send({ message: "Logout successful" });
    }
}

module.exports = Auth;