import "./App.css";
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogtoutPage";
function App() {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {isLogin ? <LoginPage /> : <LogoutPage />}

        <button onClick={() => setisLogin(!isLogin)}>
          {isLogin ? "LogOut" : "Login"}
        </button>
      </header>
    </div>
  );
}

export default App;
