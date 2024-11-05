"use client";
import React, { useEffect, useState } from "react";
import MessageSelf from "./MessageSelf";
import MessageFromOutside from "./MessageFromOutside";
import { useDispatch, useSelector } from "react-redux";
import { refreshSidebarFun } from "../../../../redux/features/conversation/refreshSidebarSlice";
import { IoSendSharp } from "react-icons/io5";
import { IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { io } from "socket.io-client";
import { config } from "@/utils/config";
import axios from "axios";
import toast from "react-hot-toast";
import "../../../globals.css";
import Image from "next/image";
const serverUri = process.env.NEXT_PUBLIC_SERVER_URI;
let socket;
const ChatArea = () => {
  const [msgText, setMsgText] = useState("");
  const [msgBoxRefresh, setMsgBoxRefesh] = useState(false);
  const [displayMsg, setDisplayMsg] = useState([]);
  const dispatch = useDispatch();
  const { currentChatPartnerId } = useSelector((state) => state.conversation);
  const { user } = useSelector((state) => state.auth);
  const { allConversations } = useSelector(
    (state) => state.conversation.allConversations
  );
  const [chatId, name] = currentChatPartnerId.split("&");
  const endpoint = "http://localhost:5000";
  useEffect(() => {
    socket = io(endpoint);
    socket.emit("setup", user);
    socket.on("connection", () => setSocketConnected(true));
  }, []);
  useEffect(() => {
    fetchMessages();
  }, [msgBoxRefresh,chatId]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `${serverUri}conversation/message/${chatId}`,
        config
      );
      setDisplayMsg(res.data);
      socket.emit("join chat", chatId);
    } catch (error) {
      toast.error("Error Occured, Try again");
    }
  };
  const handleSendMessage = async () => {
    const { data } = await axios.post(
      `${serverUri}conversation/message`,
      { content: msgText, chatId },
      config
    );
    setMsgText("");
    setMsgBoxRefesh(!msgBoxRefresh);
    dispatch(refreshSidebarFun());
    socket.emit("new message", data);
  };

  useEffect(() => {
    socket.on("message received", (newMsgReceived) => {
      setDisplayMsg([...displayMsg, newMsgReceived]);
    });
  });
  return (
    <div className="chatArea-container">
      <div className="chatArea-header  dark:bg-slate-800 dark:text-white">
        <p className="con-icon">
          <Image
            src={
              allConversations[0].users[0]._id === user._id
                ? allConversations[0].users[1].avatar
                : allConversations[0].users[0].avatar
            }
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
        </p>
        <div className={"header-text"}>
          <p className={"con-title"}> {name}</p>
          <p className={"con-timeStamp"}> Time stamp</p>
        </div>
        <IconButton>
          <MdDelete />
        </IconButton>
      </div>
      <div className="messages-container">
        {displayMsg &&
          displayMsg
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
