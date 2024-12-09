const express = require('express');
const { getEmp } = require('../controllers/userController');

const router = express.Router();

router.get('/', getEmp)
module.exports = router;
