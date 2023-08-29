import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div class="topnav">
      <NavLink class="active" exact={true} to="/">
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/weather">wweather App</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};
export default Nav;
