//publicGetALLproducts
//publicGetProductDetails

exports.publicGetAllProduct = asyncHandler(async (req, res) => {
    res.json({ message: "public product Success" })
})
exports.publicGetProductDetails = asyncHandler(async (req, res) => {
    res.json({ message: "public Product Details Success" })
})