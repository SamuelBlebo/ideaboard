import { useEffect } from "react";
import { AiOutlineLink, AiOutlineFile } from "react-icons/ai";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineChecklist } from "react-icons/md";
import { BsArrowUpRight, BsThreeDots } from "react-icons/bs";
import { TbLayoutColumns } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiImageAdd, BiUserCircle } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import "./ToolsMenu.css";

// Components
import { NoteButton } from "./Tools/noteField/NoteButton";

export function ToolsMenu({ mode, showNoteField, handleNoteClick, onAddNote }) {
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <div className={`tools-menu ${mode}`}>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <NoteButton onClick={onAddNote} />
        </div>
        <p>Note</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <AiOutlineLink />
        </div>
        <p>Link</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <MdOutlineChecklist />
        </div>
        <p>To Do</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <BsArrowUpRight />
        </div>
        <p>Line</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <HiViewGridAdd />
        </div>
        <p>Board</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <TbLayoutColumns />
        </div>
        <p>Column</p>
      </div>
      <div className="icon-box">
        <div className={`icon ${mode}`}>
          <TfiCommentAlt />
        </div>
        <p>Comment</p>
      </div>
      <div className="icon-box">
        <div className={`more ${mode}`}>
          <BsThreeDots />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="icon-box ">
        <div className={`icon others ${mode}`}>
          <BiImageAdd />
        </div>
        <p>add image</p>
      </div>
      <div className="icon-box ">
        <div className={`icon others ${mode}`}>
          <AiOutlineFile />
        </div>
        <p>Upload</p>
      </div>
      <div className="icon-box">
        <div className={`icon others ${mode}`}>
          <SlPencil />
        </div>
        <p>Draw</p>
      </div>
      <div className="icon-box trash">
        <div className="icon">
          <BiUserCircle />
        </div>
        <p>Account</p>
      </div>
    </div>
  );
}
