import AddVehicle from '../compornents/AddVehicle';
import DisplayAllVehicles from '../compornents/DisplayAllVehicles';
import EditVehicles from '../compornents/EditVehicles';
import Home from '../compornents/Home/Home';


let routes = [

    {
        path: "/",
        name: "Home",
        component: Home,
        exact: true,
    },
    {
        path: "/addvehicle",
        name: "AddVehicle",
        component: AddVehicle,
        exact: true,
    },
    {
        path: "/displayAllVehicles",
        name: "DisplayAllVehicles",
        component: DisplayAllVehicles,
        exact: true,
    },
    {
        path: "/editVehicles",
        name: "EditVehicles",
        component: EditVehicles,
        exact: true,
    }

];

export default routes;