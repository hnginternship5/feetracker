const { Strategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/users');

module.exports = function (passport) {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET || 'DragonBeastSecret'
    };

    passport.use(new Strategy(opts, (payload, done) => {
        User.findById(payload.id)
            .then(user => {
                if(user){
                    return done(null, {
                        id: user.id,
                        name: user.first_name + " " + user.last_name,
                        email: user.email,
                    });
                }
                return done(null, false);
            }).catch(err => console.error(err));
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

}