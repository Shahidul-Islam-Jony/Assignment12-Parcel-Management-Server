const express = require("express");
const myRatings = require("../../api/MyRatingsApi/MyRatingsApi");
const router = express.Router();

router.get('/myRatings/:id', myRatings)

module.exports = router