const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');

router.delete('/delete/:id' ,ProductController.deleteProduct)



module.exports = router