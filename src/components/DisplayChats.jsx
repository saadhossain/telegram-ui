import { getLastMessageDate } from '../utils/getLastMessageDate';
import { getRandomColor } from '../utils/getRamdomBgColor';
import { getUserAvater } from '../utils/getUserAvater';

const DisplayChats = ({ chat }) => {
    // console.log(chat);
    const userAvater = getUserAvater(chat.creator.name);
    // console.log(userAvater)
    return (
        <div className='flex items-center gap-2 p-2 rounded-md hover:bg-[#F4F4F5] text-white'>
            <div
                style={{ backgroundColor: getRandomColor() }}
                className='min-w-12 min-h-12 rounded-full flex items-center justify-center'
            >
                <h3 className='text-2xl font-bold'>{userAvater ? userAvater : 'U'}</h3>
            </div>
            <div className='w-full flex items-start justify-between'>
                <h4 className='text-base font-semibold text-black'>{chat.creator.name}</h4>
                <p className='text-[#6C7076] text-sm'>{getLastMessageDate(chat.updated_at)}</p>
            </div>
        </div>
    );
};

export default DisplayChats;