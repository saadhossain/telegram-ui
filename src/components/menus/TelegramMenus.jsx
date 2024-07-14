import { Animation, BackHand, Bookmark, BugReport, DarkMode, HelpOutline, HistoryToggleOff, Person, Redeem, Settings } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Switch } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../features/menuSlice';

const TelegramMenus = ({ id, open, anchorEl, handleClose }) => {
    const { darkMode } = useSelector((state) => state.menus);
    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    const dispatch = useDispatch();
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
                sx={{ marginTop: '45px' }}
            >
                <Typography sx={{ p: 2, backgroundColor: '#fff', width: '250px' }}>
                    <div className='flex flex-col gap-2'>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <Bookmark fontSize='small' className='text-iconColor' />
                            Saved Messages
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <Person fontSize='small' className='text-iconColor' />
                            Contact
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <HistoryToggleOff fontSize='small' className='text-iconColor' />
                            My Stories
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <Settings fontSize='small' className='text-iconColor' />
                            Settings
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <DarkMode fontSize='small' className='text-iconColor' />
                            <div className='flex items-center justify-between w-full'>
                                Night Mode
                                <Switch
                                    checked={darkMode}
                                    onChange={() => dispatch(setDarkMode())}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    size="small"
                                    color='#ff0000'
                                />
                            </div>
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <Animation fontSize='small' className='text-iconColor' />
                            Animations
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <HelpOutline fontSize='small' className='text-iconColor' />
                            Telegram Features
                        </button>
                        <button className='flex gap-3 items-center text-sm   hover:bg-[#EEEEEE] p-2 rounded duration-200 ease-in-out'>
                            <BugReport fontSize='small' className='text-iconColor' />
                            Report a Bug
                        </button>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
};

export default TelegramMenus;