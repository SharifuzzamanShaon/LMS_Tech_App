"use client";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import "../../globals.css";
import {
  useAccessingNewUserMutation,
  useGetUserMutation,
} from "../../../redux/features/conversation/conversationApi";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import toast from "react-hot-toast";
import { refreshSidebarFun } from "../../../redux/features/conversation/refreshSidebarSlice";
const GetUser = () => {
  const [getUser, { isSuccess: userSuccess, error: userErr }] =
    useGetUserMutation();
  const [
    accessingNewUser,
    { isSuccess: accessUserSuccess, error: accessUserErr, data },
  ] = useAccessingNewUserMutation();
  const { users } = useSelector((state) => state.conversation.users);
  const [keyword, setKeyword] = useState("");
  const [accessedUserName, setAccedUserName] = useState("");
  const dispatch = useDispatch()
  const handleKeywordChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getUser({ keyword });
    }, 2000);
    return () => clearTimeout(timerOut);
  }, [keyword]);
  const accessToNewUser = async (id, name) => {
    setAccedUserName(name);
    try {
      await accessingNewUser({ id });
      dispatch(refreshSidebarFun())
    } catch (error) {
      toast.error("something went wrong")
    }
  };
  useEffect(() => {
    if (accessUserSuccess) {
      toast.success(`Now you are connected with ${accessedUserName}`)
    }
    if (accessUserErr) {
      toast.error("Something went wrong")
    }
  }, [accessUserSuccess, accessUserErr]);
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
            onChange={handleKeywordChange}
            className="outline-0 border-none ml-2 text-lg text-gray-600 w-full bg-gray-100  dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></input>
        </div>
      </div>
      <div className="w-[50%] justify-center">
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
          {users?.map((user) => {
            return (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.0 }}
                className="list-item dark:bg-slate-800 text-black"
                onClick={() => accessToNewUser(user._id, user.name)}
              >
                <p className="con-icon">
                  <Image
                    src={user.avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </p>
                <p className="con-title dark:text-white text-black pl-4 font-bold">{user.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default GetUser;
