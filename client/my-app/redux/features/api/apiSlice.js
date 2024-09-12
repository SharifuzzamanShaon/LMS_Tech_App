"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  }),
  endpoints: (builder) => ({
    refreshToken: builder.mutation({
      query: (data) => ({
        url: "auth/refresh",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const { useRefreshTokenMutation } = apiSlice;
