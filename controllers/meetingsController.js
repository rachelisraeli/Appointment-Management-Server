const Meetings = require('../models/meetingsSchema');

const getMeetings = async (req, res) => {
    try {
        const meetings = await Meetings.find();
        if (!meetings || meetings.length === 0) {
            return res.status(404).json({ message: "No meetings found" });
        }
        res.status(200).json(meetings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error return meetings", error: error.message });
    }
}

const getMeetingById = async (req, res) => {
    try {
        const { id } = req.params;
        const meeting = await Meetings.findById(id);
        if (!meeting || meeting.length === 0) {
            return res.status(404).json({ message: "No meeting data" });
        }
        res.status(200).json(meeting);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error return meeting", error: error.message });
    }
}

const addMeeting = async (req, res) => {
    try {
        const meetingToAdd = req.body;

        if (!meetingToAdd || Object.keys(meetingToAdd).length === 0) {
            return res.status(400).json({ message: "meeting data is required" });
        }

        const newMeeting = new Meetings(meetingToAdd);

        const savedMeeting = await newMeeting.save();

        res.status(201).json(savedMeeting);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while adding meeting", error: error.message });
    }
};

const updateMeeting = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const meetingData = req.body;

        if (!meetingId) {
            return res.status(400).json({ message: "meeting Id is required" });
        }

        const updatedMeeting = await Meetings.findByIdAndUpdate(
            meetingId,
            meetingData,
            { new: true, runValidators: true }
        );

        if (!updateMeeting) {
            return res.status(404).json({ message: "Meeting not found" });
        }

        res.status(200).json(updateMeeting);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error update Meeting", error: error.message });
    }
};

const deleteMeeting = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Meeting Id is required" });
        }

        const deletedMeeting = await Meetings.findByIdAndDelete(id);

        res.status(200).json(deleteMeeting);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error delete meeting", error: error.message });
    }
};


module.exports = {
    getMeetings,
    getMeetingById,
    addMeeting,
    updateMeeting,
    deleteMeeting
};
