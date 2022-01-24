import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  const newData = new Set(task.text);
  //console.log(...newData);
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {/* {task.text} */}

        {[...newData]}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
