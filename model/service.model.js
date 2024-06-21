const mongoose = require("mongoose");

const VehicleServiceSchema = new mongoose.Schema(
  {
    service_id: {
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
    serviced_date: {
      type: String,
      trim: true,
    },
    
    discription: {
      type: String,
      trim: true,
    },
    cost: {
      type: Number,
      trim: true,
    },
    next_date: {
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

module.exports = mongoose.model("service", VehicleServiceSchema);
