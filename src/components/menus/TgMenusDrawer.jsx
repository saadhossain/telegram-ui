import { Animation, Bookmark, BugReport, DarkMode, HelpOutline, HistoryToggleOff, Person, Settings } from '@mui/icons-material';
import { Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/menuSlice';

const TgMenusDrawer =({ isDrawerOpen, toggleDrawer })=> {
    const { theme } = useSelector((state) => state.menus);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        localStorage.setItem('theme', newTheme);
    };
    return (
        <div className='md:hidden'>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    width: 300, backgroundColor: theme === 'light' ? '#fff' : '#212121',
                    color: theme === 'light' ? '#000' : '#fff',
                    height: '100%',
                }} role="presentation" onClick={toggleDrawer(false)}>
                    <Typography sx={{
                        p: 2,
                    }}>
                        <div className='flex flex-col gap-2'>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <Bookmark fontSize='small' className='text-iconColor dark:text-white' />
                                Saved Messages
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <Person fontSize='small' className='text-iconColor dark:text-white' />
                                Contact
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <HistoryToggleOff fontSize='small' className='text-iconColor dark:text-white' />
                                My Stories
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <Settings fontSize='small' className='text-iconColor dark:text-white' />
                                Settings
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <DarkMode fontSize='small' className='text-iconColor dark:text-white' />
                                <div className='flex items-center justify-between w-full'>
                                    Night Mode
                                    <Switch
                                        checked={theme === 'dark'}
                                        onChange={() => toggleTheme()}
                                        // onClick={toggleTgMenu}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        size="small"
                                        color='#ff0000'
                                    />
                                </div>
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <Animation fontSize='small' className='text-iconColor dark:text-white' />
                                Animations
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <HelpOutline fontSize='small' className='text-iconColor dark:text-white' />
                                Telegram Features
                            </button>
                            <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] dark:hover:bg-[#141414] p-2 rounded duration-200 ease-in-out'>
                                <BugReport fontSize='small' className='text-iconColor dark:text-white' />
                                Report a Bug
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Drawer>
        </div>
    );
}

export default TgMenusDrawer;