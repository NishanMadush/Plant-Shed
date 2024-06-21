import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Components/Common/Home";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";



import VehicleDash from "./Components/Admin/Vehicle/Vehicle";
import AddVehicle from "./Components/Admin/Vehicle/AddVehicle";
import GetAllVehicle from "./Components/Admin/Vehicle/GetAllVehicle";
import EditVehicle from "./Components/Admin/Vehicle/EditVehicle";
import AddService from "./Components/Admin/Vehicle/AddService";
import GetAllVehicleService from "./Components/Admin/Vehicle/GetAllVehicleService";
import GetAllVehicleServiceReport from "./Components/Admin/Vehicle/GetAllVehicleServiceReport";
import EditVehicleService from "./Components/Admin/Vehicle/EditVehicleService";


import EmployeeDash from "./Components/Admin/Employee/Employee";
import AddEmployee from "./Components/Admin/Employee/AddEmployee";
import GetAllEmployee from "./Components/Admin/Employee/GetAllEmployee";
import EditEmployee from "./Components/Admin/Employee/EditEmployee";
import GetAllEmployeeReport from "./Components/Admin/Employee/GetAllEmployeeReport";

import AddSalary from "./Components/Admin/Employee/AddSalary";
import GetAllSalary from "./Components/Admin/Employee/GetAllSalary";
import EditEmployeeSalary from "./Components/Admin/Employee/EditEmployeeSalary";

import PlantDash from "./Components/Admin/Plant/Plant";
import AddPlant from "./Components/Admin/Plant/AddPlant";
import GetAllPlant from "./Components/Admin/Plant/GetAllPlant";
import EditPlant from "./Components/Admin/Plant/EditPlant";
import GetAllPlantReport from "./Components/Admin/Plant/GetAllPlantReport";


function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} /> 
          
          {/* Vehicle Routes */}
          <Route path="/vehicle-dash" exact component={VehicleDash} />
          <Route path="/add-new-vehicle" exact component={AddVehicle} />
          <Route path="/get-all-vehicle" exact component={GetAllVehicle} />
          <Route path="/get-vehicle-dtails-by-id/:id" exact component={EditVehicle}/>

           {/* Service Routes */}
          <Route path="/add_new_service" exact component={AddService} />
          <Route path="/get_all_service" exact component={GetAllVehicleService} />
          <Route path="/get_all_service_report" exact component={GetAllVehicleServiceReport} />
          <Route path="/edit-service-details/:id" exact component={EditVehicleService} />


           {/* Employee Routes */}
           <Route path="/employee-dash" exact component={EmployeeDash} />
          <Route path="/add-new-employee" exact component={AddEmployee} />
          <Route path="/get-all-employee" exact component={GetAllEmployee} />
          <Route path="/get-employee-dtails-by-id/:id" exact component={EditEmployee}/>
          <Route path="/get_all_employee_report" exact component={GetAllEmployeeReport} />

           {/* salary Routes */}
          <Route path="/add-new-salary" exact component={AddSalary} />
          <Route path="/get_all_salary" exact component={GetAllSalary} />
          <Route path="/edit-salary-details/:id" exact component={EditEmployeeSalary} />

          {/* Plant Routes */}
          <Route path="/plant-dash" exact component={PlantDash} />
          <Route path="/add-new-plant" exact component={AddPlant} />
          <Route path="/get-all-plant" exact component={GetAllPlant} />
          <Route path="/get-plant-dtails-by-id/:id" exact component={EditPlant}/>
          <Route path="/get-all-plant-report" exact component={GetAllPlantReport} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
