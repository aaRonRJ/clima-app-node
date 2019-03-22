const axios = require('axios');

const getWeather = async(lat, lng) => {
    const url = `https://samples.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2bc932143410375e89f6d3e664ccb70e`;
    const data = await axios.get(url);

    return data.data.main.temp;
};

module.exports = {
    getWeather
};