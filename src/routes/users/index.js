const express = require("express");
const users = require("../../api/user/users");
const router = express.Router();

router.post('/users', users)

module.exports = router