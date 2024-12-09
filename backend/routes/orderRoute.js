const express = require('express');
const { getOrder, getDefectiveOrder, getExportOrder } = require('../controllers/orderController')
const router = express.Router();

router.get('/', getOrder)
router.get('/defective', getDefectiveOrder)
router.get('/export', getExportOrder)

module.exports = router;
