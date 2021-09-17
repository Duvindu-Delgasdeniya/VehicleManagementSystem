
import './App.css';
// import Header from './compornents/header';
// import AddVehicle from './compornents/AddVehicle';
// import EditVehicles from './compornents/EditVehicles';
// import DisplayAllVehicles from './compornents/DisplayAllVehicles';
// import Home from './compornents/Home/Home';
import AddEmployee from './compornents/AddEmployee';
import AllEmployees from './compornents/AllEmployees';
import Router from './Routes/Router'

import React from 'react';

function App() {
  return (
    <Router>
        {/* <div >

          <Header/>
    
          <Home />
          <Route path="/addvehicle" exact component ={AddVehicle}/>
          <Route path="/DisplayAllVehicles" exact component ={DisplayAllVehicles}/>
          <Route path="/EditVehicles" exact component ={EditVehicles}/>

          

        </div> */}
    </Router>
  );
}

export default App;
