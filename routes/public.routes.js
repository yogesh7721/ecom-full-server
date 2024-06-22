const router = require("express").Router()

const publicController = require("./../controllers/public.controller")

router
    .post("/public-product", publicController.publicGetAllProduct)
    .post("/publice-productDetail", publicController.publicGetProductDetails)

module.exports = router