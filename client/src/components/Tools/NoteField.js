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
    <Draggable
      bounds={{
        top: 0,
        left: 0,

        right: 1450,
        bottom: 750,
      }}
    >
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
