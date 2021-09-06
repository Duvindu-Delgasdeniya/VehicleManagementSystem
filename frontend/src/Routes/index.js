import Dashboard from '../App';

import SendRequestfrom '../../';

let routes = [

    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        exact: true,
    },
    {
        path: "/vehicle/add",
        name: "AddVehicle",
        component: AddVehicle,
        exact: true,
    }
    
];

export default routes;