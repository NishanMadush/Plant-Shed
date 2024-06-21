const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    vehicle_id: {
      type: String,
      trim: true,
    },
    vehicle_number: {
      type: String,
      trim: true,
    },
    vehicle_name: {
      type: String,
      trim: true,
    },
    vehicle_reg_date: {
      type: String,
      trim: true,
    },
    vehicle_status: {
      type: String,
      trim: true,
    },
    vehicle_url: {
      type: String,
      trim: true,
    },
    cloudinary_id: {
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

module.exports = mongoose.model("vehicle", VehicleSchema);
