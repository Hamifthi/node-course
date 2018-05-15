const request = require('request')

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${decodeURIComponent(address)}&key=AIzaSyB7yryKM6UnJ8NOP6hk9F8YMezc2cleJ4c`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                reject('Unable to connect to the google servers')
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find entered address')
            }
            else if (body.status === 'OK') {
                resolve({
                    Address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                })
            }
        })
    })
}

geocodeAddress('florida').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage)
})