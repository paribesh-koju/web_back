const router = require('express').Router()
const productController = require('../controllers/productController')
router.post('/create', productController.createProduct)

//fetch all
router.get('/get_all_products', productController.getAllProducts)

//exporting
module.exports = router;