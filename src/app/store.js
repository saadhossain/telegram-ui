import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from '../features/apiSlice';
import chatReducer from '../features/chatSlice';
import messageReducer from '../features/messageSlice';
import callingReducer from '../features/callingSlice'

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    message: messageReducer,
    calling: callingReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})