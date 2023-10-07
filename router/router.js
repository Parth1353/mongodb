const express = require("express");
const signup = require("../controller/signup");
const getinfo = require("../controller/getinfo");
const upinfo = require("../controller/upinfo");
const deinfo = require("../controller/deinfo");
const lol = require("../controller/stats");
const router = express.Router();

router.route("/signup").post(signup);
router.route("/lol").get(lol);
router.route("/getinfo/:rollnumber").get(getinfo);
router.route("/upinfo/:userName").patch(upinfo);
router.route("/deinfo/:userName").delete(deinfo);


module.exports = router;


