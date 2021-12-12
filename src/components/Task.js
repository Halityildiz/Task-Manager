// import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleDone }) => {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        <span style={{ textDecoration: "underline" }}>{task.text}</span>
        <FaTimesCircle
          className="icon"
          style={{
            fontSize: "24px",
            color: "red",
          }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <h4>*{task.day}</h4>
      <p style={{ color: "blue" }}>
        <span style={{ color: "red" }}>Note: </span> ({task.detail})
      </p>
    </div>
  );
};

export default Task;
