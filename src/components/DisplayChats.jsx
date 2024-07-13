import { Link } from 'react-router-dom';
import { getLastMessageDate } from '../utils/getLastMessageDate';
import UserProfileImg from './UserProfileImg';

const DisplayChats = ({ chat }) => {
    // console.log(userAvater)
    return (
        <Link to={`${chat.id}`} className='flex items-center gap-2 p-2 rounded-md hover:bg-[#F4F4F5] text-white'>
            <UserProfileImg userName={chat.creator.name} />
            <div className='w-full flex items-start justify-between'>
                <h4 className='text-base font-semibold text-black'>{chat.creator.name? chat.creator.name: 'Unknown'}</h4>
                <p className='text-[#6C7076] text-sm'>{getLastMessageDate(chat.updated_at)}</p>
            </div>
        </Link>
    );
};

export default DisplayChats;