"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import conversationSlice from "./features/conversation/conversationSlice";
import refreshSidebarSlice from "./features/conversation/refreshSidebarSlice";
import createCourseSlice from "./features/admin/createCourseSlice";
const persistConfig = {
  key: "auth",
  storage,
  // whitelist: ["token", "user"], // Only persist accessToken and user
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedAuthReducer,
    conversation: conversationSlice,
    refreshSideBar: refreshSidebarSlice,
    createCourseData: createCourseSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NEXT_PUBLIC_DEV_PHASE,
});

export const persistor = persistStore(store);

//call refreshToken fun in every page load
const initilizeApp = async () => {
  await store.dispatch(
    apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
  );
};

initilizeApp();
/*
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  // devTools: false,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

//call refreshToken fun in every page load
const initilizeApp = async () => {
  await store.dispatch(
    apiSlice.endpoints.refreshToken.initiate({}, {forceRefetch: true})
  );
};

initilizeApp();
  */
