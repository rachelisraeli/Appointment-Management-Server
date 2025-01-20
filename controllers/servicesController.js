const Services = require('../models/servicesSchema');

const getServices = async (req, res) => {
    try {
        const services = await Services.find();
        if (!services || services.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error return services", error: error.message });
    }
}

const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Services.findById(id);
        if (!service || service.length === 0) {
            return res.status(404).json({ message: "No service data" });
        }
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error return service", error: error.message });
    }
}

const addService = async (req, res) => {
    try {
        const serviceToAdd = req.body;

        if (!serviceToAdd || Object.keys(serviceToAdd).length === 0) {
            return res.status(400).json({ message: "service data is required" });
        }

        const newService = new Services(serviceToAdd);

        const savedService = await newService.save();

        res.status(201).json(savedService);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while adding service", error: error.message });
    }
};

const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const serviceData = req.body;

        if (!serviceId) {
            return res.status(400).json({ message: "service Id is required" });
        }

        const updatedService = await Services.findByIdAndUpdate(
            serviceId,
            serviceData,
            { new: true, runValidators: true }
        );

        if (!updatedService) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json(updateService);
        return updatedService;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error update Service", error: error.message });
    }
};

const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;

        if (!serviceId) {
            return res.status(400).json({ message: "service Id is required" });
        }

        const deletedService = await Services.findByIdAndDelete(serviceId);

        res.status(200).json(deletedService);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error delete service", error: error.message });
    }
};


module.exports = {
    getServices,
    getServiceById,
    addService,
    updateService,
    deleteService
};
