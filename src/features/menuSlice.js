import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openChatMenu: false,
    darkMode: false
};

export const menusSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        setOpenChatMenu: (state) => {
            state.openChatMenu = !state.openChatMenu;
        },
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { setOpenChatMenu, setDarkMode } = menusSlice.actions;

export default menusSlice.reducer;