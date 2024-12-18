const express = require('express');
const { postNew } = require('../controllers/marketingController')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get function')
})
router.post('/', postNew)

module.exports = router;
