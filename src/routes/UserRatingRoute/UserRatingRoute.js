const express = require('express');
const userRating = require('../../api/UserRatingApi/UserRatingApi');
const router = express.Router();

router.post('/health/userRating', userRating)

module.exports = router