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

export function ToolsMenu() {
  return (
    <div className="tools-menu">
      <div className="icon-box">
        <GoNote />
        <p>Note</p>
      </div>
      <div className="icon-box">
        <AiOutlineLink />
        <p>Link</p>
      </div>
      <div className="icon-box">
        <MdOutlineChecklist />
        <p>To Do</p>
      </div>
      <div className="icon-box">
        <BsArrowUpRight />
        <p>Line</p>
      </div>
      <div className="icon-box">
        <HiViewGridAdd />
        <p>Board</p>
      </div>
      <div className="icon-box">
        <TbLayoutColumns />
        <p>Column</p>
      </div>
      <div className="icon-box">
        <TfiCommentAlt />
        <p>Comment</p>
      </div>
      <div className="icon-box">
        <BsThreeDots />
      </div>
      <div>
        <hr />
      </div>
      <div className="icon-box">
        <BiImageAdd />
        <p>add image</p>
      </div>
      <div className="icon-box">
        <AiOutlineFile />
        <p>Upload</p>
      </div>
      <div className="icon-box">
        <SlPencil />
        <p>Draw</p>
      </div>
      <div className="icon-box trash">
        <IoTrashBinOutline />
        <p>Trash</p>
      </div>
    </div>
  );
}
