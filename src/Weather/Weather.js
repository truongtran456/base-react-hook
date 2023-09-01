import React from "react";
import axios from "axios";

// const Weather = () => {
//   return <div>weather okokokoko</div>;
// };

class Weather extends React.Component {
  async componentDidMount() {
    let response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("check data", response.data);
  }
  render() {
    return <div> inside weather </div>;
  }

  //   async componentDidMount() {
  //     let data = await axios({
  //       method: "post",
  //       url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
  //       data: { url: "link api" },
  //     });
  //     console.log(data);
  //   }
  //   render() {
  //     return <div> inside weather </div>;
  //   }
}

export default Weather;
