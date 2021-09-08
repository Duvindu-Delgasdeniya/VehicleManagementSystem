const Vehicle = require("../models/vehicle");


exports.vehicleStats = async (req, res) => {
    try{
        Vehicle.find()
        .then( Vehicle => {
            const len = Vehicle.length;
            console.log(len);

            let Car = 0;
            let Motorbike = 0;
            let Van = 0;
            let Bus = 0;

            Vehicle.forEach(element => {
                if(element.vehicleType == 'Car'){
                    Car++;
                }
                else if(element.vehicleType == 'Van'){
                    Motorbike++;
                } 
                else if(element.vehicleType == 'Bus'){
                    Van++;
                }
                else if(element.vehicleType == 'Motorbike'){
                    Bus++;
                }
            });

            res.status(200).send({
                count: len,
                Car: Car,
                Motorbike: Motorbike,
                Van: Van,
                Bus: Bus,
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching the data."
            });
        });
    }
    catch(err){
        console.log(err);
        return res.status(401).send({
            error: err
        });
    }
}



