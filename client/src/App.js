import React, { useState } from "react";
import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";
import { NoteField } from "./components/Tools/NoteField";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [showNoteField, setShowNoteField] = useState(false);
  const [notes, setNotes] = useState([]);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleNoteClick = () => {
    setShowNoteField(!showNoteField);
  };

  const handleAddNote = () => {
    setNotes([...notes, ""]);
  };

  return (
    <div
      className="App "
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Header toggleMode={toggleMode} mode={mode} />
      <ToolsMenu
        mode={mode}
        showNoteField={showNoteField}
        handleNoteClick={handleNoteClick}
        onAddNote={handleAddNote}
      />

      {notes.map((note, index) => (
        <NoteField key={index} />
      ))}
      {showNoteField && <NoteField />}
    </div>
  );
}

export default App;
