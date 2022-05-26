const docControl = require("../controller/doctorController");
const router = require("./userRoutes");
const dataR = require("../controller/dataController");
router.route("/doc").get(docControl.getUserInfo).post(docControl.createUser);
router.route("/doc/data").post(dataR.createData);
// module.exports = router;
