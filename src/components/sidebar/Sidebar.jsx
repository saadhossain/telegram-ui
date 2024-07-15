import { useDispatch } from 'react-redux';
import { useGetChatsQuery } from '../../features/apiSlice';
import { setIsChatSelected } from '../../features/messageSlice';
import DisplayChats from '../DisplayChats';
import ChatLoading from '../spinner/ChatLoading';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  const { isLoading, data: chats } = useGetChatsQuery('get_all_chats');
  const dispatch = useDispatch();
  if (isLoading) {
    return <ChatLoading />;
  }
  return (
    <div className='min-h-screen p-0 md:p-2 pt-0 bg-white dark:bg-darkBg'>
      <SidebarHeader />
      <div
      className='mt-2 mx-2'
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
