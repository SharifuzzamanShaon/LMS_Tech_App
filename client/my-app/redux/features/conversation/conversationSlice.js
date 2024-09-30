const { createSlice } = require("@reduxjs/toolkit");

export const initialState = {
  users: [],
};
const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.allUser;
    },
  },
});
export const { getUsers } = conversationSlice.actions;

export default initialState.reducer;
