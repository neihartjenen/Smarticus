const passport = require("passport");
var bCrypt = require('bcrypt-nodejs');
const { func } = require("prop-types");

module.exports = function (passport, auth){
    var Auth = auth;
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
            function (req, email, password, done){
                var generateHash = function (password){
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                }
                Auth.findOne({
                    where: {
                        email:email
                    }
                }).then(function (user){
                    if (user){
                        return done( null, false, {
                            message: 'That email is already in use'
                        });
                    } else {
                        var userPassword = generateHash(password);
                        var data = {
                            email: email,
                            password: userPassword,
                            username: req.body.username
                        };
                        Auth.create(data).then (function (newUser, created){
                            if(!newUser){
                                return done(null, false);
                            }
                            if (newUser){
                                return done(null, newUser);
                            }
                        });
                    }
                });
            }
    ));
}

// Local Signin

passport.use('local-signin', new LocalStrategy(
    { usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    function (req, username, password, done){
        var Auth = auth;
        var isValidPassword = function (userpass, password){
            return bCrypt.compareSync(password, userpass);
        }
        console.log("logged to", username)
        Auth.findOne({
            where: {
                username:username
            }
        }).then(function (user){
            console.log(user)
            if (!user){
                return done(null, false,{
                    message: 'Incorrect password.'
                });
            }
            var userInfo = user.get();
            return done(null, userinfo);
        }).catch(function (err){
            console.log("Error:", err);
            return done(null, false, {
                message:'Something went wrong with your Signin'
            });
        });
    }

));

//Serialize User

passport.serializeUser(function (auth, done){
    done(null, auth.id);
});

//Deserialize User

passport.deserializeUser(function (id, done){
    Auth.findById(id).then(function (user){
        if (user){
            done(null, user.get());
        }
        else {
            done(user.errors, null);
        }
    });
});