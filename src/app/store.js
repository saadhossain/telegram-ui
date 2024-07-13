import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from '../features/apiSlice';
import chatReducer from '../features/chatSlice'

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})