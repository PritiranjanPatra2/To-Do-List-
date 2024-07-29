import React, { useState } from 'react';
import TaskItem from './TaskItem';
import SearchBar from './SearchBar';
import './TaskList.css';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="task-list">
      <SearchBar onSearch={handleSearch} />
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
