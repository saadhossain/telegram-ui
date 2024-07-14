import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCallingModalOpen: false,
    micOn: true,
    videoOn: true,
    screenShareOn: false
};

export const callingSlice = createSlice({
    name: 'calling',
    initialState,
    reducers: {
        setIsCallingModalOpen: (state) => {
            state.isCallingModalOpen = !state.isCallingModalOpen;
        },
        setMicOn: (state) => {
            state.micOn = !state.micOn;
        },
        setVideoOn: (state) => {
            state.videoOn = !state.videoOn;
        },
        setScreenShareOn: (state) => {
            state.screenShareOn = !state.screenShareOn;
        }
    }
});

export const { setIsCallingModalOpen, setMicOn, setScreenShareOn, setVideoOn } = callingSlice.actions;

export default callingSlice.reducer;