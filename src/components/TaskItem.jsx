import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, completed: !task.completed };
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-item" onClick={toggleExpand}>
      <div className={`task-title ${task.completed ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        {task.title} {task.completed ? "(Done)" : ""}
        <button onClick={(e) => { e.stopPropagation(); handleDelete(); }}>Delete</button>
      </div>
      {expanded && (
        <div className="task-details">
          <p className="task-description">{task.description}</p>
          <small className="task-timestamp">
            Last updated: {new Date(task.timestamp).toLocaleString()}
          </small>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
