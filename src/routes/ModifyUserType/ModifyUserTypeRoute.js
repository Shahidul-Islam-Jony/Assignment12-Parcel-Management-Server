const express = require("express");
const modifyUser = require("../../api/ModifyUserTypeApi/ModifyUserTypeApi");
const router = express.Router();

router.patch('/modifyUser/:id', modifyUser)

module.exports = router