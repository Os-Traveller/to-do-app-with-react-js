import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = ({ size, msg }) => {
  const [loading, setLoading] = useState(true);
  // const []
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className={`loader-container flex items-center justify-center ${loading ? "" : "hidden"}`}
        >
          <div className="loader" style={{ height: size, width: size }}></div>
        </div>
      ) : (
        <h1 className="text-center text-2xl">{msg}</h1>
      )}
    </>
  );
};

export default Loader;
