const routes = require("express").Router();
const PlantRoutes = require("../../controller/plant");
const upload = require("../../utils/multer");

routes.post("/register-plant", upload.single("image"), PlantRoutes.addPlant);

routes.get("/get-all-plant", PlantRoutes.getAllPlants);

routes.get("/get-plant-details/:id", PlantRoutes.getPlantById);

routes.put( 
  "/update-plant-details/:id",  upload.single("image"),
  PlantRoutes.updatePlantDetails
);

routes.delete("/delete-plant-details/:id", PlantRoutes.deletePlant);

module.exports = routes;
