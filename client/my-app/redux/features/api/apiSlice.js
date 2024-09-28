
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userloggedIn, userLoggedOut } from "../auth/authSlice";
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
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;

          if (res.data.success != true) {
            dispatch(userLoggedOut());
          }
        } catch (error) {
          if (error) {
            dispatch(userLoggedOut());
          }
        }
      },
    }),
  }),
});

export const { useRefreshTokenMutation } = apiSlice;
