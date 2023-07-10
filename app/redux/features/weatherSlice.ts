import {PayloadAction} from '@reduxjs/toolkit'
import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'

export const weatherSlice = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (location) =>
        `/weather?q=${location}&lang=ua&units=metric&appid=927d09bc49dbee6aac7f5cb1df707542`,
      /* method: "GET", */
    }),
    getForecast: builder.query({
      query: (location) =>
        `/forecast?q=${location}&units=metric&cnt=8&appid=927d09bc49dbee6aac7f5cb1df707542`,
      /* method: "GET", */
    }),
  }),
})

export const {useGetWeatherQuery, useGetForecastQuery} = weatherSlice;
