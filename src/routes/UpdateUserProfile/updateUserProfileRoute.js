const express = require("express");
const updateUser = require("../../api/UpdateUserProfileApi/UpdateUserProfileApi");
const router = express.Router();

router.patch('/updateUser/:id',updateUser)

module.exports = router