// server.js
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

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch(err => console.log(err));
