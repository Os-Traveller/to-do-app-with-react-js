import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "./Authenticaltion/firebase.init";
import Modal from "./Modal";
import { buttonClass, hoverOnZoom, inputClass } from "./tailwindClass";
import TaskCard from "./TaskCard";
import { toastConfig } from "./toastConfig";

const AppBody = () => {
  const [openMOdal, setOpenModal] = useState(false);
  const [user] = useAuthState(auth);
  const formRef = useRef();
  const [allData, setAllData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const newData = {
      taskName: title,
      description: description,
      completed: false,
      email: user?.email,
    };
    const url = `https://ost-to-do-app.herokuapp.com/create-task`;
    const { data } = axios.post(url, {
      data: newData,
    });
    setOpenModal(false);
  };

  useEffect(() => {
    const url = `https://ost-to-do-app.herokuapp.com/task-list?email=${user?.email}`;
    const run = async () => {
      try {
        const { data } = await axios.get(url);
        setAllData(data);
      } catch (error) {
        console.log(error);
      }
    };
    run();
  }, [user, handleSubmit]);

  const handleDeleteItem = (id) => {
    const newCollection = allData.filter((data) => data._id !== id);

    setAllData(newCollection);
    const run = async () => {
      const url = `https://ost-to-do-app.herokuapp.com/task-delete?id=${id}`;
      try {
        const { data } = axios.delete(url);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  const handleCompleted = (id, completed) => {
    if (completed) {
      return;
    }
    const run = async () => {
      const url = `https://ost-to-do-app.herokuapp.com/task-completed?id=${id}`;
      try {
        const { data } = axios.put(url);
      } catch (err) {
        console.log(err);
      }
    };
    run();
    toast.success("You have completed this task", toastConfig);
  };
  return (
    <>
      {/* modal */}
      <Modal setOpenModal={setOpenModal} openModal={openMOdal} title="Add a new task!">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-xl mb-2 block">
            Title
          </label>
          <input type="text" id="title" name="title" className={`${inputClass}`} required />
          <label htmlFor="description" className="text-xl mb-2 block">
            Description
          </label>
          <textarea
            type="textarea"
            name="description"
            id="description"
            className={`${inputClass}`}
            required
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
        {allData.length === 0 && <h1>No data available, Try Again</h1>}
        {allData.length > 0 &&
          allData.map((singleData) => (
            <TaskCard
              data={singleData}
              key={singleData._id}
              handleDeletItem={handleDeleteItem}
              handleCompleted={handleCompleted}
            />
          ))}
      </div>
    </>
  );
};

export default AppBody;
