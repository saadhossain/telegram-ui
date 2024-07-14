import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    micIcon: null,
    sendIcon: null,
    isRecordingStarted: false,
};

export const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers: {
        setMicIcon: (state, action)=> {
            state.micIcon = action.payload
        },
        setSendIcon: (state, action)=> {
            state.sendIcon = action.payload
        },
        setIsRecordingStarted : (state)=> {
            state.isRecordingStarted = !state.isRecordingStarted
        }
    }
})

export const {setMicIcon, setSendIcon, setIsRecordingStarted} = messageSlice.actions;

export default messageSlice.reducer