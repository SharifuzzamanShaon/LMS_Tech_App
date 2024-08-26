const jwt = require("jsonwebtoken");
const { error } = require("../../utils/error");
const { redis } = require("../../DB/redis");

const authMiddleware = async (req, res, next) => {
  try {
    // let token = req.headers.authorization
    const token = req.cookies.refresh_token;
    const decode = jwt.verify(token, process.env.REFRESH_TOKEN_KEY);
    if (!decode) throw error("invalid token", 400);
    const validUser = await redis.get(`"${decode._id}"`);
    if (!validUser)
      return res
        .status(400)
        .send({ success: false, message: "Unauthenticate user" });
    const userInfo = {
      _id: validUser._id,
      username: validUser.username,
      email: validUser.email,
      avatar: validUser.avatar,
      role: validUser.role,
    };
    req.user = userInfo;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
