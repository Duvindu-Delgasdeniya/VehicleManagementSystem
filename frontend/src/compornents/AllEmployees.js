import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function AllEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        
        function getEmployees(){

            axios.get("http://localhost:8070/employee/").then((res) => {
                
                setEmployees(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getEmployees();
    }, [])

    return(
        <div className="container">
            <h1>All AllEmployees</h1>

        </div>
    )
}