import logo from "./logo.svg";
import "./App.css";
import Foobar from "./Components/Foobar";
import Test from "./Components/Test";
import Heyday from "./Components/Heyday";

function App() {
  return (
    <div className="App">
      <Heyday></Heyday>
      <Test></Test>
      <Foobar></Foobar>
    </div>
  );
}

export default App;
