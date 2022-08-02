import { Route, Routes } from "react-router-dom";
import "./App.css";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <Routes>
      <Route path="/:num" element={<RandomNumber />} />;
    </Routes>
  );
}

export default App;
