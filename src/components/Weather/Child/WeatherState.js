import "./Child.scss";

const WeatherState = (props) => {
  const weatherState = props.weatherState;
  const allWeatherSate={
          "Snow":"sn",
          "Sleet":"sl",
          "Thunderstorm":"t",
          "Heavy Rain":"hr",
          "Light Rain":"lr",
          "Showers":"s",
          "Heavy Cloud":"hc",
          "Light Cloud":"lc",
          "Clear":"c"
  }

  const getWeatherIcon = (weatherState) => {
          const fetchState = allWeatherSate[weatherState]; 
    return `https://www.metaweather.com/static/img/weather/${fetchState}.svg`;
  };
  return (
    <div className="weather-state-container">
      <div className="icon-state">
        <img src={getWeatherIcon(weatherState)} />
      </div>
      <div className="name-state">{weatherState}</div>
    </div>
  );
};

export default WeatherState;
