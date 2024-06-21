const Vehicle = require("../model/vehicle.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const VehicleControllers = {
  addVehicle: async (req, res) => {
    try { const result = await cloudinary.uploader.upload(req.file.path, {

      folder: "VehiclesList",

    });
      const {
        vehicle_id,
        vehicle_number,
        vehicle_name,
        vehicle_reg_date,
        vehicle_status,
        
      } = req.body;

      if (
        !vehicle_id ||
        !vehicle_number ||
        !vehicle_name ||
        !vehicle_reg_date ||
        !vehicle_status
        
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      
      const vehicleId = await Vehicle.findOne({ vehicle_id });
      if (vehicleId) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "This vehicle id already registered.",
        });
      }
      
      const newVehicle = new Vehicle({
        vehicle_id,
        vehicle_number,
        vehicle_name,
        vehicle_reg_date,
        vehicle_status,
        vehicle_url: result.secure_url,
        cloudinary_id: result.public_id,
      });

      await newVehicle.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        VehicleDetails: newVehicle,
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

  getAllVehicles: async (req, res) => {
    try {
      const allVehicles = await Vehicle.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        VehicleList: allVehicles,
        message: "All vehicle list recieved.",
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

  getVehicleById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const VehicleDetails = await Vehicle.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleDetails: VehicleDetails,
          message: "Vehicle details recieved.",
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

  updateVehicleDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const result = await cloudinary.uploader.upload(req.file.path, {

          folder: "VehiclesList",

        });
        const {
            vehicle_number,
            vehicle_name,
            vehicle_reg_date,
            vehicle_status,
            vehicle_url,
        } = req.body;

        
      await Vehicle.findByIdAndUpdate(req.params.id, {
          vehicle_number, 
          vehicle_name,
          vehicle_reg_date,
          vehicle_status,
          vehicle_url: result.secure_url,
          cloudinary_id: result.public_id,
        });
        const VehicleDetails = await Vehicle.findById(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleDetails: VehicleDetails,
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



  deleteVehicle: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleDetails: vehicle,
          message: vehicle.vehicle_number + " deleted successfully.",
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

module.exports = VehicleControllers;
