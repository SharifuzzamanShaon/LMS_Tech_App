const { redis } = require("../DB/redis");
const { CourseModel } = require("../model/course.model");
const { error } = require("../utils/error");
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
    const base64Image = data.thumbnail;
    if (base64Image) {
      const buffer = Buffer.from(base64Image, "base64");
      fs.writeFileSync("outputfile", buffer);
      const response = await uploadOnCloudinary(base64Image);
      data.thumbnail = {
        public_id: response.url,
        url: response.secure_url,
      };
    } else {
      data.thumbnail;
    }
    const course = await CourseModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
    res.status(200).send({ success: true, course });
  } catch (error) {
    next(error);
  }
};
//Without purchas
const getSingleCourse = async (req, res, next) => {
  try {
    const id = req.params.courseId;
    const isCacheExist = await redis.get(id);
    if (isCacheExist) {
      res.status(200).send({ success: true, isCacheExist });
      console.log("from redis");
    } else {
      const course = await CourseModel.findById({ _id: id }).select(
        "-courseData.videoUrl -courseData.courseData -courseData.questions -courseData.links"
      );
      res.status(200).send({ success: true, course });
      await redis.set(id, course);
      console.log("from db");
    }
  } catch (error) {
    next(error);
  }
};
const getCourseByUser = async (req, res, next) => {
  try {
    let courseId = req.params.id;
    const userCourseList = req.user?.regCourses;
    const courseExist = userCourseList.find((item) => item._id === courseId);
    console.log(courseExist);

    if (!courseExist) {
      throw error("Not elegible for access this course", 403);
    } else {
      const course = await CourseModel.findById(courseId);
      const content = course?.courseData;
      res.status(200).send({ success: true, content });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  uploadCourse,
  editCourse,
  getSingleCourse,
  getCourseByUser,
};
