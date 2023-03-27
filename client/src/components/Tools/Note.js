import { useState } from "react";

export function Note() {
  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
    </>
  );
}
