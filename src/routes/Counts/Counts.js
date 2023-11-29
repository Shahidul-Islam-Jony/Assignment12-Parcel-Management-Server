const express = require("express");
const counts = require("../../api/CountsApi/CountApi");
const router = express.Router();

router.get('/health/counts', counts)

module.exports = router