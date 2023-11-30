const express = require("express");
const myParcel = require("../../api/MyParcelApi/myParcelApi");
const router = express.Router();

router.get('/myParcel', myParcel)

module.exports = router
