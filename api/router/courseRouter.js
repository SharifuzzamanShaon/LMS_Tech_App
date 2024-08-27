const {
  uploadCourse,
  editCourse,
  getSingleCourse,
} = require("../controller/courseController");

const router = require("express").Router();

router.post("/create", uploadCourse);
router.patch("/edit-course/:courseId", editCourse);
router.get("/get-course/:courseId", getSingleCourse);
module.exports = router;
