const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

let argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            description: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    }
    else {
        console.log(results.Address)
        weather.weather(results.latitude, results.longitude, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage)
            }
            else {
                console.log(JSON.stringify(results, undefined, 2))
            }
        })
    }
})