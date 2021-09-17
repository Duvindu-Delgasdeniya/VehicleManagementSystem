import React,{useState} from "react"
import axiosfrom  from "axios";
import axios from "axios";


export default function AddEmployee(){

    const [name,setName] = useState("");

    const [age,setAge] = useState("");

    const [address,setAddress] = useState("");

    const [nicnumber,setNICNumber] = useState("");

    const [gender,setGender] = useState("");

    const [email,setEmail] = useState("");

    const [Mobilenumber,setMobileNumber] = useState("");

    const [jobtype,setJobType] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newEmployee = {

            name,

            age,

            address,

            nicnumber,

            gender,

            email,

            Mobilenumber,

            jobtype
        }


        axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
            alert("Employee Added")

        }).catch((err)=>{
            alert(err)
        })


    }

    return(

        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">

                    <label for="name">Employee Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Employee Name"
                    onChange={(e)=>{

                        setName(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="age">Employee Age</label>
                    <input type="text" class="form-control" id="age" placeholder="Enter Employee Age"
                    onChange={(e)=>{

                        setAge(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="address">Employee Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter Employee Address"
                    onChange={(e)=>{

                        setAddress(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="nic number">Employee NIC Number</label>
                    <input type="text" class="form-control" id="nic number" placeholder="Enter Employee NIC Number"
                    onChange={(e)=>{

                        setNICNumber(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="gender">Employee Gender</label>
                    <input type="text" class="form-control" id="gender" placeholder="Enter Employee Gender"
                    onChange={(e)=>{

                        setGender(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="email">Employee Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter Employee Email"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="mobile number">Employee Mobile Number</label>
                    <input type="text" class="form-control" id="mobile number" placeholder="Enter Employee Mobile Number"
                    onChange={(e)=>{

                        setMobileNumber(e.target.value);

                    }}/>
                    
                </div>

                <div className="form-group">

                    <label for="job type">Job Type</label>
                    <input type="text" class="form-control" id="job type" placeholder="Enter Employee Job Type"
                    onChange={(e)=>{

                        setJobType(e.target.value);

                    }}/>
                    
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>    

    )
}