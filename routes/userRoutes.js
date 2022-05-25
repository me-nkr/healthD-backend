const express = require("express");
const router = express.Router();
const users = require("../controller/userController");

router.route("/users").get(users.getUserInfo).post(users.createUser);
router.route("/users/:email").get(users.getUserInfo);

module.exports = router;
