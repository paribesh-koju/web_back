const router = require('express').Router()
const productController = require('../controllers/productController')
const { authGuard, adminGuard } = require('../middleware/authGuard')
router.post('/create', productController.createProduct)

//fetch all
router.get('/get_all_products', productController.getAllProducts)

//fetch single product
// if POST, body(data)
router.get('/get_single_product/:id',authGuard, productController.getProduct)

//delete product
router.delete('/delete_product/:id',adminGuard, productController.deleteProduct)

//update product
router.put('/update_product/:id',adminGuard, productController.updateProduct)

//exporting
module.exports = router;