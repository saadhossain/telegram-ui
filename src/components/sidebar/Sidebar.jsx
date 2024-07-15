import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { useGetChatsQuery } from '../../features/apiSlice';
import { setIsChatSelected } from '../../features/messageSlice';
import { useIsMobile } from '../../hooks/useIsMobile';
import DisplayChats from '../DisplayChats';
import ChatLoading from '../spinner/ChatLoading';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  const { isLoading, data: chats } = useGetChatsQuery('get_all_chats');
  const dispatch = useDispatch();
  //Functionality for Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //Swipe to open sidebar functionality
  const handlers = useSwipeable({
    onSwipedRight: () => {
      setIsDrawerOpen(true);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  const isMobile = useIsMobile();

  if (isLoading) {
    return <ChatLoading />;
  }
  return (
    <div {...(isMobile ? handlers : {})} className='min-h-screen p-0 md:p-2 pt-0 bg-white dark:bg-darkBg'>
      <SidebarHeader
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
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
