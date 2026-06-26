const express = require("express");

const router = express.Router();

const {
    scheduleVehicles
} = require("../controllers/scheduler.controller");

router.get("/schedule", scheduleVehicles);

module.exports = router;