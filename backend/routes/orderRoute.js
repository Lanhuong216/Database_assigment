const express = require('express');
const { getOrder, getDefectiveOrder, getExportOrder, getSpecificOrder, postOrder } = require('../controllers/orderController')
const router = express.Router();

router.get('/', getOrder)
router.post('/', postOrder)
router.get('/defective', getDefectiveOrder)
router.get('/export', getExportOrder)
router.get('/:id', getSpecificOrder)

module.exports = router;
