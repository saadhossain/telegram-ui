import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from '../features/apiSlice';
import chatReducer from '../features/chatSlice';
import messageReducer from '../features/messageSlice'

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    message: messageReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})