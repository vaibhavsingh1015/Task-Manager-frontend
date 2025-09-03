const mongoose = require('mongoose');
const Task = require('../../models/Task');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token' });
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = decoded;

    const { id } = req.query;

    if (req.method === 'GET') {
      const task = await Task.findOne({ _id: id, user: req.user.id });
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } else if (req.method === 'PUT') {
      const { title, description } = req.body;
      const task = await Task.findOneAndUpdate(
        { _id: id, user: req.user.id },
        { title, description },
        { new: true }
      );
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } else if (req.method === 'DELETE') {
      const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json({ message: 'Task deleted' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
