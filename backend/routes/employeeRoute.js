const express = require('express');
const { getEmp } = require('../controllers/emplController');

const router = express.Router();

router.get('/', getEmp)
module.exports = router;
