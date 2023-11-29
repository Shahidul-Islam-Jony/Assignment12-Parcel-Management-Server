const express = require('express');
const myDeliveryParcels = require('../../api/MyDeliveryParcelApi/MyDeliveryParcelApi');
const router = express.Router();

router.get('/health/myDeliveryParcels/:id', myDeliveryParcels)

module.exports = router