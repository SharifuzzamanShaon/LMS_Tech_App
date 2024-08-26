<<<<<<< HEAD
=======
const router = require("express").Router();
>>>>>>> api-auth
const {
  register,
  login,
  googleAuth,
  foregtPassword,
  resetPassword,
  verifyAccount,
  confirmVerification,
  activation,
<<<<<<< HEAD
} = require("../controller/auth");
const { runValidation } = require("../middleware/validation");
const { schemas } = require("../middleware/validation/schema");

const router = require("express").Router();

router.post("/register", runValidation(schemas.signup), register);
router.post("/activate-account", activation);
router.post("/login", login);
=======
  logout,
  updateToken,
} = require("../controller/auth");
const authMiddleware = require("../middleware/authenticate/authMiddleware");
const { runValidation } = require("../middleware/validation");
const { schemas } = require("../middleware/validation/schema");

router.post("/register", runValidation(schemas.signup), register);
router.post("/activate-account", activation);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/refresh", updateToken);
>>>>>>> api-auth
router.post("/google", googleAuth);
router.post("/forget-password", foregtPassword);
router.post(
  "/reset-password",
  runValidation(schemas.resetPassword),
  resetPassword
);
module.exports = router;
<<<<<<< HEAD
=======

// router.post("/verify-account", verifyAccount)
// router.post("/confirm-verification", confirmVerification)
>>>>>>> api-auth
