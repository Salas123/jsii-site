exports.handler = async (event) => {
    const auth = require('./auth/Auth').Auth;

    const driveFileResponse = await auth({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: process.env.REFRESH_TOKEN
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(JSON.stringify(driveFileResponse))
    };
    return response;
};
