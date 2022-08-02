import Display from "./Components/Display";
import Button from "./Components/Button";
import { useState } from "react";
import "./App.css";

function App() {
  const[counter, setCounter] = useState(0);
  const incrementCounter = (increaseVal) => setCounter(counter + increaseVal);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClickFunction={incrementCounter} increment={1} />
          <Button onClickFunction={incrementCounter} increment={5} />
          <Button onClickFunction={incrementCounter} increment={10} />
          <Button onClickFunction={incrementCounter} increment={1000} />
          <Display message={counter} />
        </div>
      </header>
    </div>
  );
}

export default App;
