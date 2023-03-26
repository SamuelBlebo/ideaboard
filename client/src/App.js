import { useState } from "react";
import "./App.css";
import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <div className="App">
      <Header toggleMode={toggleMode} mode={mode} />
      <ToolsMenu mode={mode} />
    </div>
  );
}

export default App;
