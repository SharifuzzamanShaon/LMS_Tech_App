const {
  register,
  login,
  googleAuth,
  foregtPassword,
  resetPassword,
  verifyAccount,
  confirmVerification,
  activation,
} = require("../controller/auth");
const { runValidation } = require("../middleware/validation");
const { schemas } = require("../middleware/validation/schema");

const router = require("express").Router();

router.post("/register", runValidation(schemas.signup), register);
router.post("/activate-account", activation);
router.post("/login", login);
router.post("/google", googleAuth);
router.post("/forget-password", foregtPassword);
router.post(
  "/reset-password",
  runValidation(schemas.resetPassword),
  resetPassword
);
module.exports = router;
