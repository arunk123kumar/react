import logo from "./logo.svg";
import "./App.css";
import Dialog from "./Components/Dialog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dialog
          title="Welcome"
          message="Thank you for Visiting our Avi Softwares"
        />
      </header>
    </div>
  );
}

export default App;
