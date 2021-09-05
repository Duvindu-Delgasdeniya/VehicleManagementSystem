
import './App.css';
import Header from './compornents/header';
import AddVehicle from './compornents/AddVehicle';
import EditVehicles from './compornents/EditVehicles';
import DisplayAllVehicles from './compornents/DisplayAllVehicles';
import Home from './compornents/pages/Home';
import SendRequests from "./compornents/SendRequests";
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
        <div >

          
    
          <Home />
          <Route path="/addvehicle" exact component ={AddVehicle}/>
          <Route path="/DisplayAllVehicles" exact component ={DisplayAllVehicles}/>
          <Route path="/EditVehicles" exact component ={EditVehicles}/>
          

        </div>
    </Router>
  );
}

export default App;
