import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    micIcon: null,
    sendIcon: null,
    isRecordingStarted: false,
    timeLeft : 600000
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
        },
        setTimeLeft : (state, action)=> {
            state.timeLeft = action.payload
        }
    }
})

export const {setMicIcon, setSendIcon, setIsRecordingStarted, setTimeLeft} = messageSlice.actions;

export default messageSlice.reducer