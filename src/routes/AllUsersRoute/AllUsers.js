const express = require("express");
const allUsers = require("../../api/AllUsersApi/AllUsersApi");
const router = express.Router();

router.get('/allUsers/:type', allUsers)

module.exports = router