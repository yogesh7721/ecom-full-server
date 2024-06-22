// userGetAllOrders
// userGetOrderDetails
// userUpdatePassword
// userPlaceOrder
// userCancelOrder
const asyncHandler = require("express-async-handler")


exports.userGetAllOrders = asyncHandler(async (req, res) => {
    const result = await Order.find({ user: req.params.id })
    res.json({ message: "User Order Success", result })
})
exports.userGetOrderDetails = asyncHandler(async (req, res) => {
    const result = await Order.findById(req.params.id)
    res.json({ message: "user Order Details Success", result })
})
exports.userUpdatePassword = asyncHandler(async (req, res) => {
    res.json({ message: "user update Password Success" })
})
exports.userPlaceOrder = asyncHandler(async (req, res) => {
    await Order.create(req.order)
    res.json({ message: "user place order Success" })
})
exports.userCancelOrder = asyncHandler(async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, { status: "cancel" })
    res.json({ message: "user CancelOrder Success" })
})