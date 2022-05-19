import React from "react";
import { buttonClass, hoverOnZoom } from "./tailwindClass";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./Authenticaltion/firebase.init";
import { signOut } from "firebase/auth";

const Head = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const loginHandler = () => {
    signInWithGoogle();
  };
  const logOutHandler = () => {
    signOut(auth);
  };

  return (
    <div className="flex items-center justify-between bg-[#AF7EEB] text-white p-5 rounded-md shadow-md">
      <h1 className="text-2xl">To Do</h1>
      {user ? (
        <button
          className={`${buttonClass} border-2 ${hoverOnZoom} hover:scale-110`}
          onClick={logOutHandler}
        >
          Log Out
        </button>
      ) : (
        <button
          className={`${buttonClass} border-2 ${hoverOnZoom} hover:scale-110`}
          onClick={loginHandler}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Head;
