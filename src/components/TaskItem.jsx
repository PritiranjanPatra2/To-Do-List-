import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="task-item" onClick={toggleExpand}>
      <div className={`task-title ${task.completed ? "done" : ""}`}>
        {task.title} {task.completed ? "(Done)" : ""}
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
