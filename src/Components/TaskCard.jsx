import React from "react";
import { GrCheckmark } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { iconButton } from "./tailwindClass";

const TaskCard = ({ data }) => {
  const { taskName, description } = data;
  return (
    <div className="flex justify-between items-start gap-5 border-2 p-3 rounded-lg shadow-md">
      <div className="flex items-start gap-5">
        <button className={`${iconButton} border-black mt-2`}>
          <GrCheckmark />
        </button>

        <div>
          <h3 className="text-xl font-semibold font-serif">{taskName}</h3>
          <p className="text-[#696969	]">{description}</p>
        </div>
      </div>

      <button className={`${iconButton} border-black mt-2`}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default TaskCard;
