import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home"; //import tu ben kia qua
import AddNewProduct from "./components/AddNewProduct";

// function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{ textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Hello world with truong</p>

        <Home />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content-right">
        <AddNewProduct />
      </div>
    </div>
  );
};

export default App;
