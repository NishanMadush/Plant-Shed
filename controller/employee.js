const Employee = require("../model/employee.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const EmployeeControllers = {
  addEmployee: async (req, res) => {
    try { const result = await cloudinary.uploader.upload(req.file.path, {

      folder: "EmployeesList",

    });
      const {
        Nic,
        emp_name,
        emp_address,
        emp_department,
        emp_reg_date,
        gender_status,
        emp_salary,
        
      } = req.body;

      if (
        !Nic ||
        !emp_name ||
        !emp_address ||
        !emp_department||
        !emp_reg_date ||
        !gender_status ||
        !emp_salary
        
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      

      const employeeId = await Employee.findOne({ Nic });
      if (employeeId) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "This employee id already registered.",
        });
      }
      
      const newEmployee = new Employee({
        Nic,
        emp_name,
        emp_address,
        emp_department,
        emp_reg_date,
        gender_status,
        emp_salary,
        employee_url: result.secure_url,
        cloudinary_id: result.public_id,
      });

      await newEmployee.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        EmployeeDetails: newEmployee,
        message: "Registration was successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAllEmployee: async (req, res) => {
    try {
      const allEmployee = await Employee.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        EmployeeList: allEmployee,
        message: "All Employee list recieved.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const EmployeeDetails = await Employee.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeDetails: EmployeeDetails,
          message: "Employee details recieved.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  updateEmployeeDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const result = await cloudinary.uploader.upload(req.file.path, {

          folder: "EmployeesList",

        });
        const {
            emp_name,
            emp_address,
            emp_departmen,
            emp_reg_date,
            gender_status,
            emp_salary,
            employee_url,
        } = req.body;

        
      await Employee.findByIdAndUpdate(req.params.id, {
        emp_name,
        emp_address,
        emp_departmen,
        emp_reg_date,
        gender_status,
        emp_salary,
        employee_url: result.secure_url,
        cloudinary_id: result.public_id,
        });
        const EmployeeDetails = await Employee.findById(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeDetails: EmployeeDetails,
          message: "Updated successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },



  deleteEmployee: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          EmployeeDetails: employee,
          message: employee.employee_number + " deleted successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },
};

module.exports = EmployeeControllers;
