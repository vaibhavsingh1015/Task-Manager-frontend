import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
    await axios.post('http://localhost:5002/api/tasks', { title, description }, {
      headers: { Authorization: `Bearer ${token}` }
    });
      setTitle('');
      setDescription('');
      onAdd();
    } catch (err) {
      alert('Failed to add task');
    }
  };

  return (
<form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
  <button type="submit">Add Task</button>
</form>
  );
};

export default TaskForm;
