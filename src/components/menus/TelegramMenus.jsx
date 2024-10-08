import { Animation, Bookmark, BugReport, DarkMode, HelpOutline, HistoryToggleOff, Person, Settings } from '@mui/icons-material';
import { Switch } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../features/menuSlice';

const TelegramMenus = ({ id, open, anchorEl, handleClose }) => {
    const { theme } = useSelector((state) => state.menus);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        localStorage.setItem('theme', newTheme);
    };
    // const toggleTgMenu = () => {
    //     setTimeout(() => {
    //         handleClose();
    //     }, 300);
    // };
    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ marginTop: '45px'}}
            >
                <Typography sx={{
                    p: 2,
                    backgroundColor: theme === 'light' ? '#fff' : '#212121',
                    color: theme === 'light' ? '#000' : '#fff',
                    minWidth: '17rem',
                    maxHeight: 'calc(100* var(--vh) - 3.75rem)',
                    overflowY: 'auto',
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
            </Popover>
        </div>
    );
};

export default TelegramMenus;