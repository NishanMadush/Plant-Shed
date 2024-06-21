const Plant = require("../model/plant.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const plantControllers = {
  addPlant: async (req, res) => {
    try { const result = await cloudinary.uploader.upload(req.file.path, {

      folder: "PlantsList",

    });
      const {
        plant_reg_no,
        plant_name,
        nursery_type,
        date,
        plant_priority,
        nursery_size,
        
        
      } = req.body;

      if (
        !plant_reg_no ||
        !plant_name ||
        !nursery_type||
        !date||
        !plant_priority||
        !nursery_size 
        
        
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      

      const plantregno = await Plant.findOne({ plant_reg_no });
      if (plantregno) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "This vehicle id already registered.",
        });
      }
      
      const newPlant = new Plant({
        plant_reg_no,
        plant_name,
        nursery_type,
        date,
        plant_priority,
        nursery_size,
        plant_url: result.secure_url,
        cloudinary_id: result.public_id,
      });

      await newPlant.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        PlantDetails: newPlant,
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

  getAllPlants: async (req, res) => {
    try {
      const getAllPlants = await Plant.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        PlantList: getAllPlants,
        message: "All  list recieved.",
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

  getPlantById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const PlantDetails = await Plant.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PlantDetails: PlantDetails,
          message: " details recieved.",
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

  updatePlantDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const result = await cloudinary.uploader.upload(req.file.path, {

          folder: "getAllPlantsList",

        });
        const {
          plant_reg_no,
          plant_name,
          nursery_type,
          date,
          plant_priority,
          nursery_size,
            plant_url,
        } = req.body;

        
      await Plant.findByIdAndUpdate(req.params.id, {
        plant_reg_no,
        plant_name,
        nursery_type,
        date,
        plant_priority,
        nursery_size,
          plant_url: result.secure_url,
          cloudinary_id: result.public_id,
        });
        const PlantDetails = await Plant.findById(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PlantDetails: PlantDetails,
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



  deletePlant: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          PlantDetails: plant,
          message: plant.plant_name + " deleted successfully.",
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

module.exports = plantControllers;
