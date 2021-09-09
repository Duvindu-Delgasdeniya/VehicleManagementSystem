const Vehicle = require("../models/vehicle");

exports.add = (req, res) => {
    
    const vehicle = new Vehicle({
        vehicleOwner: req.body.vehicleOwner,
        vehicleType: req.body.vehicleType,
        vehicleModel: req.body.vehicleModel,
        ManufacherYear: req.body.ManufacherYear,
        LicensePlateNumber: req.body.LicensePlateNumber,
        vehicleRate: req.body.vehicleRate,
        Discription: req.body.Discription,
    });

    vehicle.save().then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Vehicle."
        });
    });

};

exports.get = (req, res) => {
    Vehicle.find()
        .then( vehicle => {
            res.status(200).send(vehicle);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching the data."
            });
        });

};

exports.update = (req, res) => {

    if (req.body.id == null || req.body.id == undefined) {
        res.status(400).send({
            message: "ID can not be empty!"
        });
        return;
    }

    const {  vehicleOwner, vehicleType, vehicleModel, ManufacherYear, LicensePlateNumber, vehicleRate, Discription } = req.body;
    console.log(req.body);
    
    Vehicle.findOne({_id : req.body.id }, (err, foundVehicle) => {
        if(err) return res.status(401).send(err);

        if(!foundVehicle) return res.status(404).send("Vehicle not found");

        if(vehicleOwner){
            foundVehicle.vehicleOwner = req.body.vehicleOwner;
        }
        if(vehicleType){
            foundVehicle.vehicleType = req.body.vehicleType;
        }
        if(vehicleModel){
            foundVehicle.vehicleModel = req.body.vehicleModel;
        }
        if(ManufacherYear){
            foundVehicle.ManufacherYear = req.body.ManufacherYear;
        }
        if(LicensePlateNumber){
            foundVehicle.LicensePlateNumber = req.body.LicensePlateNumber;
        }
        if(vehicleRate){
            foundVehicle.vehicleRate = req.body.vehicleRate;
        }
        if(Discription){
            foundVehicle.Discription = req.body.Discription;
        }
      

        foundVehicle.save((err, savedVehicle) => {
            if(err) return res.status(401).send(err);

            if(!savedVehicle) return res.status(404).send("Not saved");

            return res.status(200).send(savedVehicle);
        });
    });

};

exports.delete = async (req, res) => {
    
    if (req.params.id == null || req.params.id == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    await Vehicle.findOneAndDelete({ _id: req.params.id })
    .then( result => {

        if (!result) {
            throw new Error('No record found')
        }

        res.status(200).send({
            message: "Deleted successfully"
        });
    
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while deleting the data."
        });
    });   
   
}

exports.getOne = async (req, res) => {

    console.log(req);

    try {
        const rom = await Vehicle.findOne({ _id: req.params.id });
        return res.status(200).send({
            data: rom
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            error: error
        })
    }

}


exports.getOneByName = async (req, res) => {

    console.log(req);

    try {
        const rom = await Vehicle.findOne({ name : req.params.id });
        return res.status(200).send({
            data: rom
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            error: error
        })
    }

}

