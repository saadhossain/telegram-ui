import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openChatMenu: false,
    theme: 'light'
};

export const menusSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        setOpenChatMenu: (state) => {
            state.openChatMenu = !state.openChatMenu;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { setOpenChatMenu, setTheme } = menusSlice.actions;

export default menusSlice.reducer;