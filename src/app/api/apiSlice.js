import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000/',
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => 'category',
    }),
    getRooms: builder.query({
      query: ({categoryData,price}) => {
        return `rooms/?category=${categoryData}&price=${price}`; 
      },
    }),
  }),
});

export const { useGetCategoryQuery, useGetRoomsQuery } = apiSlice;
