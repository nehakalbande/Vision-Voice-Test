const router = require("express").Router();
const passport = require("passport");

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

router.get("/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate",
  });
});

router.get("/login/success", isLoggedIn, (req, res) => {
  // console.log(req)
  if (req.session.token) {
    res.cookie("token", req.session.token);
    res.json({
      status: "session cookie set",
    });
  } else {
    res.cookie("token", "");
    res.json({
      status: "session cookie not set",
    });
  }
  // res.send(req.user);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failed" }),
  function (req, res) {
    res.redirect(
      `http://localhost:3000?id=${req.user.googleId}&email=${req.user.email}&name=${req.user.name}`
    );
  }
);
router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("http:/localhost:3000/");
});

module.exports = router;
