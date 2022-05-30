const docControl = require("../controller/doctorController");
const express = require("express");
const dataR = require("../controller/dataController");
const router = express.Router();
router
  .route("/doc")
  .get(docControl.getUserInfo)
  .post(docControl.createUser)
  .delete(docControl.deleteUser);
router.route("/doc/data").post(dataR.createData).get(docControl.getAllDocs);
router.route("/doc/:email/comment").post(docControl.createComment);

module.exports = router;
