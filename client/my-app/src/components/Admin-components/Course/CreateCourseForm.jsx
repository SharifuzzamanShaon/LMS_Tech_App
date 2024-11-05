"use client";
import React, { useState } from "react";
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
import CourseDataModule from "./courseData/CourseDataModule";
import { useDispatch } from "react-redux";
import { setCourseInfo } from "../../../../redux/features/admin/createCourseSlice";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email"),
  // .required("Please Enter your email"),
  // password: Yup.string().required("Please Enter your password").min(6),
});

const CreateCourseForm = () => {
  const [benefits, setBenefits] = useState([]);
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState("");
  const dispatch = useDispatch();
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
      name: "",
      description: "",
      price: 0,
      estimatedPrice: 0,
      tags: [],
      level: "",
      demoUrl: "",
      benefits: [{ id: Date.now() }, { value: "" }],
      courseData: [
        {
          title: "",
          description: "",
          videoUrl: "",
          videoThumbnail: "",
          videoSection: "",
          videoLength: 0,
          videoPlayer: "",
          links: "",
        },
      ],
    },
    validationSchema: Schema,
    onSubmit: async (courseInfo) => {
      dispatch(setCourseInfo(courseInfo));
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <form>
        <div className="space-y-4 p-4 max-w-4xl mx-auto font-Poppins grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Name Input */}
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="name" className="dark:text-white text-black">
              Course Name
            </InputLabel>
            <Input
              type="text"
              className="dark:text-white text-black"
              id="name"
              value={values.name}
              onChange={handleChange}
              aria-describedby="name-helper-text"
              // required
            />
            <FormHelperText
              id="name-helper-text"
              className="dark:text-white text-black"
            >
              {errors.name && touched.name ? (
                <span className="text-red-600">{errors.name}</span>
              ) : (
                <span>Enter course name</span>
              )}
            </FormHelperText>
          </FormControl>

          {/* Course Description Input */}
          <FormControl>
            <CourseDescription />
          </FormControl>

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
          <FormControl>
            <GetCourseTags tags={tags} setTags={setTags}></GetCourseTags>
          </FormControl>
          {/* Level Input */}
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
        </div>
      </form>
      <hr></hr>
      <div className="flex flex-col items-center my-4">
        {/* Benefits Input */}
        <FormControl>
          <p className="mb-4 text-lg text-gray-700 dark:text-white">
            Benefits of this course
          </p>
          {benefits.map((input, index) => (
            <div key={input.id} className="flex items-center space-x-4 mb-4">
              <Input
                key={index}
                type="text"
                className="dark:text-white text-black w-full  shadow-sm focus:ring  p-2"
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
          <Button
            className="mt-2 text-black dark:text-white"
            onClick={handleAddInput}
            variant="contained"
            disabled={benefits.length >= 5}
            size="sm"
          >
            Add Benefit
          </Button>
        </FormControl>
      </div>
      <hr></hr>
      <div className="flex flex-col items-center justify-center my-3">
        <CourseDataModule></CourseDataModule>
      </div>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        size="medium"
      >
        Upload Now
      </Button>
    </>
  );
};
export default CreateCourseForm;
