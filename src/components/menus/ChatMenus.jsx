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

const ChatMenus = ({ id, open, anchorEl, handleClose }) => {
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
                <Typography sx={{ p: 2, backgroundColor: '#D9E8DF', width: '220px'}}>
                    <div className='flex flex-col gap-1'>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <EditIcon fontSize='small' className='text-iconColor' />
                            Edit
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <VideocamIcon fontSize='small' className='text-iconColor' />
                            Video Call
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <NotificationsOffIcon fontSize='small' className='text-iconColor' />
                            Mute...
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <CheckCircleOutlineIcon fontSize='small' className='text-iconColor' />
                            Select messages
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <FlagIcon fontSize='small' className='text-iconColor' />
                            Report
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <Redeem fontSize='small' className='text-iconColor' />
                            Gitf Premium
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out'>
                            <BackHand fontSize='small' className='text-iconColor' />
                            Block user
                        </button>
                        <button className='flex gap-3 items-center text-sm  hover:bg-[#CCD9D0] p-1 rounded duration-200 ease-in-out text-danger border-t-2 border-[#CED6C9]'>
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