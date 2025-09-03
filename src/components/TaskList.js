import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    try {
    const res = await axios.get('http://localhost:5002/api/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    });
      setTasks(res.data);
    } catch (err) {
      alert('Failed to fetch tasks');
    }
  };

  const toggleStatus = async (id, status) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:5002/api/tasks/${id}`, { status: status === 'pending' ? 'completed' : 'pending' }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (err) {
      alert('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5002/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  return (
    <div>
      <div className="card-title">
        <h3 className="task-manager-subheading">My tasks ({tasks.length})</h3>
        <span className="menu-dots">⋯</span>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className={`task-item ${task.status === 'completed' ? 'completed' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
<div className={`checkbox ${task.status === 'completed' ? 'checked' : ''}`} onClick={() => toggleStatus(task._id, task.status)}></div>
            <div className="task-content" style={{ display: 'inline-block', cursor: 'pointer', flex: 1 }} onClick={() => {
              const descElem = document.getElementById(`desc-${task._id}`);
              if (descElem.style.display === 'block') {
                descElem.style.display = 'none';
              } else {
                descElem.style.display = 'block';
              }
            }}>
              <span className="task-title" style={{ fontWeight: '600' }}>{task.title}</span>
              <div id={`desc-${task._id}`} style={{ display: 'none', fontSize: '0.9rem', color: '#6B7280', marginTop: '0.25rem' }}>
                {task.description}
              </div>
            </div>
<span className="task-due" style={{ marginLeft: '0.5rem' }}>Today</span>
<button className="delete-btn" style={{ fontSize: '1rem', padding: '0.25rem 0.5rem', width: '20px', height: '20px', border: '2px solid #FFD54A', borderRadius: '4px', marginLeft: '8px', cursor: 'pointer' }} onClick={() => deleteTask(task._id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
