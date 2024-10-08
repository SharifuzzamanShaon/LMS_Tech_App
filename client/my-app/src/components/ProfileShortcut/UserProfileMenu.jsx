"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserProfileMenu = ({ imgSrc }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [disableProfileOp, setDisableProfileOp] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    toast.success("You are logged out");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (nav) => {
    handleClose();
    router.push(`/${nav}`);
  };
  // const router = useRouter();
  // useEffect(() => {
  //   // Check if the current pathname is '/profile'
  //   if (router.pathname === "/profile") {
  //     setDisableProfileOp(true);
  //   }
  //   if (router.pathname != "/profile") {
  //     setDisableProfileOp(false);
  //   }
  // }, [router.pathname]); // Depend on pathname, so it runs whenever the path changes

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Image
          src={imgSrc}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </Button>
      <div className="dark:bg-slate-900 bg-white">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          disableScrollLock={true}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            className=" text-black dark:text-white dark:bg-slate-900 hover:bg-white  dark:hover:bg-slate-800"
            onClick={() => handleMenuItemClick("profile")}
          >
            <p>Profile</p>
          </MenuItem>
          <MenuItem
            className=" text-black dark:text-white dark:bg-slate-900 hover:bg-white  dark:hover:bg-slate-800"
            onClick={() => handleMenuItemClick("student-lounge")}
          >
            <p>Chat's</p>
          </MenuItem>
          <MenuItem
            className=" text-black dark:text-white dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800"
            onClick={() => handleMenuItemClick("my-account")}
          >
            My account
          </MenuItem>
          <MenuItem
            className=" text-black dark:text-white dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800"
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default UserProfileMenu;
