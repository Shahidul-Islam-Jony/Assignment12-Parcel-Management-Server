const express = require('express');
const myDeliveryParcels = require('../../api/MyDeliveryParcelApi/MyDeliveryParcelApi');
const router = express.Router();

router.get('/myDeliveryParcels/:id', myDeliveryParcels)

module.exports = router