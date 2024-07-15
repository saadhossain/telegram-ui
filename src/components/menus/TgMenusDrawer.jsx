import { Animation, Bookmark, BugReport, DarkMode, ExpandMore, HelpOutline, HistoryToggleOff, LightMode, Person, Settings } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import beyondChat from '../../assets/beyondchat.png';
import { setTheme } from '../../features/menuSlice';

const TgMenusDrawer = ({ isDrawerOpen, toggleDrawer }) => {
    const { theme } = useSelector((state) => state.menus);
    const { myDetails } = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        localStorage.setItem('theme', newTheme);
    };
    const userName = myDetails?.sender?.name ;
    return (
        <div className='md:hidden'>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    width: 300, backgroundColor: theme === 'light' ? '#fff' : '#212121',
                    color: theme === 'light' ? '#000' : '#fff',
                    height: '100%',
                }} role="presentation">
                    <Typography>
                        {/* My Details Section */}
                        <div className='bg-primary dark:bg-darkHover text-white p-2 py-5'>
                            {/* Dark/Light mode and User profile Image */}
                            <div className='flex items-center justify-between'>
                                <img src={beyondChat} alt='Beyond Chat' className='w-14 h-14' />
                                <button onClick={() => toggleTheme()} className={`${theme === 'light' ? 'rotate-clock-wise': 'rotate-anti-clock-wise'}`}>
                                    {
                                        theme === 'light' ? <DarkMode fontSize='medium' className='text-white' /> : <LightMode fontSize='medium' className='text-white' />
                                    }
                                </button>
                            </div>
                            {/* Username and accound adding toggle */}
                            <div className='flex items-center justify-between mt-4'>
                                <h3>{userName ? userName:'Beyondchats' }</h3>
                                <button>
                                    <ExpandMore/>
                                </button>
                            </div>
                        </div>
                        {/* Navigations Menus */}
                        <div className='flex flex-col gap-2 p-2'>
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
};

export default TgMenusDrawer;