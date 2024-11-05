"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourseInfo } from "../../../../../redux/features/admin/createCourseSlice";
import EditorModal from "@/utils/TextEditor/EditorModal";

const CourseDescription = () => {
  const courseData = useSelector((state) => state.createCourseData);
  const dispatch = useDispatch();
  const setDescription = (e) => {
    dispatch(setCourseInfo({ description: e.target.value }));
  };
  return (
    <>
      <div class="relative">
        <textarea
          placeholder="Description"
          value={courseData.description}
          className="bg-transparent  text-black dark:text-white border-blue-800 p-2 pr-8 resize-none  w-full"
          onChange={setDescription}
        ></textarea>
        <span className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700">
          <EditorModal />
        </span>
      </div>
    </>
  );
};

export default CourseDescription;
