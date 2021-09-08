const express = require('express');
const router = express.Router();

const statsController = require('./../controllers/Stat.controller');
router.get('/getvehiclaStat', statsController.vehicleStats);


module.exports = router;