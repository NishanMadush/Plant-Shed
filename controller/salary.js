const Salary = require("../model/salary.model");

const SalaryControllers = {
  addSalary: async (req, res) => {
    try {
      const {
        S_Id,
        Nic,
        emp_name,
        basic_salary,
        ot_salary,
       
      } = req.body;

      if (
        !S_Id ||
        !Nic ||
        !emp_name ||
        !basic_salary ||
        !ot_salary 
       
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      const salaryID = await Salary.findOne({ S_Id });
      if (salaryID) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${salaryID.S_Id} id already exist.`,
        });
      }

      const newSalary = new Salary({
        S_Id,
        Nic,
        emp_name,
        basic_salary,
        ot_salary,
   
      });

      await newSalary.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        salaryDetails: newSalary,
        message: "Salary details added successfully.",
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

  getAllSalary: async (req, res) => {
    try {
      const SalaryDetails = await Salary.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        SalaryDetails: SalaryDetails,
        message: "All Salary list recieved.",
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

  getSalaryById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const SalaryDetails = await Salary.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          SalaryeDetails: SalaryDetails,
          message: "Salary details recieved.",
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

  updateSalaryDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          S_Id,
          Nic,
          emp_name,
          basic_salary,
          ot_salary,
         
        } = req.body;

        
      await Salary.findByIdAndUpdate(req.params.id, {
          S_Id,
          Nic,
          emp_name,
          basic_salary,
          ot_salary,
        
        });

        const SalaryDetails = await Salary.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          SalaryDetails: SalaryDetails,
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

  deleteSalary: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const SalaryDetails = await Salary.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          SalaryDetails: SalaryDetails,
          message: "Deleted successfully.",
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



module.exports = SalaryControllers;
