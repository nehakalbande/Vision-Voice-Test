// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// // const passport = require("passport");
// // const cookieSession = require("cookie-session");
// const mongoose = require("mongoose");
// // const passportRoutes = require("./routes/passport-routes");
// // const visionRoutes = require("./routes/visionREST");
// // const auralRoutes = require("./routes/auralREST");
// // const cookieParser = require("cookie-parser");
// // const expressSession = require("express-session");
// // const authService = require("./Services/AuthService");

// mongoose
//   .connect(
//     "mongodb+srv://Blaze:B@laze@cluster0.qythv.mongodb.net/test?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(
//     () => {
//       console.log("connected to atlas");
//     },
//     (err) => console.log(err)
//   );

// app.use(
//   cors({
//     origin: "http://localhost:3000", // allow to server to accept request from different origin
//     credentials: true,
//   })
// );
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(
//   expressSession({
//     secret: "asdfa",
//     saveUninitialized: true,
//     resave: false,
//   })
// );
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["SECRECT KEY"],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );

// app.use(cookieParser());
// app.use(passport.initialize());

// app.get("/", (req, res) => {
//   console.log(req.session);
//   if (req.session.token) {
//     res.cookie("token", req.session.token);
//     res.json({
//       status: "session cookie set",
//     });
//   } else {
//     res.cookie("token", "");
//     res.json({
//       status: "session cookie not set",
//     });
//   }
// });

// app.get("/logout", (req, res) => {
//   req.logout();
//   req.session = null;
//   res.redirect("/");
// });
// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["https://www.googleapis.com/auth/userinfo.profile"],
//   })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:3000",
//   }),
//   (req, res) => {
//     console.log(req.user.token);
//     req.session.token = req.user.token;
//     console.log(req.user);
//     req.session.user = req.user.user;
//     req.session.save();
//     res.redirect("http://localhost:3000");
//   }
// );

// app.use("/vrest", visionRoutes);
// app.use("/arest", auralRoutes);

// app.get("/test", (req, res) => {
//   // req.session.test = 123
//   res.send(req.session);
// });
// app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Blaze:B@laze@cluster0.qythv.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => console.log("Connect to MongoDB Database!"),
    (err) => console.log(err)
  );
  

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    credentials: true,
  })
);

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));
