import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function Home({ refresh, onAdd }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="auth-form">
      <h1 className="task-manager-heading">Task Manager</h1>
      <TaskList key={refresh} />
      <TaskForm onAdd={onAdd} />
      <button onClick={handleLogout} style={{ marginTop: '1rem', width: '100%', padding: '0.75rem 1rem', backgroundColor: '#FFD54A', border: 'none', borderRadius: '0.75rem', fontWeight: '700', fontSize: '1rem', color: '#111827', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
}

function App() {
  const [refresh, setRefresh] = React.useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home refresh={refresh} onAdd={handleAdd} />} />
      </Routes>
    </Router>
  );
}

export default App;
