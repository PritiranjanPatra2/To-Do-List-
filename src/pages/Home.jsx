import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Sample Task 1",
      description: "Description for Task 1",
      completed: false,
      timestamp: "2024-07-29T12:34:56Z"
    }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="home-container">
      <h1>Todo List</h1>
      <div className="task-form-container">
        <TaskForm onCreate={addTask} />
      </div>
      <div className="task-list-container">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;
