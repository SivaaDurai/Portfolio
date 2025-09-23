import React, { useState } from 'react';
import './Tasktodo.css';

const Taskk1 = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [completed, setCompleted] = useState([]);

  const add = () => {
    if (value.trim()) {
      setTasks([...tasks, value]);
      setValue('');
    }
  };

  const complete = (index) => {
    setCompleted([...completed, tasks[index]]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const del = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <center>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        placeholder="Add a Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={add}>Add</button>

      <hr />
      <h2>📌 Pending Tasks</h2>
      {tasks.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => complete(index)}>✅</button>
          <button onClick={() => del(index)}>🗑️</button>
        </div>
      ))}

      <hr />
      <h2>✅ Completed Tasks</h2>
      {completed.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </center>
  );
};

export default Taskk1;
