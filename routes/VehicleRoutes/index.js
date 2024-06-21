const routes = require("express").Router();
const VehicleRoutes = require("../../controller/vehicle");
const upload = require("../../utils/multer");

routes.post("/register-vehicle", upload.single("image"), VehicleRoutes.addVehicle);

routes.get("/get-all-vehicle", VehicleRoutes.getAllVehicles);

routes.get("/get-vehicle-details/:id", VehicleRoutes.getVehicleById);

routes.put( 
  "/update-vehicle-details/:id",  upload.single("image"),
  VehicleRoutes.updateVehicleDetails
);

routes.delete("/delete-vehicle-details/:id", VehicleRoutes.deleteVehicle);

module.exports = routes;
