import express from "express";
const app = express();
import mongoose from "mongoose"
// import admin from "./config/firebase-admin-config.js";
import cors from "cors";
import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    credentials: true,
  })
);
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





app.post('/sessionLogin', (req, res)=>{
  console.log("Entered");
  const idToken = "" + req.body.token;
  console.log(idToken);
  // const csrfToken = "" + req.body.csrfToken;
  // // Guard against CSRF attacks.
  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send('UNAUTHORIZED REQUEST!');
  //   return;
  // }
  
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie('session', sessionCookie, options);
        res.end(JSON.stringify({ status: 'success' }));
        console.log("Success!");
      }
    ).catch(
      (error) => {
        console.log(error);
        res.status(401).send('UNAUTHORIZED REQUEST!');
      });
});
app.post('/profile', (req, res) => {
  const sessionCookie = req.cookies.session || '';
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((decodedClaims) => {
      serveContentForUser('/profile', req, res, decodedClaims);
    })
    .catch((error) => {
      // Session cookie is unavailable or invalid. Force user to login.
      res.redirect('/login');
    });
});
app.post('/sessionLogout', (req, res) => {
  console.log('Cleared!');
  res.clearCookie('session');
  res.redirect('/login');
});

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));
