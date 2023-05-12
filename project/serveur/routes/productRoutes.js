const express = require("express");
const { addProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productControllers");
const { authMidedleware } = require("../middlewares/athMiddleware");
const router = express.Router();

router.post('/', addProduct)
router.get('/', getProducts)
router.put("/:prodId", updateProduct);
router.delete("/:prodId", deleteProduct);

module.exports = router;
