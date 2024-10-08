"use client";
import SidebarProfile from "@/components/Profile/SidebarProfile";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserAccount from "./UserProfilePageOptions/UserAccount";
import EnrolledCourse from "./UserProfilePageOptions/EnrolledCourse";
import ChangePassword from "./UserProfilePageOptions/ChangePassword";
import LogoutModule from "../AuthModule/LogoutModule";
const Profile = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[22%] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-white dark:text-white shadow-sm !important dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky
        ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        <SidebarProfile
          user={user}
          active={active}
          setActive={setActive}
          open={open}
          setOpen={setOpen}
        />
      </div>

      <div
        className={`ml-5 w-[78%] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-white dark:text-white shadow-sm !important dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky
        ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        {active === 1 && <UserAccount user={user}/>}
        {active === 2 && <EnrolledCourse />}
        {active === 3 && <ChangePassword />}
        {open && <LogoutModule open={open} setOpen={setOpen}/>}

      </div>
    </div>
  );
};

export default Profile;
