"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUpdateAvatarMutation } from "../../../../redux/features/user/userApi";
import axios from "axios";
const UserAccount = ({ user }) => {
  const [preview, setPreview] = useState("");
  const [avatar, setAvatarBase64] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadAvatar, { isSuccess, data, error }] = useUpdateAvatarMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     const msg = data.message || "Avatar upload is success";
  //     toast.success(msg);
  //   }
  //   if (error) {
  //     if ("data" in error) {
  //       toast.error(error.data.message);
  //     }
  //   }
  // }, [isSuccess, error]);

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarBase64(reader.result);
      };
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview state to the Data URL
      };

      reader.readAsDataURL(file);
    }
  };
  console.log(preview);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(avatar);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const res = await axios.patch(
        "http://localhost:5000/api/v1/user/upldate-avatar",
        { avatar },
        config
      );
      if (res) {
        if (res.status == 200) {
          toast.success("Your Profile Image Updated");
        }
      }
    } catch (error) {
      toast.error("Something went worng");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
        {preview ? (
          <Image
            src={preview}
            alt="Avatar Preview"
            width={160}
            height={160}
            className="object-cover"
          />
        ) : (
          <Image
            src={user.avatar}
            alt="Avatar Preview"
            width={160}
            height={160}
            className="object-cover"
          />
        )}

        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-slate-700">
          <span className="text-gray-500 dark:text-gray-400">No Image</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        {/* Custom file upload button */}
        <div className="relative">
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer inline-block py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors"
          >
            Choose File
          </label>
          <input
            type="file"
            id="avatar-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 transition-colors"
        >
          Upload Avatar
        </button>
      </form>
    </div>
  );
};

export default UserAccount;
