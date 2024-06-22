
const router = require("express").Router()

const userController = require("./../controllers/user.controller")

router
    .post("/user-order", userController.userGetAllOrders)
    .get("/user-order-detail", userController.userGetOrderDetails)
    .put("/user-password", userController.userUpdatePassword)
    .post("/user-place-order", userController.userPlaceOrder)
    .put("/user-cancel-order", userController.userCancelOrder)

module.exports = router