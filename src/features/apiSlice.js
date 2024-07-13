import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://devapi.beyondchats.com/api/' }),
  endpoints: (builder) => ({
    getChats: builder.query({
      query: (endpoint) => `${endpoint}`,
      transformResponse: (res) => res.data.data
    }),
    getChatMessages: builder.query({
      query: (endpoint) => `${endpoint}`,
      transformResponse: (res) => res.data
    }),
  }),
})
export const { useGetChatsQuery, useGetChatMessagesQuery } = dataApi