const Business = require('../models/businessSchema');

const getBusinessData = async (req, res) => {
    try {
        const businesses = await Business.find();
        if (!businesses || businesses.length === 0) {
            return res.status(404).json({ message: "No businesses found" });
        }
        res.status(200).json(businesses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error return BusinessData", error: error.message });
    }
}

const addBusiness = async (req, res) => {
    try {
        const businessData = req.body;

        if (!businessData || Object.keys(businessData).length === 0) {
            return res.status(400).json({ message: "Business data is required" });
        }

        const newBusiness = new Business(businessData);

        const savedBusiness = await newBusiness.save();

        res.status(201).json(savedBusiness);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while adding business", error: error.message });
    }
};

const updateBusiness = async (req, res) => {
    try {
        const businessId = req.params.id;
        const businessData = req.body;

        if (!businessId) {
            return res.status(400).json({ message: "Business ID is required" });
        }

        const updatedBusiness = await Business.findByIdAndUpdate(
            businessId,
            businessData,
            { new: true, runValidators: true }
        );

        if (!updatedBusiness) {
            return res.status(404).json({ message: "Business not found" });
        }

        res.status(200).json(updatedBusiness);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error update BusinessData", error: error.message });
    }
};


module.exports = { updateBusiness, getBusinessData, addBusiness };
