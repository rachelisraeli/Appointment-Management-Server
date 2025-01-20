const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: Number,
    meetingDuration: Number
});

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;
