const docControl = require("../controller/doctorController");
const express = require("express");
const router = express.Router();

router.route("/doc").get(docControl.getUserInfo).post(docControl.createUser);

module.exports = router;
