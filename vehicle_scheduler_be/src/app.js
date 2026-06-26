const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const schedulerRoutes = require("./route/scheduler.route");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Vehicle Scheduler API is running",
        endpoints: ["/api/schedule", "/health"]
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api", schedulerRoutes);

module.exports = app;