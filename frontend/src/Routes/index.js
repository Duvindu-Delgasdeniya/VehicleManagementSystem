import AddVehicle from '../compornents/AddVehicle';
import DisplayAllVehicles from '../compornents/DisplayAllVehicles';
import EditVehicles from '../compornents/EditVehicles';
import Home from '../compornents/Home/Home';
import VehicleRequest from '../compornents/VehicleRequest/VehicleRequest';
import ViewReports from '../compornents/ViewReports/ViewReports';
import SendRequests from '../compornents/SendRequests';

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
    },
    {
        path: "/viewReports",
        name: "ViewReports",
        component: ViewReports,
        exact: true,
    },
    {
        path: "/vehicleRequest",
        name: "VehicleRequest",
        component: VehicleRequest,
        exact: true,
    },
    {
        path: "/sendRequests",
        name: "SendRequests",
        component: SendRequests,
        exact: true,
    }

];

export default routes;