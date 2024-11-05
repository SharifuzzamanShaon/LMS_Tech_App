"use client";
import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";
import reducer from "../auth/authSlice";

const initialState = {
  name: "",
  description: "",
  price: 299,
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
};

const createCourseSlice = createSlice({
  name: "createCourseSlice",
  initialState,
  reducers: {
    setCourseInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
        courseData: state.courseData,
      };
    },
    setCousreData: (state, action) => {
      console.log(action.payload);
      return {
        ...state, // Spread the existing state
        courseData: [
          ...state.courseData, // Keep existing courseData
          action.payload, // Add the new object to the array
        ],
      };
    },
  },
});

export const { setCourseInfo, setCousreData } = createCourseSlice.actions;
export default createCourseSlice.reducer;
