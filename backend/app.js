// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const yapperRoutes = require('./routes/yapperRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', yapperRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB Error:', err));

module.exports = app;
