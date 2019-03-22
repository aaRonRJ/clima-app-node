const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    address: {
        alias: 'a',
        description: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;

const getInfo = async(address) => {
    try {
        const lugar = await place.getPlaceLatLng(address);
        const tiempo = await weather.getWeather(lugar.lat, lugar.lng);

        console.log(`El clima de ${ address } es de ${ tiempo }`);
    } catch (e) {
        console.log(`No se puede determinar el clima de ${ address }`);
    }
};

getInfo(argv.address);