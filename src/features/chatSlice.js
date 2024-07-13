import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    activeChatUser: {}
}

export const chatSlice = createSlice({
    name:'chat',
    initialState,
    reducers: {
        setActiveChatUser: (state, action)=> {
            state.activeChatUser = action.payload
        }
    }
})

export const {setActiveChatUser} = chatSlice.actions;

export default chatSlice.reducer