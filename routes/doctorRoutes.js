const docControl = require("../controller/doctorController");
const express = require("express");
const dataR = require("../controller/dataController");
const router = express.Router();
router.route("/doc").get(docControl.getUserInfo).post(docControl.createUser);
router.route("/doc/data").post(dataR.createData);
module.exports = router;
