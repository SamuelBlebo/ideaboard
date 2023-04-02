import React, { useState } from "react";
import "./App.css";

// components
import { ToolsMenu } from "./components/ToolsMenu";
import { Header } from "./components/Header";
import { NoteField } from "./components/Tools/NoteField";

function App() {
  const [mode, setMode] = useState("light");
  const [showNoteField, setShowNoteField] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState([""]);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleNoteClick = () => {
    setShowNoteField(!showNoteField);
  };

  const handleNoteChange = (newNoteText) => {
    setNoteText(newNoteText);
  };

  const handleAddNote = () => {
    setNotes([...notes, ""]); // add a new empty note to the notes array
  };

  return (
    <div className="App">
      <Header toggleMode={toggleMode} mode={mode} />
      <ToolsMenu
        mode={mode}
        showNoteField={showNoteField}
        handleNoteClick={handleNoteClick}
        onAddNote={handleAddNote} // pass down the handleAddNote function
      />
      {notes.map((note, index) => (
        <NoteField key={index} onNoteChange={handleNoteChange} />
      ))}
    </div>
  );
}

export default App;
