import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const loanApi = createApi({
  reducerPath: "loanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000`,
  }),
  endpoints: (builder) => ({
    getLoans: builder.query({
      query: () => "/loans",
    }),
    getInsuranceApplicants: builder.query({
      query: () => "/insuranceApplicants",
    }),

    getNews: builder.query({
      query: () => "/blogsNews",
    }),
  }),
});

export const {
  useGetLoansQuery,
  useGetNewsQuery,
  useGetInsuranceApplicantsQuery,
} = loanApi;
