import React from "react";
// import Button from "./Button";

const Footer = ({ deleteAllTask }) => {
  // const deleteAllTask = () => {
  //   setTasks([]);
  // };

  return (
    <div>
      <button className="btn" onClick={deleteAllTask}>
        Delete All Task
      </button>
    </div>
  );
};

export default Footer;
