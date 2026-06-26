const axios = require("axios");

const createLog = async (token, level, packageName, message) => {
    try {

        await axios.post(
            process.env.BASE_URL + process.env.LOG_URL,
            {
                stack: "backend",
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

    } catch (error) {
        console.log("Log API Error");
    }
};

module.exports = {
    createLog
};