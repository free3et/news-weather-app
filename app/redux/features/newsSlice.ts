import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const newsSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nytimes.com/svc' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (category) =>
        `/search/v2/articlesearch.json?fq=section_name:(${category})&api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
    }),
    getSearchPosts: builder.query({
      query: (search) =>
        `/search/v2/articlesearch.json?q=${search}&api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
    }),
    getTopPosts: builder.query({
      query: () =>
        `/mostpopular/v2/viewed/1.json?api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSearchPostsQuery,
  useGetTopPostsQuery,
} = newsSlice;
