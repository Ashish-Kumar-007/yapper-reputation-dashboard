const express = require('express');
const router = express.Router();
const { submitYap, getYapper } = require('../controllers/yapperController');

router.post('/yap', submitYap);
router.get('/yapper/:id', getYapper);

module.exports = router;
