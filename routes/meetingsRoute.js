const express = require("express");
const {
    getMeetings,
    getMeetingById,
    addMeeting,
    updateMeeting,
    deleteMeeting
} = require("../controllers/meetingsController");

const router = express.Router();

router.get("/", getMeetings);
router.get("/:id", getMeetingById);
router.post("/", addMeeting);
router.put("/:id", updateMeeting);
router.delete("/:id", deleteMeeting);

module.exports = router;
