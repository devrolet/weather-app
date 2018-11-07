const request = require('request');

let geocodeAddress = (address, callback) => {

    let encodedAddress = encodeURIComponent(address);
    let apiKey = 'AIzaSyDfWx0t4mT_uuOtowWiIsWSYQ-PWdFDTP0';

    // Basic HTTP Request 
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        // *** Prettify Output ***
        console.log(JSON.stringify(body, undefined, 2));
        // Error Checking
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng

            });
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;