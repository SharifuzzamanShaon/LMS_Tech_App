import React, { useEffect, useState } from "react";
import "../../globals.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useGetAllConversationMutation } from "../../../redux/features/conversation/conversationApi";
import { useRouter } from "next/navigation";
import { currentChatPartnerId } from "../../../redux/features/conversation/conversationSlice";

const MyConversations = ({ setNavigate }) => {
  const { user } = useSelector((state) => state.auth);
  const refresh = useSelector((state) => state.refreshSideBar);
  const dispatch = useDispatch();
  const router = useRouter();
  const { allConversations } = useSelector(
    (state) => state.conversation.allConversations
  );
  const [getAllConversation, { isSuccess, error }] =
    useGetAllConversationMutation();
  useEffect(() => {
    getAllConversation();
  }, [refresh]);
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white rounded-[20px] p-1.5 flex-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] m-2.5">
      {allConversations &&
        allConversations?.map((conversation, index) => {
          // console.log("current convo : ", conversation);
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          if (conversation.latestMessage === undefined) {
            // console.log("No Latest Message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  // dispatch(refreshSidebarFun());
                }}
              >
                <div
                  key={index}
                  className="conversation-container  dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600"
                  onClick={() => {
                    setNavigate("chat-area");
                    dispatch(
                      currentChatPartnerId(
                        `${conversation._id}&${
                          conversation.users[0]._id === user._id
                            ? conversation.users[1].name
                            : conversation.users[0].name
                        }`
                      )
                    );
                  }}
                >
                  <p className="con-icon dark:text-white">
                    <Image
                      src={
                        conversation.users[0]._id === user._id
                          ? conversation.users[1].avatar
                          : conversation.users[0].avatar
                      }
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </p>
                  <p className="text-black dark:text-white font-bold">
                    {conversation.users[0]._id === user._id
                      ? conversation.users[1].name
                      : conversation.users[0].name}
                  </p>

                  <p className="text-[13px] dark:text-gray-700 text-black">
                    click here to send Message
                  </p>
                  <p className="con-timeStamp dark:text-white">
                    {conversation.timeStamp}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container  dark:bg-slate-800 dark:text-white  dark:hover:bg-slate-600"
                onClick={() => {
                  setNavigate("chat-area");
                  dispatch(
                    currentChatPartnerId(
                      `${conversation._id}&${
                        conversation.users[0]._id === user._id
                          ? conversation.users[1].name
                          : conversation.users[0].name
                      }`
                    )
                  );
                }}
              >
                <p className={"con-icon"}>
                  {
                    <Image
                      src={
                        conversation.users[0]._id === user._id
                          ? conversation.users[1].avatar
                          : conversation.users[0].avatar
                      }
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    // conversation.users[0]._id === user._id
                    //   ? conversation.users[1].name[0]
                    //   : conversation.users[0].name[0]
                  }
                </p>
                <p className="text-black dark:text-white font-bold">
                  {conversation.users[0]._id === user._id
                    ? conversation.users[1].name
                    : conversation.users[0].name}
                </p>

                <p className="text-[13px] dark:text-gray-700 text-black">
                  {conversation && conversation.latestMessage?.content}
                </p>
                <p className={"con-timeStamp"}>{conversation.timeStamp}</p>
              </div>
            );
          }
        })}
    </div>
  );
};

export default MyConversations;
