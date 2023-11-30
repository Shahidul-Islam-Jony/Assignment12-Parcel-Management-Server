const express = require("express");
const singleUser = require("../../api/singleUser/singleUser");
const router = express.Router();

router.get('/users',singleUser)

module.exports = router