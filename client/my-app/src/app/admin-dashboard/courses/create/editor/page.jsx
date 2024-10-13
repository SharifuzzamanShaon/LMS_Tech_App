"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Texteditor = () => {
  const [value, setValue] = useState("");

  const router = useRouter();
  const handleBackClick = () => {
    router.back(); // Navigates to the previous page
  };
  const handleSave = () => {
    localStorage.setItem("desc", value);
  };
  return (
    <div className=" min-h-screen m-6">
      <Link href="/admin-dashboard/courses/create">
        <RxCross1
          className="cursor-pointer mb-3 text-black dark:text-white"
          onClick={handleBackClick}
        />
      </Link>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="text-black dark:text-white"
      ></ReactQuill>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};

export default Texteditor;
