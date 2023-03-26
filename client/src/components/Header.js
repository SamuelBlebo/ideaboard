import { useEffect } from "react";
import "./Header.css";
import { BsMoon, BsSun } from "react-icons/bs";

export function Header({ toggleMode, mode }) {
  useEffect(() => {
    document.className = mode;
  }, [mode]);

  return (
    <div className={`header ${mode}`}>
      <div className="logo">
        <h5>IdeaBoard</h5>
      </div>
      <div className="header-menu">
        <div className="icon">
          {mode === "light" ? (
            <BsMoon onClick={toggleMode} />
          ) : (
            <BsSun onClick={toggleMode} />
          )}
        </div>
      </div>
    </div>
  );
}
