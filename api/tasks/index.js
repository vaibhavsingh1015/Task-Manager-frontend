const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Task = require('../../models/Task');

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

    if (req.method === 'GET') {
      const tasks = await Task.find({ user: req.user.id });
      res.json(tasks);
    } else if (req.method === 'POST') {
      const { title, description } = req.body;
      const task = new Task({ title, description, user: req.user.id });
      await task.save();
      res.status(201).json(task);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
