import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home"; //import tu ben kia qua
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product.js";
import "react-image-lightbox/style.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import OTP from "./components/OTP/OTP";
import WeatherByLocation from "./components/Weather/WeatherByLocation";

// function App() {
const App = () => {
  return (
    <Router>
      <Nav />
      {/* switch thực hiện theo thứ từ trên xuống dưới */}
      <Switch>
        <Route path="/" exact={true}>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>Hello world with truong</p>
              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/about">
          <div>I'm Truong</div>
        </Route>
        <Route path="/weather/detail/:woeid">
          <WeatherByLocation />
        </Route>
        <Route path="*">
          <WeatherByLocation />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
