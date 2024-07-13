import React from 'react';
import { getRandomColor } from '../utils/getRamdomBgColor';
import { getProfileImg } from '../utils/getProfileImg';

const UserProfileImg = ({ userName }) => {
    const profileImg = getProfileImg(userName);
    return (
        <div
            style={{ backgroundColor: getRandomColor(userName) }}
            className='min-w-12 min-h-12 max-w-12 max-h-12 rounded-full flex items-center justify-center'
        >
            <h3 className='text-2xl font-bold text-white'>{profileImg ? profileImg : 'U'}</h3>
        </div>
    );
};

export default UserProfileImg;