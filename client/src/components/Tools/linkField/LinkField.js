import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./LinkField.css";

export function LinkField() {
  const [link, setLink] = useState("");
  const [preview, setPreview] = useState(null);
  const [inputActive, setInputActive] = useState(true);

  useEffect(() => {
    async function fetchLinkPreview() {
      if (link) {
        const response = await fetch(
          `https://api.linkpreview.net/?key=52ea0f4be162f4fa96c4367a11f128ce&q=${link}`
        );
        const data = await response.json();
        setPreview(data);
      }
    }
    fetchLinkPreview();
  }, [link]);

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleInputBlur() {
    setInputActive(false);
  }

  function handleInputKeyPress(event) {
    if (event.charCode === 13) {
      // "Enter" key was pressed
      setInputActive(false);
    }
  }

  return (
    <Draggable bounds="parent">
      <div className="link-field">
        {preview && !inputActive ? (
          <div className={"link-preview"}>
            <img src={preview.image} alt={preview.title} />
            <p>{preview.link}</p>
            <h3>{preview.title}</h3>
            <p>{preview.description}</p>
          </div>
        ) : (
          <input
            id="link-input"
            type="text"
            value={link}
            onChange={handleLinkChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
          />
        )}
      </div>
    </Draggable>
  );
}
