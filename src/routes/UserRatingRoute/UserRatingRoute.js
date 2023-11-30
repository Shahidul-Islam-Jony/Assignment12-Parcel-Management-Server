const express = require('express');
const userRating = require('../../api/UserRatingApi/UserRatingApi');
const router = express.Router();

router.post('/userRating', userRating)

module.exports = router