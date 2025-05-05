const Yapper = require('../models/Yapper');

// Helper function to calculate score and badges
const calculateStats = (yapper) => {
  const { successfulYaps, totalYaps, activeStreak } = yapper;
  yapper.successRate = totalYaps ? +(successfulYaps / totalYaps * 100).toFixed(2) : 0;
  yapper.reputationScore = +(yapper.successRate * 0.6 + activeStreak * 0.4).toFixed(2);

  // Update badges
  const badges = [];
  if (totalYaps >= 10) badges.push("🥉 10 Yaps");
  if (activeStreak >= 5) badges.push("🥈 5-Day Streak");
  if (yapper.successRate >= 80) badges.push("🥇 80%+ Success Rate");

  yapper.badges = badges;
  yapper.updatedAt = new Date();
  return yapper;
};

// POST /api/yap
exports.submitYap = async (req, res) => {
  const { yapperId, isSuccess } = req.body;

  try {
    let yapper = await Yapper.findById(yapperId);
    if (!yapper) return res.status(404).json({ message: 'Yapper not found' });

    yapper.totalYaps += 1;
    if (isSuccess) {
      yapper.successfulYaps += 1;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (yapper.lastActiveDate && new Date(yapper.lastActiveDate).toDateString() === yesterday.toDateString()) {
        yapper.activeStreak += 1;
      } else {
        yapper.activeStreak = 1;
      }

      yapper.lastActiveDate = new Date();
    } else {
      yapper.totalRejections += 1;
    }

    yapper = calculateStats(yapper);
    await yapper.save();

    res.status(200).json(yapper);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/yapper/:id
exports.getYapper = async (req, res) => {
  try {
    const yapper = await Yapper.findById(req.params.id);
    if (!yapper) return res.status(404).json({ message: 'Yapper not found' });

    res.json(yapper);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
