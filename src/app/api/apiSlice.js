import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // main url 
    baseUrl: 'https://job-task-backend-programmingherorubel.vercel.app/',
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => 'category',
    }),
    getRooms: builder.query({
      query: ({categoryData,price,inputValue,badroom,beds}) => {
        return `rooms/?category=${categoryData}&price=${price}&inputValue=${inputValue}&badroom=${badroom}&beds=${beds}`; 
      },
    }),
  }),
});

export const { useGetCategoryQuery, useGetRoomsQuery } = apiSlice;
