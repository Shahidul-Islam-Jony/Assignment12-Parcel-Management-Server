const express = require('express');
const deliveryAndRating = require('../../api/deliveryAndRatingApi/deliveryAndRatingApi');
const router = express.Router();

router.patch('/addDeliveryCount', deliveryAndRating)

module.exports = router