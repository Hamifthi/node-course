const request = require('request')

let geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${decodeURIComponent(address)}&key=AIzaSyB7yryKM6UnJ8NOP6hk9F8YMezc2cleJ4c`,
        json: true
    },
    (error, response, body) => {
        if (error) {
            callback('Unable to connect to the google servers')
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find entered address')
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports.geocodeAddress = geocodeAddress