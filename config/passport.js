const LocalStrategy = require('passport-local');
const schoolDb = require("../controllers/promise").SchoolDb;

module.exports = function (passport) {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
            schoolDb.findOne({ email: username })
                .then(user => {
                    if (!user)
                        return done(null, false, { message: 'Incorrect username or password' });
                    else {
                        if (!user.validatePassword(password)) {
                            return done(null, false, { message: 'Incorrect username or password' });
                        }
                        else {
                            console.log("Validated user successfully");
                            return done(null, user);
                        }
                    }
                });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        schoolDb.findOne({ _id: id })
                .then(user => {
                    done(null, user.toJSON());
                });
    });
}