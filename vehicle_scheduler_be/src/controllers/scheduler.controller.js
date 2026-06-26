const { getToken } = require("../services/auth.service");
const { getDepots } = require("../services/depot.service");
const { getVehicles } = require("../services/vehicle.service");
const { getBestVehicles } = require("../utils/knapsack");

const scheduleVehicles = async (req, res) => {

    try {

        // Step 1: Get Token
        const token = await getToken();

        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        // Step 2: Get Depots
        const depots = await getDepots(token);

        // Step 3: Get Vehicles
        const vehicles = await getVehicles(token);

        let result = [];

        // Step 4: Loop through each depot
        for (let i = 0; i < depots.length; i++) {

            const depot = depots[i];

            const bestVehicles = getBestVehicles(
                vehicles,
                depot.MechanicHours
            );

            result.push({
                DepotID: depot.ID,
                MechanicHours: depot.MechanicHours,
                SelectedVehicles: bestVehicles.selectedVehicles,
                TotalDuration: bestVehicles.totalDuration,
                TotalImpact: bestVehicles.totalImpact
            });

        }

        return res.status(200).json(result);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }

};

module.exports = {
    scheduleVehicles
};