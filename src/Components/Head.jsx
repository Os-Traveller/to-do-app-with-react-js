import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { buttonClass, hoverOnZoom } from "./tailwindClass";
const Head = () => {
  return (
    <div className="flex items-center justify-between bg-[#AF7EEB] text-white p-5 rounded-md shadow-md">
      <h1 className="text-2xl">To Do</h1>
      <button className={`${buttonClass} border-2 ${hoverOnZoom} hover:scale-110`}>Login</button>
    </div>
  );
};

export default Head;
