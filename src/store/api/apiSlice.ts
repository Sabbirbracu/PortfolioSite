import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API slice with RTK Query
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "/api",
    prepareHeaders: (headers) => {
      // You can add auth tokens or other headers here
      // const token = localStorage.getItem('token');
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  tagTypes: ["Portfolio", "Projects", "Contact"],
  endpoints: (builder) => ({
    // Example endpoints - customize based on your needs
    getPortfolioData: builder.query({
      query: () => "/portfolio",
      providesTags: ["Portfolio"],
    }),
    getProjects: builder.query({
      query: () => "/projects",
      providesTags: ["Projects"],
    }),
    submitContact: builder.mutation({
      query: (contactData) => ({
        url: "/contact",
        method: "POST",
        body: contactData,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetPortfolioDataQuery,
  useGetProjectsQuery,
  useSubmitContactMutation,
} = apiSlice;
