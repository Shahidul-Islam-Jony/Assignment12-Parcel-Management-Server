const express = require('express');
const updateBooking = require('../../api/UpdateBookingParcel/updateBookingApi');
const router = express.Router();

router.patch('/updateBooking/:id', updateBooking)

module.exports = router