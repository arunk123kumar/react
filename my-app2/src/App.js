import "./App.css";
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      {console.log("components renders")}
      <header className="App-header">
        <h2>Counter App</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
