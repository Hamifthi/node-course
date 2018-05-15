const yargs = require('yargs')
const axios = require('axios')

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB7yryKM6UnJ8NOP6hk9F8YMezc2cleJ4c`

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find requested Address')
    }
    let latitude = response.data.results[0].geometry.location.lat;
    let longitude = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/01a058529479ad06d900803fb530dc26/${latitude},${longitude}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL)
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} and it feels like ${apparentTemperature}`)})
.catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers')
    }
    else {
        console.log(error.message)
    }
});