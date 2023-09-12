import { useParams } from "react-router-dom"; //de lay tham so woeid
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";

const WeatherByLocation = () => {
  const { woeid } = useParams();
  const [locationWeather, setLoactionWeather] = useState({});

  useEffect(() => {
    getWeatherByLocation();
  }, []); //chay 1 lan
  const getWeatherByLocation = async () => {
    let response = await axios({
      method: "post",
      url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/${woeid}`,
      },
    });
    if (response & response.data) {
      setLoactionWeather(response.data);
    }
  };
  return (
    <div>
      {/* {JSON.stringify(locationWeather)} */}
      <WeatherState weatherState={"Heavy Rain"} />
    </div>
  );
};

export default WeatherByLocation;
