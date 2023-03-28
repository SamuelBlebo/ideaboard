import { useState } from "react";
import "./App.css";

// components
import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";
import { NoteField } from "./components/Tools/NoteField";

function App() {
  const [mode, setMode] = useState("light");
  const [showNoteField, setShowNoteField] = useState(false);

  const [noteText, setNoteText] = useState("");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const handleNoteClick = () => {
    setShowNoteField(!showNoteField);
  };

  const handleNoteChange = (newNoteText) => {
    setNoteText(newNoteText);
  };

  return (
    <div className="App">
      <Header toggleMode={toggleMode} mode={mode} />
      <ToolsMenu
        mode={mode}
        showNoteField={showNoteField}
        handleNoteClick={handleNoteClick}
      />

      {showNoteField && <NoteField onNoteChange={handleNoteChange} />}
    </div>
  );
}

export default App;
