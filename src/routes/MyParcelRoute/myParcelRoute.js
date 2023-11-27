const express = require("express");
const myParcel = require("../../api/MyParcelApi/myParcelApi");
const router = express.Router();

router.get('/health/myParcel', myParcel)

module.exports = router
