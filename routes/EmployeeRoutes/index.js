const routes = require("express").Router();
const EmployeeRoutes = require("../../controller/employee");
const upload = require("../../utils/multer");

routes.post("/register-employee", upload.single("image"), EmployeeRoutes.addEmployee);

routes.get("/get-all-employee", EmployeeRoutes.getAllEmployee);

routes.get("/get-employee-details/:id", EmployeeRoutes.getEmployeeById);

routes.put( 
  "/update-employee-details/:id",  upload.single("image"),
  EmployeeRoutes.updateEmployeeDetails
);

routes.delete("/delete-employee-details/:id", EmployeeRoutes.deleteEmployee);

module.exports = routes;
