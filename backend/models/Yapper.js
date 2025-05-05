const mongoose = require('mongoose');

const YapperSchema = new mongoose.Schema({
  name: String,
  totalYaps: { type: Number, default: 0 },
  successfulYaps: { type: Number, default: 0 },
  successRate: { type: Number, default: 0 },
  activeStreak: { type: Number, default: 0 },
  totalRejections: { type: Number, default: 0 },
  reputationScore: { type: Number, default: 0 },
  badges: [String],
  lastActiveDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model('Yapper', YapperSchema);
