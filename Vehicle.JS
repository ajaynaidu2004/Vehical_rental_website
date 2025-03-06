const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    name: String,
    type: String,
    pricePerDay: Number,
    imageUrl: String,
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
