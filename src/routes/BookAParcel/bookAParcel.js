const express = require("express");
const bookParcel = require("../../api/BookAParcelApi/bookAParcelApi");
const router = express.Router();

router.post('/bookAParcel', bookParcel)

module.exports = router