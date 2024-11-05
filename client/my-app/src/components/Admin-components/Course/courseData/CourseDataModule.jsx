"use client";
import CourseAccordion from "@/utils/CourseAccordion";
import InputNumber from "@/utils/InputNumber";
import { Button, FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
const CourseDataModule = () => {
  const [totalSection, setTotalSection] = useState(0);
  const [content, setContent] = useState([{ id: Date.now() }, { value: "" }]);
  const handleRemoveInput = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };
  const handleAddInput = () => {
    if (content.length <= totalSection) {
        setContent([...content, { id: Date.now(), value: "" }]);
    }
  };
  return (
    <>
      <InputNumber
        setTotalSection={setTotalSection}
        totalSection={totalSection}
      />
      <FormControl>
        <p className="mb-4 text-lg text-gray-700 dark:text-white">
          Course-content by section
        </p>
        {content.map((input, index) => (
          <div key={input.id} className="flex items-center space-x-4 mb-4">
            <CourseAccordion/>
            <button
              onClick={() => handleRemoveInput(input.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              <FiDelete />
            </button>
          </div>
        ))}
        <Button
        variant="outlined"
          className="mt-2 text-black dark:text-white"
          onClick={handleAddInput}
          disabled={content.length >= totalSection}
          size="sm"
        >
          Add New Section
        </Button>
      </FormControl>
    </>
  );
};

export default CourseDataModule;


    {/* Course Data Title Input */}
          {/* <FormControl fullWidth variant="outlined">
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
          </FormControl> */}

          {/* Course Data Description Input */}
          {/* <FormControl fullWidth variant="outlined">
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
          </FormControl> */}