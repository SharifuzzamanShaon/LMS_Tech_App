import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroupAdd, MdExitToApp } from "react-icons/md";
import { IconButton } from "@mui/material";

const MainLoungeNavigator = ({ setNavigate }) => {
  return (
    <>
      <div className="flex flex-1 justify-evenly shadow-md p-2">
        <IconButton
          onClick={() => {
            setNavigate(1);
          }}
        >
          <VscAccount className="cursor-pointer dark:text-white text-black"></VscAccount>
        </IconButton>
        <IconButton
          onClick={() => {
            setNavigate(2);
          }}
        >
          <IoMdPersonAdd className="cursor-pointer dark:text-white text-black" />
        </IconButton>
        <IconButton
          onClick={() => {
            setNavigate(3);
          }}
        >
          <MdGroupAdd className="cursor-pointer dark:text-white text-black" />
        </IconButton>
        <IconButton>
          <MdExitToApp className="cursor-pointer dark:text-white text-black" />
        </IconButton>
        <IconButton
          onClick={() => {
            setNavigate(4);
          }}
        >
          {/* <AddCircleIcon className="cursor-pointer dark:text-white text-black" /> */}
        </IconButton>
      </div>
    </>
  );
};

export default MainLoungeNavigator;
