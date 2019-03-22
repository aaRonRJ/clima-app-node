const axios = require('axios');

const getPlaceLatLng = async(address) => {
    const encodeUrl = encodeURI(address);

    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': '3c247b1e02msha3c22206d54ac53p1d48e6jsn67801f98a707' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ address }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getPlaceLatLng
};