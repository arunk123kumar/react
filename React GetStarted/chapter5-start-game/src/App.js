import Game from "./Components/Game";
import { useState } from "react";
import "./App.css";

function App() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="App">
      <header>
        <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
      </header>
    </div>
  );
}

export default App;
