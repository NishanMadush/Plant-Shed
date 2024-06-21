const mongoose = require("mongoose");

const SalarySchema = new mongoose.Schema(
  {
    S_Id: {
      type: String,
      trim: true,
    },
    Nic: {
      type: String,
      trim: true,
    },
    emp_name: {
      type: String,
      trim: true,
    },
    basic_salary: {
      type: String,
      trim: true,
    },
    ot_salary: {
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

module.exports = mongoose.model("salary", SalarySchema);
