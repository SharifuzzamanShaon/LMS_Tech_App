const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const courseRouter = require("./courseRouter");
const accessProfile = require("./profileRouter");
const productRouter = require("./ProductRouter");
const categoryRouter = require("./CategoryRouter");
const authMiddleware = require("../middleware/authenticate/authMiddleware");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/profile", authMiddleware, accessProfile);
router.use("/course", courseRouter);
router.use("/products", productRouter);
router.use("/product/category", categoryRouter);

module.exports = router;
