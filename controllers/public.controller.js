//publicGetALLproducts
//publicGetProductDetails
const asyncHandler = require("express-async-handler")
const Product = require("../model/Product")

exports.publicGetAllProduct = asyncHandler(async (req, res) => {
    const result = await Product.find({ active: true })

    res.json({ message: "public product Success", result })
})
exports.publicGetProductDetails = asyncHandler(async (req, res) => {
    const result = await Product.findById(req.param.id)
    res.json({ message: "public Product Details Success", result })
})