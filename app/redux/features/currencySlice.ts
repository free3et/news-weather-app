import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencySlice = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetCurrencyQuery } = currencySlice;