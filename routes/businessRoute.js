const express = require("express");
const {
    updateBusiness,
    getBusinessData,
    addBusiness
} = require("../controllers/businessController");

const router = express.Router();

router.get("/", getBusinessData);
router.post("/", addBusiness);
router.put("/:id", updateBusiness);

module.exports = router;