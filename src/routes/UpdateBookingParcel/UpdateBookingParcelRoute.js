const express = require('express');
const updateBooking = require('../../api/UpdateBookingParcel/updateBookingApi');
const router = express.Router();

router.patch('/health/updateBooking/:id', updateBooking)

module.exports = router