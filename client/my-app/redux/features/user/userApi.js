const { apiSlice } = require("../api/apiSlice");

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url:"/user/",
      }),
    }),
  }),
});
