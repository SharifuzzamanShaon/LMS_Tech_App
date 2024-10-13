"use client";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ErrorMessage, Field, FieldArray, useFormik } from "formik";
import { FiDelete } from "react-icons/fi";
import GetCourseTags from "./GetCourseTags";
import CourseDescription from "./CourseDescription/CourseDescription";
const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email"),
  // .required("Please Enter your email"),
  // password: Yup.string().required("Please Enter your password").min(6),
});

const CreateCourseForm = () => {
  useEffect(() => {}, []);

  const handleSelectTags = (event) => {
    setTags(event.target.value);
  };

  const [benefits, setBenefits] = useState([{ id: Date.now() }, { value: "" }]);
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const handleAddInput = () => {
    if (benefits.length <= 5) {
      setBenefits([...benefits, { id: Date.now(), value: "" }]);
    }
  };
  const handleRemoveInput = (id) => {
    setBenefits(benefits.filter((benefit) => benefit.id !== id));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      level: "",
      tags: [],
      benefits: [],
      courseData: { title: "", description: "" },
    },
    validationSchema: Schema,
    onSubmit: async (courseInfo) => {
      const description = localStorage.getItem("desc");
      courseInfo.benefits = benefits;
      courseInfo.tags = tags;
      courseInfo.level = level;
      courseInfo.description = description;
      console.log(courseInfo);
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 max-w-4xl mx-auto font-Poppins grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Course Name Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="courseName"
            className="dark:text-white text-black"
          >
            Course Name
          </InputLabel>
          <Input
            type="text"
            className="dark:text-white text-black"
            id="courseName"
            value={values.courseName}
            onChange={handleChange}
            aria-describedby="courseName-helper-text"
            // required
          />
          <FormHelperText
            id="courseName-helper-text"
            className="dark:text-white text-black"
          >
            {errors.courseName && touched.courseName ? (
              <span className="text-red-600">{errors.courseName}</span>
            ) : (
              <span>Enter the course name</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Course Description Input */}
        <CourseDescription
          description={description}
          setDescription={setDescription}
        />

        {/* Price Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="price" className="dark:text-white text-black">
            Price
          </InputLabel>
          <Input
            type="number"
            className="dark:text-white text-black"
            id="price"
            value={values.price}
            onChange={handleChange}
            aria-describedby="price-helper-text"
            // required
          />
          <FormHelperText
            id="price-helper-text"
            className="dark:text-white text-black"
          >
            {errors.price && touched.price ? (
              <span className="text-red-600">{errors.price}</span>
            ) : (
              <span>Enter the price of the course</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Tags Input */}
        <GetCourseTags tags={tags} setTags={setTags}></GetCourseTags>
        {/* Level Input */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="This course is for _"
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Select level"
            >
              <MenuItem value={"beginner"}>Beginner</MenuItem>
              <MenuItem value={"intermediate"}>Intermediate</MenuItem>
              <MenuItem value={"advance"}>Advance</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Demo URL Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="demoUrl"
            className="dark:text-white text-black mb-4"
          >
            Demo URL
          </InputLabel>
          <Input
            type="url"
            className="dark:text-white text-black"
            id="demoUrl"
            value={values.demoUrl}
            onChange={handleChange}
            aria-describedby="demoUrl-helper-text"
            // required
          />
          <FormHelperText id="demoUrl" className="dark:text-white text-black">
            {errors.demoUrl && touched.demoUrl ? (
              <span className="text-red-600">{errors.demoUrl}</span>
            ) : (
              <span>Provide a URL for course demo</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Benefits Input */}
        {/* <Benefits setBenefits={setBenefits} /> */}

        <FormControl>
          <p className="mb-4 text-lg text-gray-700 dark:text-white">
            Benefits of this course
          </p>
          {benefits.map((input, index) => (
            <div key={input.id} className="flex items-center space-x-4 mb-4">
              <Input
                key={index}
                type="text"
                className="dark:text-white text-black w-full border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                value={input.value}
                minLength={5}
                maxLength={20}
                id="benefits"
                placeholder="Enter at least 20 characters"
                onChange={(e) => {
                  const newBenefits = [...benefits];
                  newBenefits[index].value = e.target.value;
                  setBenefits(newBenefits);
                }}
              />
              <button
                onClick={() => handleRemoveInput(input.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
              >
                <FiDelete />
              </button>
            </div>
          ))}
          {/* {benefits && benefits?.some((input) => input.value.length > 20) && (
            <FormHelperText className="text-red-500" id="benefits">
              Each benefit must be at least 20 characters long.
            </FormHelperText>
          )} */}
          <Button
            className="mt-2 text-black dark:text-white"
            onClick={handleAddInput}
            disabled={benefits.length >= 5}
            size="sm"
          >
            Add Benefit
          </Button>
        </FormControl>
        {/* Course Data Title Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="courseDataTitle"
            className="dark:text-white text-black"
          >
            Course Data Title
          </InputLabel>
          <Input
            type="text"
            className="dark:text-white text-black"
            id="courseDataTitle"
            value={values.courseData.title}
            onChange={handleChange}
            aria-describedby="courseDataTitle-helper-text"
            // required
          />
          <FormHelperText
            id="courseDataTitle-helper-text"
            className="dark:text-white text-black"
          >
            {errors.courseData?.title && touched.courseData?.title ? (
              <span className="text-red-600">{errors.courseData.title}</span>
            ) : (
              <span>Enter the title for the course data</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Course Data Description Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="courseDataDescription"
            className="dark:text-white text-black"
          >
            Course Data Description
          </InputLabel>
          <Input
            type="text"
            className="dark:text-white text-black"
            id="courseDataDescription"
            value={values.courseData.description}
            onChange={handleChange}
            aria-describedby="courseDataDescription-helper-text"
            // required
          />
          <FormHelperText
            id="courseDataDescription-helper-text"
            className="dark:text-white text-black"
          >
            {errors.courseData?.description &&
            touched.courseData?.description ? (
              <span className="text-red-600">
                {errors.courseData.description}
              </span>
            ) : (
              <span>Provide a brief description for the course data</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Video URL Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="videoUrl" className="dark:text-white text-black">
            Video URL
          </InputLabel>
          <Input
            type="url"
            className="dark:text-white text-black"
            id="videoUrl"
            value={values.videoUrl}
            onChange={handleChange}
            aria-describedby="videoUrl-helper-text"
            // required
          />
          <FormHelperText
            id="videoUrl-helper-text"
            className="dark:text-white text-black"
          >
            {errors.videoUrl && touched.videoUrl ? (
              <span className="text-red-600">{errors.videoUrl}</span>
            ) : (
              <span>Provide a URL for the course video</span>
            )}
          </FormHelperText>
        </FormControl>

        {/* Video Thumbnail Input */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            htmlFor="videoThumbnail"
            className="dark:text-white text-black"
          >
            Video Thumbnail
          </InputLabel>
          <Input
            type="url"
            className="dark:text-white text-black"
            id="videoThumbnail"
            value={values.videoThumbnail}
            onChange={handleChange}
            aria-describedby="videoThumbnail-helper-text"
            // required
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Upload Now
        </Button>
      </form>
    </div>
  );
};
export default CreateCourseForm;
