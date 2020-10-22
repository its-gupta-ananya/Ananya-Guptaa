const express = require("express");
var router = express.Router();

const HController = require("../controller/homeController.js");
console.log("Home router loaded");

router.get('/', HController.home);
router.post('/Send-message', HController.Message);


module.exports = router;