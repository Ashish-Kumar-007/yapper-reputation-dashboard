const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const yapperRoutes = require('./routes/yapperRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/yapper', yapperRoutes);

// Connect to MongoDB when app is first used (lazy connection pattern)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = app; // Export app for Vercel
