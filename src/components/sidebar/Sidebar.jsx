import { useGetChatsQuery } from '../../features/apiSlice';
import DisplayChats from '../DisplayChats';

const Sidebar = () => {
  const { isLoading, data:chats } = useGetChatsQuery('get_all_chats?page=1');
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // console.log(data);
  return (
    <div className='sticky top-0 min-h-screen p-6'>
      <div>
        {
          chats.map((chat) => <DisplayChats key={chat.id} chat={chat} />)
        }
      </div>
    </div>
  );
};

export default Sidebar;