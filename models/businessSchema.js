const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    owner: String,
    description: String,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
