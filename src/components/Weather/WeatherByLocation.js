import { useParams } from "react-router-dom"; //de lay tham so woeid
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WeatherDay from "./Child/WeatherDay";
import _ from "lodash";

const WeatherByLocation = () => {
  const { woeid } = useParams();
  const [locationWeather, setLoactionWeather] = useState({});
  let history = useHistory();

  useEffect(() => {
    getWeatherByLocation();
  }, []); //chay 1 lan

  const getWeatherByLocation = async () => {
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/${woeid}`,
      },
    });
    if (response & response.data) {
      setLoactionWeather(response.data);
    }
  };

  const handleBack = () => {
    history.push("/weather");
  };
  return (
    <div className="w-b-l-container">
      {/* {JSON.stringify(locationWeather)} */}
      <div className="back">
        <span onClick={() => handleBack()}>--Back--</span>
      </div>
      {/* <WeatherState weatherState={"Showers"} /> */}

      {!_.isEmpty(locationWeather) &&
        locationWeather.consolidated_weather &&
        locationWeather.consolidated_weather.length > 0 &&
        locationWeather.consolidated_weather.map((item, index) => {
          return <WeatherDay key={`weatherday-${index}`} dataWeather={item} />;
        })}
    </div>
  );
};

export default WeatherByLocation;
