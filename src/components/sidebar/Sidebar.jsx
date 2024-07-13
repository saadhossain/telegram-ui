import { useGetChatsQuery } from '../../features/apiSlice';
import DisplayChats from '../DisplayChats';
import ChatLoading from '../spinner/ChatLoading';
import SearchBar from './SearchBar';

const Sidebar = () => {
  const { isLoading, data: chats } = useGetChatsQuery('get_all_chats');
  if (isLoading) {
    return <ChatLoading />
  }
  return (
    <div className='min-h-screen p-2 pt-0'>
      <SearchBar />
      <div>
        {
          chats.map((chat) => <DisplayChats key={chat.id} chat={chat} />)
        }
      </div>
    </div>
  );
};

export default Sidebar;
