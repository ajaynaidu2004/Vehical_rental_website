const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: String,
    vehicle: String,
    days: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
