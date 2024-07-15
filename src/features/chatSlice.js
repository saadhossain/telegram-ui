import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    activeChatUser: {},
    myDetails: {}
}

export const chatSlice = createSlice({
    name:'chat',
    initialState,
    reducers: {
        setActiveChatUser: (state, action)=> {
            state.activeChatUser = action.payload
        },
        setMyDetails: (state, action)=> {
            state.myDetails = action.payload
        }
    }
})

export const {setActiveChatUser, setMyDetails} = chatSlice.actions;

export default chatSlice.reducer