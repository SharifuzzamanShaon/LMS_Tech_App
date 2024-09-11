"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action) => {
      state.token = action.payload.token;
    },
    userloggedIn: (state, action) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state, action) => {
      state.token = "";
      state.user = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userRegistration, userloggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
