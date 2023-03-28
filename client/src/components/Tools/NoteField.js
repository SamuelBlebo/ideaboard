import React, { useState } from "react";

export function NoteField({ onNoteChange }) {
  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
    onNoteChange(event.target.value);
  };

  return (
    <div>
      <textarea value={noteText} onChange={handleNoteChange} />
    </div>
  );
}
