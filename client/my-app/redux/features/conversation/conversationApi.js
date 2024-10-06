const { apiSlice } = require("../api/apiSlice");
const {
  getUsers,
  myAllConversation,
  setAllChatData,
} = require("./conversationSlice");

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (data) => ({
        url: `conversation/get-users?search=${data.keyword}`,
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            getUsers({
              users: res.data.allUser,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    accessingNewUser: builder.mutation({
      query: (data) => ({
        url: `conversation/chat/access-chat/${data.id}`,
        method: "POST",
        credentials: "include",
      }),
    }),
    getAllConversation: builder.mutation({
      query: (data) => ({
        url: `conversation/chat`,
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            myAllConversation({
              allConversations: res.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getAllChatData: builder.mutation({
      query: (data) => ({
        url: `conversation/message/${data.chatId}`,
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;          
          dispatch(
            setAllChatData({
              allChatData: res.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    sendMessage: builder.mutation({
      query: ({ content, chatId }) => ({
        url: "conversation/message",
        method: "POST",
        body: { content, chatId },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const {
  useGetUserMutation,
  useAccessingNewUserMutation,
  useGetAllConversationMutation,
  useGetAllChatDataMutation,
  useSendMessageMutation,
} = conversationApi;
