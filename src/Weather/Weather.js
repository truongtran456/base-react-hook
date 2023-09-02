import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://dog.ceo/api/breeds/image/random";

const Weather = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMessage(response.data.message);
    });
  }, []);
  if (!message) return null;
  return <div>weather okokokoko : message= {message}</div>;
};

// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     //các biến cần lấy
//     this.state = {
//       message: "",
//     };
//   }

//   // hàm này chạy sau khi render nên gọi api thì để hàm này là đúng
//   async componentDidMount() {
//     let response = await axios.get("https://dog.ceo/api/breeds/image/random");
//     console.log("check data", response.data);

//     this.setState({
//       message: response.data.message,
//     });
//   }
//   render() {
//     return <div> inside weather: {this.state.message} </div>;
//   }

//   //   async componentDidMount() {
//   //     let data = await axios({
//   //       method: "post",
//   //       url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
//   //       data: { url: "link api" },
//   //     });
//   //     console.log(data);
//   //   }
//   //   render() {
//   //     return <div> inside weather </div>;
//   //   }
// }

export default Weather;
