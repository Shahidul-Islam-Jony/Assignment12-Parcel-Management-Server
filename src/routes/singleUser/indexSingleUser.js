const express = require("express");
const singleUser = require("../../api/singleUser/singleUser");
const router = express.Router();

router.get('/health/users',singleUser)

module.exports = router