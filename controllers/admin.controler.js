const asyncHandler = require("express-async-handler")
const Product = require("../model/Product")
const { upload } = require("../utils/uploads")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.getAllProducts = asyncHandler(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "Prodcut fetch Success", result })
})
exports.addProducts = asyncHandler(async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(404).json({ message: "upload error" })
        }
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        // console.log(req.file.path)
        const result = await Product.create({ ...req.body, images: secure_url })
        res.json({ message: "Product Add Success", result })
    })
})
exports.updateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Prodcut Update Success" })
})
exports.deleteProducts = asyncHandler(async (req, res) => {

    const result = await Product.findById(req.params.id)

    const str = result.images.split("/")
    const img = str[str.length - 1].split(".")[0]
    await cloudinary.uploader.destroy(img)
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Prodcut Delete Success" })
})
exports.deactivateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Prodcut Deactivate Success" })
})
exports.activateProducts = asyncHandler(async (req, res) => {
    res.json({ message: "Prodcut Activate Success" })
})
exports.getProductDetails = asyncHandler(async (req, res) => {
    res.json({ message: "Prodcut Details Fetch Success" })
})


// Order
exports.getAllOrders = asyncHandler(async (req, res) => {
    res.json({ message: "Order Fetch Success" })
})
exports.getAllOrderDetails = asyncHandler(async (req, res) => {
    res.json({ message: "Order Details Fetch Success" })
})
exports.cancelOrder = asyncHandler(async (req, res) => {
    res.json({ message: "Order cancel Success" })
})
exports.updateOrderStatus = asyncHandler(async (req, res) => {
    res.json({ message: "Order status update Success" })
})


// Users
exports.getAllUsers = asyncHandler(async (req, res) => {
    res.json({ message: "User fetch Success" })
})
exports.getUserdetails = asyncHandler(async (req, res) => {
    res.json({ message: "User detail fetch Success" })
})
exports.blockUser = asyncHandler(async (req, res) => {
    res.json({ message: "User block Success" })
})
exports.unblockUser = asyncHandler(async (req, res) => {
    res.json({ message: "User un-Block Success" })
})
exports.getUserOrders = asyncHandler(async (req, res) => {
    res.json({ message: "User order Fetch Success" })
})




