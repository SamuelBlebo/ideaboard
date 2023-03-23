import { useEffect } from "react";
import "./Header.css";
import { BsMoon } from "react-icons/bs";

export function Header({ toggleMode, mode }) {
  useEffect(() => {
    document.querySelector(".header").setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <div className="header">
      <div className="logo">
        <h5>IdeaBoard</h5>
      </div>
      <div className="header-menu">
        <div className="icon">
          <BsMoon onClick={toggleMode} />
        </div>
      </div>
    </div>
  );
}
