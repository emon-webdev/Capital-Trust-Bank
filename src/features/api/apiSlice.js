import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const loanApi = createApi({
  reducerPath: "loanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://capital-trust-bank-server-ten.vercel.app`,
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
    getTeams: builder.query({
      query: () => "/team",
    }),
    getVerificationReq: builder.query({
      query: () => "/bankAccounts",
    }),
  }),
});

export const {
  useGetLoansQuery,
  useGetNewsQuery,
  useGetInsuranceApplicantsQuery,
  useGetTeamsQuery,
  useGetVerificationReqQuery,
} = loanApi;
