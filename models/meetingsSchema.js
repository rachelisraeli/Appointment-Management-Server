const mongoose = require('mongoose');

const meetingsSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    email: String,
    meetingDuration: Date
});

const Meetings = mongoose.model('Meetings', meetingsSchema);

module.exports = Meetings;
