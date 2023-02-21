import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loansApi = createApi({
  reducerPath: "loansApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getLoans: builder.query({
      query: () => "/loans",
    }),
  }),
});

export const { useGetLoansQuery } = loansApi;
