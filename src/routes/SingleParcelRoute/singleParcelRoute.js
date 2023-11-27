const express = require("express");
const modifyParcel = require("../../api/SingleProductApi/singleProductApi");
const router = express.Router();

router.patch('/health/modifyParcel/:id',modifyParcel)

module.exports = router