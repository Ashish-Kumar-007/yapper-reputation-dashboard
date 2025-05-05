const Yapper = require('../models/Yapper');


// Get profile (GET /api/yapper/:id)
exports.getYapperProfile = async (req, res) => {
  try {
    const yapper = await Yapper.findById(req.params.id);

    if (!yapper) return res.status(404).json({ error: 'Yapper not found' });

    const { successfulYaps, totalYaps, activeStreak } = yapper;

    // Calculate additional fields
    const successRate = totalYaps ? +(successfulYaps / totalYaps * 100).toFixed(2) : 0;
    const reputationScore = +(successRate * 0.6 + activeStreak * 0.4).toFixed(2);

    // Add to the response object
    yapper.successRate = successRate;
    yapper.reputationScore = reputationScore;

    const badges = [];
    if (totalYaps >= 10) badges.push("10 Yaps");
    if (activeStreak >= 5) badges.push("5-Day Streak");
    if (yapper.successRate >= 80) badges.push("80% Success Rate");
  
    yapper.badges = badges;
    yapper.save(); // Save the updated Yapper document

    res.json(yapper);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};




exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboardData = await Yapper.find({})
      .sort({ reputationScore: -1 })
      .limit(5)
      .select('name reputationScore');

    // Shape the data into the desired JSON format
    const leaderboard = leaderboardData.map((user) => ({
      name: user.name,
      reputationScore: user.reputationScore,
    }));

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
