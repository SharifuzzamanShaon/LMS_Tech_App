const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  allConversations: [],
  currentChatPartnerId: "",
  allChatData: [],
};
export const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    myAllConversation: (state, action) => {
      state.allConversations = action.payload;
    },
    currentChatPartnerId: (state, action) => {
      state.currentChatPartnerId = action.payload;
    },
    setAllChatData: (state, action) => {
      state.allChatData =  action.payload;
    },
  },
});
export const {
  getUsers,
  myAllConversation,
  currentChatPartnerId,
  setAllChatData,
  addNewReceivedMsg,
} = conversationSlice.actions;

export default conversationSlice.reducer;
