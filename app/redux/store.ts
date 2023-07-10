import {configureStore} from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { newsSlice } from './features/newsSlice'

export const store = configureStore({
  reducer: {
    [newsSlice.reducerPath]: newsSlice.reducer,
    /* [currencySlice.reducerPath]: currencySlice.reducer */
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsSlice.middleware)/* .concat(currencySlice.middleware) */,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;