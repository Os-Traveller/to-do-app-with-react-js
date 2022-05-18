import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { buttonClass, hoverOnZoom, inputClass } from "./tailwindClass";
import TaskCard from "./TaskCard";

const AppBody = () => {
  const [openMOdal, setOpenModal] = useState(false);
  const formRef = useRef();

  const data = [
    {
      taskName: "Bathing",
      description:
        "I wanna take shower, untill dusk and down, but she wanted to see me. So I did what i had to do",
    },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
    {
      taskName: "Bathing",
      description:
        "I wanna take shower, untill dusk and down, but she wanted to see me. So I did what i had to do",
    },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
    { taskName: "Bathing", description: "I wanna take shower, untill dusk and down" },
  ];
  const [allData, setAllData] = useState(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const newData = {
      taskName: title,
      description: description,
    };
    setAllData([...allData, newData]);
    setOpenModal(false);
  };

  return (
    <>
      {/* modal */}
      <Modal setOpenModal={setOpenModal} openModal={openMOdal} title="Add a new task!">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-xl mb-2 block">
            Title
          </label>
          <input type="text" id="title" name="title" className={`${inputClass}`} />
          <label htmlFor="description" className="text-xl mb-2 block">
            Description
          </label>
          <textarea
            type="textarea"
            name="description"
            id="description"
            className={`${inputClass}`}
          />
          <input
            type="submit"
            value={"Add"}
            className={`${buttonClass} ${hoverOnZoom} block w-[50%] mx-auto`}
          />
        </form>
      </Modal>
      {/* normal parts */}
      <div className="mt-10 bg-[#fff] p-5 rounded-md flex flex-col gap-5 relative shadow-md">
        <button className={`${buttonClass} top-half-position`} onClick={() => setOpenModal(true)}>
          Add Task
        </button>
        <div className="mb-3"></div>
        {allData.map((singleData, index) => (
          <TaskCard data={singleData} key={index} />
        ))}
      </div>
    </>
  );
};

export default AppBody;
