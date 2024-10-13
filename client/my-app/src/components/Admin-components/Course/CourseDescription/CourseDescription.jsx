"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
const CourseDescription = ({ description, setDescription  }) => {
  
  return (
    <>
      <div class="relative">
        <textarea
          placeholder="Description"
          value={description}
          className="bg-transparent border text-black dark:text-white border-blue-800 p-2 pr-8 rounded-lg resize-none  w-full"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Link href="/admin-dashboard/courses/create/editor">
          <span className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700">
            <BsArrowsAngleExpand />
          </span>
        </Link>
      </div>
    </>
  );
};

export default CourseDescription;
