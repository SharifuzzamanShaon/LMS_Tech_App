const {
  uploadCourse,
  editCourse,
  getSingleCourse,
  getCourseByUser,
} = require("../controller/courseController");
const authMiddleware = require("../middleware/authenticate/authMiddleware");
const router = require("express").Router();

router.post("/create", uploadCourse);
router.patch("/edit-course/:courseId", editCourse);
router.get("/get-course/:courseId", getSingleCourse);
router.get("/get-course-content/:id", authMiddleware, getCourseByUser);
module.exports = router;
