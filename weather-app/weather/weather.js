const request = require('request')

let weather = (latitude, longitude, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/01a058529479ad06d900803fb530dc26/${latitude},${longitude}`,
        json: true
    },
    (error, response, body) => {
        if (error) {
            callback('Unable to connect to darksky servers')
        }
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else {
            callback('Unable to match the location')
        }
    })
}

module.exports.weather = weather