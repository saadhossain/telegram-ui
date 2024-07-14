import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from '../features/apiSlice';
import callingReducer from '../features/callingSlice';
import chatReducer from '../features/chatSlice';
import menusReducer from '../features/menuSlice';
import messageReducer from '../features/messageSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    message: messageReducer,
    calling: callingReducer,
    menus: menusReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});