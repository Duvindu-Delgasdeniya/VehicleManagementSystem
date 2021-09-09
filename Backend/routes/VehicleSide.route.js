const express = require('express');
const router = express.Router();

//routs for vehicle count

const vehicleController = require('../controllers/VehicleSide.controller');

router.post('/add', vehicleController.add);

router.get('/get', vehicleController.get);

router.post('/update', vehicleController.update);

router.delete('/delete/:id', vehicleController.delete);

router.get('/getOne/:id', vehicleController.getOne);

router.get('/getOneByName/:id', vehicleController.getOneByName);

module.exports = router