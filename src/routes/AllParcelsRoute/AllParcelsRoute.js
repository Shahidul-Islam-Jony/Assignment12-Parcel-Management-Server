const express = require('express');
const allParcels = require('../../api/AllParcelsApi/AllParcelsApi');
const router = express.Router();

router.get('/allParcels',allParcels)

module.exports = router