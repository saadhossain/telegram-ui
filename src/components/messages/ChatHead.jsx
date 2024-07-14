import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCallingModalOpen } from '../../features/callingSlice';
import { getLastSeenTime } from '../../utils/getLastSeenTime';
import ChatMenus from '../menus/ChatMenus';
import UserProfileImg from '../UserProfileImg';

const ChatHead = () => {
    const { activeChatUser } = useSelector((state) => state.chat);
    const lastSeenAt = getLastSeenTime(activeChatUser.updated_at);
    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'chat-menu-popover' : undefined;
    return (
        <div className='bg-white dark:bg-darkBg text-black dark:text-white py-2 px-5 flex items-center justify-between sticky top-0 z-50'>
            {/* User Details Section */}
            <div>
                <div className='flex items-center gap-2'>
                    <UserProfileImg userName={activeChatUser?.sender?.name} />
                    <div>
                        <h4 className='text-lg font-semibold'>{activeChatUser?.sender?.name ? activeChatUser?.sender?.name : 'Unknown'}</h4>
                        <p>last seen {lastSeenAt ? lastSeenAt : 'Long Time ago'}</p>
                    </div>
                </div>
            </div>
            {/* Action Area */}
            <div className='flex items-center gap-2'>
                {/* Search Icon */}
                <div
                    className='hover:bg-ltHover dark:hover:bg-darkHover p-2 rounded-full cursor-pointer text-iconColor dark:text-gray-400'
                >
                    <SearchIcon />
                </div>
                {/* Calling Icon */}
                <div
                    className='hover:bg-ltHover dark:hover:bg-darkHover p-2 rounded-full cursor-pointer text-iconColor dark:text-gray-400'
                    onClick={() => dispatch(setIsCallingModalOpen())}
                >
                    <CallIcon />
                </div>
                {/* Menu Icon */}
                <button
                    className='hover:bg-ltHover dark:hover:bg-darkHover p-2 rounded-full cursor-pointer text-iconColor dark:text-gray-400'
                    aria-describedby={id} variant="contained" onClick={handleClick}
                >
                    <MoreVertIcon />
                </button>
                <ChatMenus
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
            </div>
        </div>
    );
};

export default ChatHead;