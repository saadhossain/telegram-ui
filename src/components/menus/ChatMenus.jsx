import { BackHand, Redeem } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import FlagIcon from '@mui/icons-material/Flag';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';

const ChatMenus = ({ id, open, anchorEl, handleClose }) => {
    const { theme } = useSelector((state) => state.menus);
    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ marginTop: '60px' }}
            >
                <Typography sx={{
                    p: 2,
                    backgroundColor: theme === 'light' ? '#fff' : '#212121',
                    color: theme === 'light' ? '#000' : '#fff',
                    width: '220px'
                }}>
                    <div className='flex flex-col gap-1'>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <EditIcon fontSize='small' className='text-iconColor dark:text-white' />
                            Edit
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <VideocamIcon fontSize='small' className='text-iconColor dark:text-white' />
                            Video Call
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <NotificationsOffIcon fontSize='small' className='text-iconColor dark:text-white' />
                            Mute...
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <CheckCircleOutlineIcon fontSize='small' className='text-iconColor dark:text-white' />
                            Select messages
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <FlagIcon fontSize='small' className='text-iconColor dark:text-white' />
                            Report
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <Redeem fontSize='small' className='text-iconColor dark:text-white' />
                            Gitf Premium
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out'>
                            <BackHand fontSize='small' className='text-iconColor dark:text-white' />
                            Block user
                        </button>
                        <hr/>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] dark:hover:bg-[#121212] p-1 rounded duration-200 ease-in-out text-danger'>
                            <DeleteOutlineIcon fontSize='small' />
                            Delete Chat
                        </button>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
};

export default ChatMenus;