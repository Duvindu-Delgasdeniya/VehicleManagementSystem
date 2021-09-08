const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const employeeschema = new Schema({

    
    // Add Employee schema
    //testing 
    EmployeeName :{
        type :String,
        required:true

    },
    
    Age :{
        type :String,
        required:true
    },

    Address :{
        type :String,
        required:true
    },

    NICNumber :{
        type :String,
        required:true
    },

    Gender :{
        type :String,
        required:true
    },

    Email :{
        type :String,
        required:true
    },

    MobileNumber :{
        type :Number,
        required:true
    },

    JobType:{
        type :String,
        required:true
    },

}); 

const employee = mongoose.model("employee",employeeschema);

module.exports = employee;