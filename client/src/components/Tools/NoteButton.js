import { GoNote } from "react-icons/go";

export function NoteButton({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <GoNote onClick={handleClick} />
    </>
  );
}
