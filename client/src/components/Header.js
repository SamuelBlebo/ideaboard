import "./Header.css";
import { BsMoon } from "react-icons/bs";

export function Header({ toggleMode }) {
  const handleClick = () => {
    toggleMode();
  };

  return (
    <div className="header">
      <div className="logo">
        <h5>IdeaBoard</h5>
      </div>
      <div className="header-menu">
        <div className="icon">
          <BsMoon onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
