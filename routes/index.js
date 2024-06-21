const routes = require("express").Router();

const VehicleMainRoute = require("./VehicleRoutes");

const VehiServMainRoute = require("./ServiceRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");
const SalaryMainRoute = require("./SalaryRoutes");
const PlantMainRoute = require("./PlantRoutes");





routes.use("/vehicle", VehicleMainRoute);

routes.use("/service", VehiServMainRoute);

routes.use("/employee", EmployeeMainRoute);

routes.use("/salary", SalaryMainRoute);

routes.use("/plant", PlantMainRoute);

module.exports = routes;
