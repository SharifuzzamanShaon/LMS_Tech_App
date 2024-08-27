const { CourseModel } = require("../model/course.model");
const { uploadOnCloudinary } = require("../utils/FileUpload");
const fs = require("fs");
const uploadCourse = async (req, res, next) => {
  try {
    let data = req.body;
    const base64Image = data.thumbnail;
    if (base64Image) {
      const buffer = Buffer.from(base64Image, "base64");
      fs.writeFileSync("outputfile", buffer);
      const response = await uploadOnCloudinary(base64Image);
      data.thumbnail = {
        public_id: response.url,
        url: response.secure_url,
      };
    }
    const course = await CourseModel.create(data);
    res.status(200).send({ success: true, course });
  } catch (error) {
    next(error);
  }
};
const editCourse = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.courseId;
    const course = await CourseModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).send({ success: true, course });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  uploadCourse,
  editCourse,
};
