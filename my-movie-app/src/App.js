import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import DisplayMovies from "./components/DisplayMovies";
function App() {
  const [flag, setflag] = useState(false);

  const onchange = (newvalue) => {
    setflag(newvalue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/dashboard"
            element={<AddMovie onChange={onchange} flag={flag} />}
          />
          ;
          <Route
            path="/"
            element={<DisplayMovies onChange={onchange} flag={flag} />}
          />
          ;
        </Routes>
      </header>
    </div>
  );
}

export default App;
