// app specific api key
const key = 'dhD2iK8FpFaqVT9skQ60CUTRvpAYi6FI';

// get weather information
// 'id' received from getCity request
const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await  fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city from API
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};