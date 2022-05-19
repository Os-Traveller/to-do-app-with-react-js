import React, { useEffect, useState } from "react";
import { GrCheckmark } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { iconButton } from "./tailwindClass";

const TaskCard = ({ data, handleDeletItem, handleCompleted }) => {
  const { taskName, description, _id, completed } = data;
  const [strike, setStrike] = useState(completed);
  useEffect(() => {
    setStrike(completed);
    console.log(completed);
  }, [completed]);

  return (
    <div className="flex justify-between items-start gap-5 border-2 p-3 rounded-lg shadow-md">
      <div className="flex items-start gap-5">
        <button
          className={`${iconButton} border-black mt-2`}
          onClick={() => handleCompleted(_id, completed)}
        >
          <GrCheckmark />
        </button>
        <div>
          <h3 className={`text-xl font-semibold font-serif ${strike ? "line-through" : ""}`}>
            {taskName}
          </h3>
          <p className={`text-[#696969] ${strike ? "line-through" : ""}`}>{description}</p>
        </div>
      </div>

      <button className={`${iconButton} border-black mt-2`} onClick={() => handleDeletItem(_id)}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default TaskCard;
