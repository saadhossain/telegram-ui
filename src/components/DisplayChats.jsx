import { Link, useLocation } from 'react-router-dom';
import { getLastMessageDate } from '../utils/getLastMessageDate';
import UserProfileImg from './UserProfileImg';

const DisplayChats = ({ chat }) => {
    const {pathname} = useLocation();
    return (
        <Link to={`${chat.id}`} className={`flex items-center gap-2 p-2 rounded-md hover:bg-ltHover dark:hover:bg-darkHover text-black dark:text-white ${pathname.includes(chat.id) && 'bg-primary hover:bg-primary dark:bg-darkPrimary dark:hover:bg-darkPrimary text-white'}`}>
            <UserProfileImg userName={chat.creator.name} />
            <div className='w-full flex items-start justify-between'>
                <h4 className='text-base font-semibold'>{chat.creator.name? chat.creator.name: 'Unknown'}</h4>
                <p className={`text-[#6C7076] dark:text-white ${pathname.includes(chat.id) && 'text-white'} text-sm`}>{getLastMessageDate(chat.updated_at)}</p>
            </div>
        </Link>
    );
};

export default DisplayChats;