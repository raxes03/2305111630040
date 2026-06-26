const getBestVehicles = (vehicles, mechanicHours) => {

    const n = vehicles.length;

    const dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= mechanicHours; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 1; i <= n; i++) {

        const time = vehicles[i - 1].Duration;
        const impact = vehicles[i - 1].Impact;

        for (let j = 0; j <= mechanicHours; j++) {

            if (time <= j) {

                dp[i][j] = Math.max(
                    impact + dp[i - 1][j - time],
                    dp[i - 1][j]
                );

            } else {

                dp[i][j] = dp[i - 1][j];

            }

        }

    }

    let selectedVehicles = [];
    let totalDuration = 0;

    let j = mechanicHours;

    for (let i = n; i > 0; i--) {

        if (dp[i][j] !== dp[i - 1][j]) {

            selectedVehicles.push(vehicles[i - 1]);

            totalDuration += vehicles[i - 1].Duration;

            j -= vehicles[i - 1].Duration;

        }

    }

    return {
        selectedVehicles,
        totalImpact: dp[n][mechanicHours],
        totalDuration
    };

};

module.exports = {
    getBestVehicles
};