const express = require('express');
const { getOrder, getDefectiveOrder } = require('../controllers/orderController')
const router = express.Router();

router.get('/', getOrder)
router.get('/defective', getDefectiveOrder)

module.exports = router;
