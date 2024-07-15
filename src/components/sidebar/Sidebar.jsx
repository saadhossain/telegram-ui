import { useDispatch, useSelector } from 'react-redux';
import { useGetChatsQuery } from '../../features/apiSlice';
import { setIsChatSelected } from '../../features/messageSlice';
import DisplayChats from '../DisplayChats';
import ChatLoading from '../spinner/ChatLoading';
import SearchBar from './SearchBar';

const Sidebar = () => {
  const { isLoading, data: chats } = useGetChatsQuery('get_all_chats');
  const { isChatSelected } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  if (isLoading) {
    return <ChatLoading />;
  }
  return (
    <div className='min-h-screen p-2 pt-0 bg-white dark:bg-darkBg'>
      <SearchBar />
      <div
        onClick={() => dispatch(setIsChatSelected(true))}
      >
        {
          chats.map((chat) => <DisplayChats key={chat.id} chat={chat} />)
        }
      </div>
    </div>
  );
};

export default Sidebar;
