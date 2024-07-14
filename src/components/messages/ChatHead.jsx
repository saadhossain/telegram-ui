import React from 'react';
import { useSelector } from 'react-redux';
import { getLastSeenTime } from '../../utils/getLastSeenTime';
import UserProfileImg from '../UserProfileImg';
import searchIcon from '../../assets/icons/search.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import menuIcon from '../../assets/icons/dots.svg'

const ChatHead = () => {
    const { activeChatUser } = useSelector((state) => state.chat);
    const lastSeenAt = getLastSeenTime(activeChatUser.updated_at);
    return (
        <div className='bg-white py-2 px-5 flex items-center justify-between sticky top-0 z-50'>
            {/* User Details Section */}
            <div>
                <div className='flex items-center gap-2'>
                    <UserProfileImg userName={activeChatUser?.sender?.name} />
                    <div>
                        <h4 className='text-lg font-semibold text-black'>{activeChatUser?.sender?.name ? activeChatUser?.sender?.name : 'Unknown'}</h4>
                        <p>last seen {lastSeenAt ? lastSeenAt : 'Long Time ago'}</p>
                    </div>
                </div>
            </div>
            {/* Action Area */}
            <div className='flex items-center gap-2'>
                <img src={searchIcon} alt='Search' className='hover:bg-ltHover p-2 rounded-full cursor-pointer'/>
                <img src={phoneIcon} alt='Phone' className='hover:bg-ltHover p-2 rounded-full cursor-pointer'/>
                <img src={menuIcon} alt='Menu' className='hover:bg-ltHover p-2 rounded-full cursor-pointer'/>
            </div>
        </div>
    );
};

export default ChatHead;