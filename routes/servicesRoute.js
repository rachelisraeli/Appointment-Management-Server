const express = require("express");
const {
    getServices,
    getServiceById,
    addService,
    updateService,
    deleteService
} = require("../controllers/servicesController");

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
