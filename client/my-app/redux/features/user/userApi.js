const { apiSlice } = require("../api/apiSlice");

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: ({avatar}) => ({
        url:"/user/upldate-avatar",
        method:"PATCH",
        body:avatar,
        credentials: "include",
      }),
    }),
  }),
});
export const {useUpdateAvatarMutation} = userApi