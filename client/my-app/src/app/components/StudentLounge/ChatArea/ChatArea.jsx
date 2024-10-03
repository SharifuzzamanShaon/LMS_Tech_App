"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllChatDataMutation,
  useSendMessageMutation,
} from "../../../../../redux/features/conversation/conversationApi";
import { refreshSidebarFun } from "../../../../../redux/features/conversation/refreshSidebarSlice";
import MessageFromOutside from "./MessageFromOutside";
import MessageSelf from "./MessageSelf";
import { IoSendSharp } from "react-icons/io5";
import { IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import "../../../globals.css";

const ChatArea = () => {
  const [msgText, setMsgText] = useState("");
  const [msgBoxRefresh, setMsgBoxRefesh] = useState(false);
  const dispatch = useDispatch();
  const { currentChatPartnerId } = useSelector((state) => state.conversation);
  const { user } = useSelector((state) => state.auth);
  const { allChatData } = useSelector(
    (state) => state.conversation.allChatData
  );
  const [chatId, name] = currentChatPartnerId.split("&");
  const [getAllChatData, { isSuccess, isError, data }] =
    useGetAllChatDataMutation();
  const [
    sendMessage,
    { isSuccess: sendSuccess, isError: msgSendErr, data: msgData },
  ] = useSendMessageMutation();
  useEffect(() => {
    getAllChatData({ chatId });
  }, [msgBoxRefresh]);
  const handleSendMessage = async () => {
    await sendMessage({ content: msgText, chatId });
    setMsgText("");
    setMsgBoxRefesh(!msgBoxRefresh);
    dispatch(refreshSidebarFun());
  };
  console.log(msgData);
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">user</p>
        <div className={"header-text"}>
          <p className={"con-title"}> {name}</p>
          <p className={"con-timeStamp"}> Time stamp</p>
        </div>
        <IconButton>
          <MdDelete />
        </IconButton>
      </div>
      <div className="messages-container">
        {allChatData &&
          allChatData
            .slice()
            .reverse()
            .map((message, index) => {
              /// Slice() is  used to create a shallow copy of the messageData array [avoid original array mutation]
              const sender = message.sender;
              const userId = user._id;
              if (sender._id === userId) {
                return <MessageSelf props={message} key={index} />;
              } else {
                return <MessageFromOutside props={message} key={index} />;
              }
            })}
      </div>
      <div className="text-input-area  dark:bg-slate-900">
        <input
          placeholder="Type message"
          className=" text-gray-600 w-full bg-gray-100  dark:bg-slate-900 dark:text-white rounded-md shadow-md p-2 focus:ring-2 "
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && msgText && handleSendMessage()}
        ></input>
        <IconButton className={"icon"} onClick={() => handleSendMessage()}>
          {msgText ? <IoSendSharp /> : ""}
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
