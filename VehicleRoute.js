const express = require("express");
const Vehicle = require("../Models/Vehicle");
const router = express.Router();

// Get all vehicles
router.get("/", async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Add a new vehicle (For Admin)
router.post("/", async (req, res) => {
    const { name, type, pricePerDay, imageUrl } = req.body;
    const newVehicle = new Vehicle({ name, type, pricePerDay, imageUrl });

    try {
        await newVehicle.save();
        res.status(201).json({ message: "Vehicle added" });
    } catch (error) {
        res.status(500).json({ error: "Could not save vehicle" });
    }
});

module.exports = router;