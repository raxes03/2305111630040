const axios = require("axios");

const getDepots = async (token) => {
    try {

        const response = await axios.get(
            process.env.BASE_URL + process.env.DEPOT_URL,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data.depots;

    } catch (error) {

        console.log("Error while fetching depots");

        if (error.response) {
            console.log(error.response.data);
        }

        return [];
    }
};

module.exports = {
    getDepots
};