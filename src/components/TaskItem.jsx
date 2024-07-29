import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title: editedTitle, description: editedDescription, timestamp: new Date().toISOString() };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
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
        {isEditing ? (
          <div className="edit-fields">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ) : (
          <>
            <span>{task.title} {task.completed ? "(Done)" : ""}</span>
            <button onClick={(e) => { e.stopPropagation(); handleEdit(); }}>Edit</button>
            <button onClick={(e) => { e.stopPropagation(); handleDelete(); }}>Delete</button>
          </>
        )}
      </div>
      {expanded && !isEditing && (
        <div className="task-details">
          <p className="task-description">{task.description}</p>
          <small className="task-timestamp">
            Last updated: {new Date(task.timestamp).toLocaleString()}
          </small>
        </div>
      )}
      {isEditing && (
        <div className="edit-actions">
          <button onClick={(e) => { e.stopPropagation(); handleSave(); }}>Save</button>
          <button onClick={(e) => { e.stopPropagation(); handleCancel(); }}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
