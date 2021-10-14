import logo from "./logo.svg";
import "./App.css";
import TicTocToe from "./Components/TicTocToe";
import Foobar from "./Components/Foobar";
import Test from "./Components/Test";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Test></Test>
      <Foobar></Foobar>
      <TicTocToe></TicTocToe>
    </div>
  );
}

export default App;
