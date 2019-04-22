const bcrypt = require('bcrypt');
const schoolDb = require("./promise").SchoolDb;
const passport  = require("passport");

const Auth = {
    async register(req, res, next) {
        try {
            const { name, email, password  } = req.body;

            const existingSchool = await schoolDb.findOne({ email: email });

            if (existingSchool)  {
                res.status(400).send({
                    errors: [
                        "A school with this email address already exists"
                    ]
                });
            }
            else {
                var hash = bcrypt.hashSync(password, 10);

                const newSchool = {
                    name: name,
                    email: email,
                    password: hash
                };

                const school = await schoolDb.create(newSchool);
                res.status(201).send(school.toJSON());
            }
        }
        catch(error) {
            console.log(error);
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
              return res.status(200).send({ user });
            });
          })(req, res, next);
    },

    async logout(req, res, next) {
        req.logout();
        res.status(200).send({ message: "Logout successful" });
    }
}

module.exports = Auth;