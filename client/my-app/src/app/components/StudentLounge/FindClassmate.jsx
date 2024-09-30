"use client";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import "../../globals.css";
const FindClassmate = () => {
  const [users, setUsers] = useState([{ a: "" }, { b: "" }]);
  return (
    <div className="m-4">
      <div className="flex flex-1 justify-between shadow-md p-2">
        <div className="ug-header dark:bg-slate-900">
          <p className="text-slate-800 dark:text-white">online users</p>
        </div>
        <div className=" rounded-[20px] p-[5px_10px] m-[10px] flex items-center shadow-[rgba(50, 50, 93, 0.25)_0px_6px_12px_-2px,rgba(0, 0, 0, 0.3)_0px_3px_7px_-3px]">
          <IconButton>
            <BiSearch className="cursor-pointer dark:text-white text-black" />
          </IconButton>
          <input
            placeholder="search"
            className="outline-0 border-none ml-2 text-lg text-gray-600 w-full bg-gray-100  dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></input>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.5",
        }}
        className="ug-list"
      >
        {users.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.0 }}
              className="list-item dark:bg-slate-800 "
            >
              <p className="con-icon"></p>
              <p className="con-title dark:text-white">Ad. Robart</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FindClassmate;
