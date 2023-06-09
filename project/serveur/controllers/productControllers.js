const Product = require("../models/productModel")


// @desc add a new product
// @params POST /api/product/
// @access PRIVATE - admin
exports.addProduct = async (req, res) => {
    try {
        const newProduct = await Product.create({...req.body})
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({ msg: "something went wrong !" });
    }
}

// @desc add a new product
// @params POST /api/product/
// @access PRIVATE - admin
exports.getProducts = async (req, res) => {
  try {
    const Products = await Product.create({...req.body});
    res.status(201).json(Products);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong !" });
  }
};
// @desc add a new product
// @params POST /api/product/
// @access PRIVATE - admin
exports.updateProduct = async (req, res) => {
    try {
       await Product.findByIdAndUpdate(req.params.prodId, {...req.body},{new:true})
        res.status(200).json({msg:'product updated'})
    } catch (error) {
        res.status(500).json({ msg: "something went wrong !" });
    }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.prodId,
    );
    res.status(200).json({ msg: "product deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong !" });
  }
};



