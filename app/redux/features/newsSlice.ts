import {PayloadAction} from '@reduxjs/toolkit'
import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'

/* type AuthState = {
  isAuth: boolean,
    userName: string,
    userId: string,
    isModerator: boolean
}

type InitialState = {
  value: AuthState
}

const initialState = {
  value: {
    isAuth: false,
    userName: '',
    userId: '',
    isModerator: false
  } as AuthState
} as InitialState */

/* export const newsSlice = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (news) =>
        `top-headlines?country=${news.country}&category=${news.category}&apiKey=6517c7f12e7140328cc1277ec3ed050a`,

    }),
    getSearchPosts: builder.query({
      query: (search) => `everything?q=${search}&apiKey=6517c7f12e7140328cc1277ec3ed050a`,

    }),
    getTopPosts: builder.query({
      query: (country) =>
        `top-headlines?country=${country}&pageSize=2&apiKey=6517c7f12e7140328cc1277ec3ed050a`,

    }),
  }),
}) */

export const newsSlice = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.nytimes.com/svc" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (news) =>
        `/search/v2/articlesearch.json?fq=section_name:(${news.category})&api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
      /* method: "GET", */
    }),
    getSearchPosts: builder.query({
      query: (search) => `/search/v2/articlesearch.json?q=${search}&api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
      /* method: "GET", */
    }),
    getTopPosts: builder.query({
      query: (country) =>
        `/mostpopular/v2/viewed/1.json?api-key=DVV1k6cbuMOY1vyGzMOPjSoq19doU2uT`,
      /* method: "GET", */
    }),
  }),
})

export const {useGetAllPostsQuery, useGetSearchPostsQuery, useGetTopPostsQuery} = newsSlice


//export const {logIn, logOut} = authSlice.actions;

//export default authSlice.reducer

/*  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, action: PayloadAction<string>) => {
        return {
          value: {
            isAuth: true,
            userName: action.payload,
            userId: 'nbmnbnmmbnbn5677hg',
            isModerator: false
          }
        }
    }
  } */