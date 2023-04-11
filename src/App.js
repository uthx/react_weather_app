import "./App.css";
import Search from "../src/components/search";
import WeatherComponent from "./components/currentWeather";
import { getWeatherInfo } from "./api";
import { useState } from "react";
import { formatWeatherData } from "./components/utils";
function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const handleSelectedCity = async (selectedCity) => {
    const [latitude, longitude] = selectedCity.value.split("-");
    const { data } = await getWeatherInfo(latitude, longitude);
    const formattedWeatherData = formatWeatherData(data, selectedCity.label);
    console.log({ formattedWeatherData });
    setWeatherInfo(formattedWeatherData);
    console.log({ data });
  };
  return (
    <div className="container">
      <Search handleSelectedCity={handleSelectedCity} />
      {weatherInfo && <WeatherComponent weatherInfo={weatherInfo} />}
    </div>
  );
}

export default App;
