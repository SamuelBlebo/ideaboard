import { AiOutlineLink } from "react-icons/ai";

export function LinkButton({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      <AiOutlineLink onClick={handleClick} />
    </>
  );
}
