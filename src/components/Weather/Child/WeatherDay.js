import WeatherState from "./WeatherState";
import "./Child.scss";

const WeatherDay = (props) => {
  const dataWeather = props.dataWeather; //dataWeather lay tu ben weatherLocation sang
  //   const dataWeather = {
  //     id: 635934168702976,
  //     weather_state_name: "Heavy Cloud",
  //     weather_state_abbr: "hc",
  //     wind_direction_compass: "NNE",
  //     creates: "2021-12-30T10:46:31.266735Z",
  //     applicable_date: "2021-12-30",
  //     min_temp: 14.2,
  //     max_temp: 18.475,
  //     the_temp: 16.939999999999998,
  //     wind_speed: 4.64573070261937,
  //     wind_direction: 21.502484426851804,
  //     air_pressure: 1026.5,
  //     humidity: 70,
  //     visibility: 13.196060009544262,
  //     predictability: 71,
  //   };
  return (
    <div className="weather-day-container">
      <div className="date">Sat 1 Jan</div>
      <div className="state">
        <WeatherState weatherState={dataWeather.weather_state_name} />
      </div>
      <div className="max">Max: {Math.round(dataWeather.max_temp)} C</div>
      <div className="min">Min: {Math.round(dataWeather.min_temp)} C</div>
      <div className="wind">4mph: {Math.round(dataWeather.wind_speed)} mph</div>
    </div>
  );
};
export default WeatherDay;
