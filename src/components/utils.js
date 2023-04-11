export const formatCityData = (cityData) => {
  return {
    options: cityData?.data?.length
      ? cityData?.data?.map((city) => ({
          value: `${city.latitude}-${city.longitude}`,
          label: `${city.city}, ${city.countryCode}`,
        }))
      : [],
    hasMore: false,
  };
};
export const formatWeatherData = ({ main, weather, wind }, city) => {
  return {
    location: city.split(",")[0],
    weather: weather[0].main,
    icon: weather[0].icon,
    temperature: main.temp,
    feelsLike: main.feels_like,
    wind: wind.speed,
    humidity: main.humidity,
    pressure: main.pressure,
  };
};
