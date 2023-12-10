const Auth = async (creds) =>{

    const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(creds.client_id)}&client_secret=${encodeURIComponent(creds.client_secret)}&refresh_token=${encodeURIComponent(creds.refresh_token)}`;

    let refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    const response = await fetch('https://www.googleapis.com/oauth2/v4/token',  refresh_request);

    const payload = await response.json();

    const accessToken = payload.access_token;

    const driveResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${process.env.FILEID}?acknowledgeAbuse=true&alt=media`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });


    console.log(`Driver response status: ${driveResponse.status} Driver response text: ${driveResponse.statusText}`);

    const blob = await driveResponse.blob();

    const arrayBuffer = await blob.arrayBuffer();
    const buff = Buffer.from(arrayBuffer)

    return {statusCode: driveResponse.status, headers: driveResponse.headers, buffer: buff};

}

module.exports = {Auth};

/**
 * TODO: Upload Docker image up to ECR
 */

