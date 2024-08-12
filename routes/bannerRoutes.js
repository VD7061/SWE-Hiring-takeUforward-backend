const express = require('express');
const router = express.Router();
const { getBanner, updateBanner, createBanner } = require('../controllers/bannerController.js');


router.get('/banner', getBanner);

// Route to update banner data
router.put('/banner', updateBanner);


router.post('/banner', createBanner);
module.exports = router;
