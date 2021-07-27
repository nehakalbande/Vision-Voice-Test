// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../models/user')

// passport.serializeUser(function (user, done) {
//     console.log("serial", user)
//     done(null, user.googleId);
// });

// passport.deserializeUser((id, done) => {
//     console.log(id)
//     User.findOne({ 'googleId': id }, (err, user) => {
//         console.log("deserial", user)
//         done(err, user)
//     })
// });

// passport.use(new GoogleStrategy({
//     clientID: "269158377921-heaqmb9v5lgrdjqjp2tv9lk3g7m0k7c2.apps.googleusercontent.com",
//     clientSecret: "FYRzIIwQbvCk0iPTLawpaTqc",
//     callbackURL: "http://103.206.55.30.xip.io:4000/auth/google/callback"
// },
//     function (accessToken, refreshToken, profile, done) {
//         User.findOne({ googleId: profile.id }, (err, user) => {
//             if (err)
//                 return done(err);
//             if (user)
//                 return done(null, user);
//             else {
//                 var newUser = new User({
//                     googleId: profile.id,
//                     email: profile.emails.value,
//                     name: profile.displayName,
//                 });

//                 newUser.save((err) => {
//                     if (err)
//                         throw err;
//                     else
//                         return done(null, newUser);
//                 });
//             }
//         })

//     }
// ));

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20");
// const User = require("../models/user");

// passport.serializeUser((user, done) => {
//   done(null, user.user.googleId);
// });

// passport.deserializeUser((id, done) => {
//   User.findOne({ googleId: id }, (err, user) => {
//     done(err, { user, token });
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID:
//         "325540256074-mt85kdj8chpns1d704128k19au5fd68p.apps.googleusercontent.com",
//       clientSecret: "KNi5z-y2a0l0E6tA12f5Eppu",
//       callbackURL: "http://103.206.55.30.xip.io:4000/auth/google/callback",
//     },
//     (token, refreshToken, profile, done) => {
//       User.findOne({ googleId: profile.id }, (err, user) => {
//         if (err) throw err;
//         if (user) done(err, { user, token });
//         else {
//           var newUser = new User({
//             googleId: profile.id,
//             email: profile.emails[0].value,
//             name: profile.displayName,
//           });

//           newUser.save((err) => {
//             if (err) throw err;
//             else done(err, { user, token });
//           });
//         }
//       });
//     }
//   )
// );

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "571187632357-3l3trq74gffoknimaljmt7c2sjarenjp.apps.googleusercontent.com",
      clientSecret: "OicOQc80dHAQkakQRnXW2ihA",
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
