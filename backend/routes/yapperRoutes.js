const express = require('express');
const router = express.Router();
const { getLeaderboard, getYapperProfile } = require('../controllers/yapperController');

router.get('/leaderboard', getLeaderboard);
router.get('/:id', getYapperProfile);

module.exports = router;
