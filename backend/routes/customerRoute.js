const express = require('express');
const { getCus } = require('../controllers/customerController')

const router = express.Router();

router.get('/', getCus)
module.exports = router;
