const routes = require("express").Router();
const ServiceRoutes = require("../../controller/service");

routes.post("/add_service_details", ServiceRoutes.addVehicleService);

routes.get("/get-all-service-details", ServiceRoutes.getAllVehicleService);

routes.get("/get-all-service-details/:id", ServiceRoutes.getVehicleServiceById);

routes.put(
  "/update-service-details/:id",
  ServiceRoutes. updateVehicleServicesDetails
);

routes.delete("/delete-service-record/:id", ServiceRoutes.deleteVehicleService);



module.exports = routes;
