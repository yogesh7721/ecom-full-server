// userGetAllOrders
// userGetOrderDetails
// userUpdatePassword
// userPlaceOrder
// userCancelOrder

exports.userGetAllOrders = asyncHandler(async (req, res) => {
    res.json({ message: "User Order Success" })
})
exports.userGetOrderDetails = asyncHandler(async (req, res) => {
    res.json({ message: "user Order Details Success" })
})
exports.userUpdatePassword = asyncHandler(async (req, res) => {
    res.json({ message: "user update Password Success" })
})
exports.userPlaceOrder = asyncHandler(async (req, res) => {
    res.json({ message: "user place order Success" })
})
exports.userCancelOrder = asyncHandler(async (req, res) => {
    res.json({ message: "user CancelOrder Success" })
})