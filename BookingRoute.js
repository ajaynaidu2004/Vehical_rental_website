const express = require("express");
const Booking = require("../Models/Booking");
const router = express.Router();

// Book a vehicle
router.post("/", async (req, res) => {
    const { name, vehicle, days } = req.body;

    try {
        const newBooking = new Booking({ name, vehicle, days });
        await newBooking.save();
        res.status(201).json({ message: "Booking confirmed" });
    } catch (error) {
        res.status(500).json({ error: "Error processing booking" });
    }
});

// Get all bookings (For Admin)
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
