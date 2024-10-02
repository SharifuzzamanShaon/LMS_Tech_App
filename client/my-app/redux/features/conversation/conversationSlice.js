const { createSlice } = require("@reduxjs/toolkit");

 const initialState = {
  users: [],
  allConversations: []
};
export const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    myAllConversation: (state,action)=>{
      state.allConversations = action.payload
    }
  },
});
export const { getUsers, myAllConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
