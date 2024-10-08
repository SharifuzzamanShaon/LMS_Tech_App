"use client";
import GetUser from "@/components/StudentLounge/GetUser";
import Groups from "@/components/StudentLounge/Groups";
import MainLoungeNavigator from "@/components/StudentLounge/MainLoungeNavigator";
import MyConversations from "@/components/StudentLounge/MyConversations";
import Welcome from "@/components/StudentLounge/Welcome";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
const ChatLayout = ({ children }) => {
  const [navigate, setNavigate] = useState(0);
  return (
    <>
      <div
        className={`w-[22%] 800px:w-[310px] h-[800px] dark:bg-slate-900 bg-white dark:text-white shadow-sm !important dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] shadow-sm mt-[30px] mb-[30px] sticky
        ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        <MainLoungeNavigator setNavigate={setNavigate} />
        <div className=" rounded-[20px] p-[5px_10px] m-[10px] flex items-center shadow-[rgba(50, 50, 93, 0.25)_0px_6px_12px_-2px,rgba(0, 0, 0, 0.3)_0px_3px_7px_-3px]">
          <IconButton>
            <BiSearch className="cursor-pointer dark:text-white text-black" />
          </IconButton>
          <input
            placeholder="search"
            className="outline-0 border-none ml-2 text-lg text-gray-600 w-full bg-gray-100  dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></input>
        </div>
        <MyConversations />
      </div>
      <div
        className={`ml-8 w-[75%] 800px:w-[310px] h-[800px] dark:bg-slate-900 bg-white dark:text-white shadow-sm !important dark:shadow-sm bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] shadow-sm mt-[30px] mb-[30px] sticky
            ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        <h2></h2>
        {children}
      </div>
    </>
  );
};

export default ChatLayout;
