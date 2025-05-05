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

// Global MongoDB connect (only once)
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,  // 30 seconds timeout
    });
    isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
connectDB();
app.listen(5000)

module.exports = app;
