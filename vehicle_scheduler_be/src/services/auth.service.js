const axios = require("axios");

const getToken = async () => {
    try {

        const response = await axios.post(
            process.env.BASE_URL + process.env.AUTH_URL,
            {
                email: process.env.EMAIL,
                name: process.env.NAME,
                rollNo: process.env.ROLLNO,
                accessCode: process.env.ACCESS_CODE,
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            }
        );

        return response.data.access_token;

    } catch (error) {

    console.log("========== AUTH ERROR ==========");

    console.log("Message:", error.message);

    console.log("Status:", error.response?.status);

    console.log("Data:", error.response?.data);

    return null;
}
};

module.exports = {
    getToken
};