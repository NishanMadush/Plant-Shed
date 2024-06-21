const routes = require("express").Router();
const SalaryRoutes = require("../../controller/salary");

routes.post("/add_salary_details", SalaryRoutes.addSalary);

routes.get("/get-all-salary-details", SalaryRoutes.getAllSalary);

routes.get("/get-all-salary-details/:id", SalaryRoutes.getSalaryById);

routes.put(
  "/update-salary-details/:id",
  SalaryRoutes. updateSalaryDetails
);

routes.delete("/delete-salary-record/:id", SalaryRoutes.deleteSalary);



module.exports = routes;