const { uploadCourse, editCourse } = require("../controller/courseController");

const router = require("express").Router();

router.post("/create", uploadCourse);
router.patch("/edit-course/:courseId", editCourse);
module.exports = router;
