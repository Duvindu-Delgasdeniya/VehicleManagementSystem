const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success");
});

const vehicleRouter = require("./routes/vehicles.js");
app.use("/vehicle",vehicleRouter);

const employeeRouter = require("./routes/employees.js");
app.use("/employee",employeeRouter);

const requestRouter = require("./routes/requests.js");
app.use("/request",requestRouter);

const statVehical = require("./routes/stats.route");
app.use("/vehicalStat",statVehical);

const vehicleSide = require("./routes/VehicleSide.route");
app.use("/vehicleSide",vehicleSide);


app.listen(PORT,() => {
    console.log(`server is up and running on port number: ${PORT} `);
});

