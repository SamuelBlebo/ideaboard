import React, { useState } from "react";
import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";
import { NoteField } from "./components/Tools/noteField/NoteField";
import { LinkField } from "./components/Tools/linkField/LinkField";
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
        height: "98vh",
        overflow: "hidden",
        position: "relative",
        paddingTop: "50px",
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

      <LinkField />
    </div>
  );
}

export default App;
