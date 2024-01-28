import logo from "./logo.svg";
import "./App.css";
import { NewComp } from "./component/newcomp";
import { NewComponV2 } from "./component/newcomp2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div>test main branch</div>
        <div>update logic in old component</div>
        <NewComp />
        <NewComponV2 />
      </header>
    </div>
  );
}

export default App;
