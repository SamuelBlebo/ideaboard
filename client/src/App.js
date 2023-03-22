import { useState, useEffect } from "react";
import "./App.css";

import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <div className="App">
      <Header toggleMode={toggleMode} />
      <ToolsMenu />
    </div>
  );
}

export default App;
