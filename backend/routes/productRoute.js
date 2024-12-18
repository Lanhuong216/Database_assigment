const express = require('express');
const router = express.Router();
const { getProduct, getSupplier, getInventory, getProductId } = require('../controllers/productController')

router.get('/', getProduct)
router.get('/supplier', getSupplier)
router.get('/inventory', getInventory)
router.get('/:id', getProductId)
module.exports = router;
