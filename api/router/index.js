const express = require('express')
const router = express.Router()
const userRouter = require("./user")
const authRouter = require("./auth")
const accessProfile = require("./profileRouter")
const { route } = require('../app')
const productRouter = require('./ProductRouter')
const categoryRouter = require("./CategoryRouter")
const authMiddleware = require('../middleware/authenticate/authMiddleware')

router.use("/user", userRouter)
router.use("/profile", authMiddleware, accessProfile);
router.use("/auth", authRouter)
router.use("/products", productRouter)
router.use("/product/category",categoryRouter)

module.exports = router