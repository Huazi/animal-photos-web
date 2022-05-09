const { verifySignUp } = require("../middleware");
const auth_controller = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { validateInput } = require("../middleware/validate-input");

module.exports.auth_middleware = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
};

  router.post(
    "/signup",
    [
      check("email", "Email is required").isEmail(),
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    auth_controller.signup
  );

  router.post("/signin",  [
    check("password", "Password is required").not().isEmpty(),
    validateInput,
  ],
  auth_controller.signin);

module.exports.auth_router = router;
