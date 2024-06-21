const Service = require("../model/service.model");

const ServiceControllers = {
  addVehicleService: async (req, res) => {
    try {
      const {
        service_id,
        vehicle_number,
        vehicle_name,
        serviced_date,
        discription,
        cost,
        next_date,
      } = req.body;

      if (
        !service_id ||
        !vehicle_number ||
        !vehicle_name ||
        !serviced_date ||
        !discription ||
        !cost ||
        !next_date 
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      const serviceID = await Service.findOne({ service_id });
      if (serviceID) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${serviceID.service_id} id already exist.`,
        });
      }

      const newService = new Service({
        service_id,
        vehicle_number,
        vehicle_name,
        serviced_date,
        discription,
        cost,
        next_date,
      });

      await newService.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        VehicleServiceDetails: newService,
        message: "Service details added successfully.",
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

  getAllVehicleService: async (req, res) => {
    try {
      const VehicleServiceDetails = await Service.find();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        VehicleServiceDetails: VehicleServiceDetails,
        message: "All vehicle services list recieved.",
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

  getVehicleServiceById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const VehicleServiceDetails = await Service.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleServiceDetails: VehicleServiceDetails,
          message: "Vehicle Services details recieved.",
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

  updateVehicleServicesDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          service_id,
          vehicle_number,
          vehicle_name,
          serviced_date,
          discription,
          cost,
          next_date,
        } = req.body;

        
      await Service.findByIdAndUpdate(req.params.id, {
          service_id,
          vehicle_number,
          vehicle_name,
          serviced_date,
          discription,
          cost,
          next_date,
        });

        const VehicleServiceDetails = await Service.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleServiceDetails: VehicleServiceDetails,
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

  deleteVehicleService: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const VehicleServiceDetails = await Service.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          VehicleServiceDetails: VehicleServiceDetails,
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



module.exports = ServiceControllers;
