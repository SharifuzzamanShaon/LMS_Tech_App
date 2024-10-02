"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserProfileMenu from "./ProfileShortcut/UserProfileMenu";

const Header = ({ open, activeItem, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  const handleClose = (e) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };
  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[70px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-{95%} md:w-{92%} m-auto py-2 h-full">
          <div className="w-full h-[70%] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[25px] font-Poppins font-500 text-black dark:text-white`}
              >
                A-A-O
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} />
              <ThemeSwitcher />
              <div className="block lg:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <div className="hidden lg:block">
                {user ? (
                  <UserProfileMenu imgSrc={user.avatar} />
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    disableScrollLock={true}
                    className="cursor-pointer ml-5 dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999 dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[9999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <Link
                href={"/"}
                className={`text-[20px] pt-5 ml-5 font-Poppins font-500 text-black dark:text-white`}
              >
                A-A-O-m
              </Link>
              <NavItems activeItem={activeItem} isMobile={true} />
              <div>
                {user ? (
                  <Image
                    src={user.avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    className="cursor-pointer ml-5 dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>

              <br />
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 dark:text-white text-black">
                Copyright 2024{" "}
              </p>
            </div>
          </div>
        )}
      </div>
      <>{open && <CustomModal open={open} setOpen={setOpen}></CustomModal>}</>
    </div>
  );
};

export default Header;
