const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    Nic: {
      type: String,
      trim: true,
    },
    emp_name: {
      type: String,
      trim: true,
    },
    emp_address: {
      type: String,
      trim: true,
    },
    emp_department: {
      type: String,
      trim: true,
    },
    emp_reg_date: {
      type: String,
      trim: true,
    },
    employee_url: {
      type: String,
      trim: true,
    },
    cloudinary_id: {
      type: String,
      trim: true,
    },
    gender_status: {
      type: String,
      trim: true,
    },
    emp_salary: {
      type: String,
      trim: true,
    },  
  },
  {

    timestamps: {
      type: Date,
      default: Date.now,
    },

  }
);

module.exports = mongoose.model("employee", EmployeeSchema);
