import axios from "axios";

const HEADERS = {
  "X-RapidAPI-Key": "12f3be73camshf1df5216dc6d86cp1369b6jsn0c4222f9059e",
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};

const GEO_CITY_ENDPOINT = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const getCityInfo = async (searchText) => {
  const options = {
    method: "GET",
    url: `${GEO_CITY_ENDPOINT}/cities`,
    headers: HEADERS,
    params: { minPopulation: 1000000, namePrefix: searchText.toLowerCase() },
  };
  return await axios.request(options);
};

const OPEN_WEATHER_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const OPEN_WEATHER_API_KEY = "b8d8b8f8ca226f40dba37e9837d7c352";

export const getWeatherInfo = async (latitude, longitude) => {
  const options = {
    method: "GET",
    url: OPEN_WEATHER_ENDPOINT,
    params: {
      lat: latitude,
      lon: longitude,
      appid: OPEN_WEATHER_API_KEY,
      units: "metric",
    },
  };
  return await axios.request(options);
};
