"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";

const SidebarProfile = ({ user, active, setActive, open, setOpen }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    setOpen(true);
    setActive(4);
  };
  return (
    <div className="w-full ">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-slate-800 dark:text-white
        ${active === 1 ? "dark:bg-slate-800 bg-slate-300" : "bg-transparent"}`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        ></Image>
        <h5 className="ml-4">My Account</h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-slate-800 dark:text-white
        ${active === 2 ? "dark:bg-slate-800 bg-slate-300" : "bg-transparent"}`}
        onClick={() => setActive(2)}
      >
        <FcIdea />
        <h5 className="ml-4">Enrolled Courses</h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-slate-800 dark:text-white
        ${active === 3 ? "dark:bg-slate-800 bg-slate-300" : "bg-transparent"}`}
        onClick={() => setActive(3)}
      >
        <MdOutlinePassword />
        <h5 className="ml-4">Change Password</h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-slate-800 dark:text-white
        ${active === 4 ? "dark:bg-slate-800 bg-slate-300" : "bg-transparent"}`}
        onClick={handleLogout}
      >
        <FiLogOut />
        <h5 className="ml-4">Logout</h5>
      </div>
    </div>
  );
};

export default SidebarProfile;
