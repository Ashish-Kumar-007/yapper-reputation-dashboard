// models/Yapper.js
const mongoose = require('mongoose');

const YapperSchema = new mongoose.Schema({
  name: String,
  totalYaps: Number,
  successfulYaps: Number,
  successRate: Number,
  activeStreak: Number,
  totalRejections: Number,
  reputationScore: Number,
  badges: [String],
  lastActiveDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  reputationHistory: [
    {
      day: String, // ISO date string (e.g., '2025-04-01')
      score: Number,
    },
  ],
});

module.exports = mongoose.model('Yapper', YapperSchema);
