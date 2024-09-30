const { apiSlice } = require("../api/apiSlice");
const { getUsers } = require("./conversationSlice");

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (data) => ({
        url: `conversation/get-users?search=${data.keyword}`,
        method: "POST",
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
  }),
});
export const { useGetUserMutation } = conversationApi;
