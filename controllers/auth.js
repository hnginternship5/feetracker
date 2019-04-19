const bcrypt = require('bcrypt');
const schoolDb = require("./promise").SchoolDb;
const userDb = require("./promise").UserDb;
const passport  = require("passport");
const validateSchool = require("../validation/school");
const validateUser = require("../validation/user");

const Auth = {
    async register(req, res, next) {
        var schoolId = null;
        try {
            const { school_name, school_address, school_currency, first_name, last_name, email, password  } = req.body;

            // Validate and create the administrator's school
            const newSchool = {
                name: school_name,
                address: school_address,
                currency: school_currency
            };
            const { isValid, errors } = validateSchool(newSchool);
            if (!isValid)
                res.status(400).send({ errors: errors });
            else {
                var school = await schoolDb.create(newSchool);
                schoolId = school._id;
                
                const newUser = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    school: schoolId,
                    password: password
                };

                const { isValid, errors } = validateUser(newUser);
                if (!isValid) {
                    schoolDb.findOneAndDelete({ _id: schoolId });
                    res.status(400).send({ errors: errors });
                }
                else {
                    const existingUser = await userDb.findOne({ email: email });

                    if (existingUser) {
                        schoolDb.findOneAndDelete({ _id: schoolId });
                        res.status(400).send({ 
                            errors: {
                                email: "Email address already exists"
                            }
                        });
                    }
                    else {
                        //Hash password
                        var hash = bcrypt.hashSync(password, 10);
                        newUser.password = hash;
                        
                        const user = await userDb.create(newUser); //Create user and return user
                        user.school.name = school_name;
                        user.school.address = school_address;
                        user.school.currency = school_currency
                        res.status(201).send(user.toJSON());
                    }
                }
            }
        }
        catch(error) {
            console.log(error);
            if (schoolId != null)
                schoolDb.findOneAndDelete({ _id: schoolId });
            res.status(500).json({ errors: error.message });
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