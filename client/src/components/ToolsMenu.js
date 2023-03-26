import { useEffect } from "react";
import { GoNote } from "react-icons/go";
import { AiOutlineLink, AiOutlineFile } from "react-icons/ai";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineChecklist } from "react-icons/md";
import { BsArrowUpRight, BsThreeDots } from "react-icons/bs";
import { TbLayoutColumns } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiImageAdd } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import { IoTrashBinOutline } from "react-icons/io5";
import "./ToolsMenu.css";

export function ToolsMenu({ mode }) {
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div className={`tools-menu ${mode}`}>
      <div className="icon-box">
        <div className="icon">
          <GoNote />
        </div>
        <p>Note</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <AiOutlineLink />
        </div>
        <p>Link</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <MdOutlineChecklist />
        </div>
        <p>To Do</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <BsArrowUpRight />
        </div>
        <p>Line</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <HiViewGridAdd />
        </div>
        <p>Board</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <TbLayoutColumns />
        </div>
        <p>Column</p>
      </div>
      <div className="icon-box">
        <div className="icon">
          <TfiCommentAlt />
        </div>
        <p>Comment</p>
      </div>
      <div className="icon-box">
        <div className="more">
          <BsThreeDots />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="icon-box others">
        <div className="icon">
          <BiImageAdd />
        </div>
        <p>add image</p>
      </div>
      <div className="icon-box others">
        <div className="icon">
          <AiOutlineFile />
        </div>
        <p>Upload</p>
      </div>
      <div className="icon-box others">
        <div className="icon">
          <SlPencil />
        </div>
        <p>Draw</p>
      </div>
      <div className="icon-box trash">
        <div className="">
          <IoTrashBinOutline />
        </div>
        <p>Trash</p>
      </div>
    </div>
  );
}
