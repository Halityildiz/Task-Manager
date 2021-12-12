// import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleDone }) => {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <FaTimesCircle
          style={{
            fontSize: "24px",
            color: "red",
          }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <p style={{ color: "blue" }}>{task.detail}</p>
    </div>
  );
};

export default Task;
