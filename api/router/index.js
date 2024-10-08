const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const courseRouter = require("./courseRouter");
const orderRouter = require("./orderRouter");
const accessProfile = require("./profileRouter");
const productRouter = require("./ProductRouter");
const categoryRouter = require("./CategoryRouter");
const conversationRouters = require("./ConversationRouters/conversationRouter");
const authMiddleware = require("../middleware/authenticate/authMiddleware");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/profile", authMiddleware, accessProfile);
router.use("/course", courseRouter);
router.use("/order", orderRouter);
router.use("/products", productRouter);
router.use("/product/category", categoryRouter);
router.use("/conversation", authMiddleware, conversationRouters);
module.exports = router;
