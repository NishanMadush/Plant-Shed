const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema(
  {
    plant_reg_no: {
      type: String,
      trim: true,
    },
    plant_name: {
      type: String,
      trim: true,
    },
    nursery_type: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    plant_priority: {
      type: String,
      trim: true,
    },
    plant_url: {
      type: String,
      trim: true,
    },
    cloudinary_id: {
      type: String,
      trim: true,
    },
    nursery_size: {
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

module.exports = mongoose.model("plant", PlantSchema);
