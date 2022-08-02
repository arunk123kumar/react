import User from "./userData";
import "./App.css";
function App() {
  function getName(name) {
    alert(name);
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}

export default App;
