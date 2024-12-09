const express = require('express');
const router = express.Router();
const { getProduct, getSupplier, getInventory } = require('../controllers/productController')

router.get('/', getProduct)
router.get('/supplier', getSupplier)
router.get('/inventory', getInventory)
module.exports = router;
