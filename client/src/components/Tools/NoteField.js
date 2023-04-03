import React, { useState } from "react";
import Draggable from "react-draggable";

import "./NoteField.css";

export function NoteField({ onNoteChange }) {
  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
    onNoteChange(event.target.value);
  };

  return (
    <Draggable bounds="parent">
      <div className={"note-field"}>
        <div className={"items"}>
          <textarea
            value={noteText}
            onChange={handleNoteChange}
            placeHolder={"Start Typing ..."}
          />
        </div>
      </div>
    </Draggable>
  );
}
