import "./currentWeather.css";

const WeatherComponent = ({ weatherInfo }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{weatherInfo.location}</p>
          <p className="weather-description">{weatherInfo.weather}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={"icons/" + weatherInfo.icon + ".png"}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(weatherInfo.temperature)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(weatherInfo.feelsLike)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(weatherInfo.wind)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(weatherInfo.humidity)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(weatherInfo.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
