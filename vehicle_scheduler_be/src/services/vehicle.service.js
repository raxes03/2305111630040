const axios = require("axios");

const getVehicles = async (token) => {
    try {

        const response = await axios.get(
            process.env.BASE_URL + process.env.VEHICLE_URL,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data.vehicles;

    } catch (error) {

        console.log("Error while fetching vehicles");

        if (error.response) {
            console.log(error.response.data);
        }

        return [];
    }
};

module.exports = {
    getVehicles
};