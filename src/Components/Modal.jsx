import React from "react";
import { createPortal } from "react-dom";
import { iconButton } from "./tailwindClass";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ openModal, setOpenModal, body, children, title }) => {
  if (!openModal) {
    return null;
  }
  return createPortal(
    // modal overlay
    <div className="modal flex items-center justify-center" onClick={() => setOpenModal(false)}>
      {/* modal body */}
      <div
        className="md:min-w-[400px] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* modals header */}
        <header className="bg-[#AF7EEB] p-5 text-white flex justify-between items-center">
          <h1 className="text-xl">{title}</h1>
          <button className={`${iconButton}`} onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </button>
        </header>
        <div className="p-5">
          {/* if children apperas show children */}
          <div>{children}</div>
          <div>
            <p>{body}</p>
          </div>
        </div>
        {/* modal body */}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
