const express = require('express');
const { getOrder, getDefectiveOrder, getExportOrder, getSpecificOrder } = require('../controllers/orderController')
const router = express.Router();

router.get('/', getOrder)
router.get('/defective', getDefectiveOrder)
router.get('/export', getExportOrder)
router.get('/:id', getSpecificOrder)

module.exports = router;
