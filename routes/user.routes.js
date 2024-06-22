
const router = require("express").Router()

const userController = require("./../controllers/user.controller")

router
    .post("/get-order", userController.userGetAllOrders)
    .get("/get-order-detail/:id", userController.userGetOrderDetails)
    .put("/update-password", userController.userUpdatePassword)
    .post("/place-order/:id", userController.userPlaceOrder)
    .put("/order-cancel/:id", userController.userCancelOrder)

module.exports = router