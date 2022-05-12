const { authJwt } = require("../middleware");
const usertest_controller = require("../controllers/usertest.controller");
const express = require('express');
const router = express.Router();


  router.get("/all", usertest_controller.allAccess);

  router.get(
    "/user",
    [authJwt.verifyToken],
    usertest_controller.userBoard
  );

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    usertest_controller.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    usertest_controller.adminBoard
  );

module.exports.usertest_router = router;
