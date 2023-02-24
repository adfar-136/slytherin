var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var passport = require("passport")
var userModel = require("./database")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    userModel.findOne({id: jwt_payload.id},function(err, user) {
        console.log(jwt_payload)
        if (err) {
            return done(err, false);
        }
        if (user) {
            console.log(user)
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));