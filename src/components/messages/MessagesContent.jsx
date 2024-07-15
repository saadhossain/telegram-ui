import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { setActiveChatUser, setMyDetails } from '../../features/chatSlice';
import { setIsChatSelected } from '../../features/messageSlice';
import { useIsMobile } from '../../hooks/useIsMobile';
import { getLastMessageDate } from '../../utils/getLastMessageDate';
import ChatHead from './ChatHead';
import DisplayMessages from './DisplayMessages';
import MessageInputBox from './MessageInputBox';

const MessagesContent = () => {
  const { data: messages } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (messages) {
      const activeChatUser = messages.filter(message => message.sender.name !== 'BeyondChat');
      if (activeChatUser.length > 0) {
        dispatch(setActiveChatUser(activeChatUser[0]));
      }
      const accountInfo = messages.filter(message => message.sender.name === 'BeyondChat');
      if (accountInfo.length > 0) {
        dispatch(setMyDetails(accountInfo[0]));
      }
    }
  }, [messages, dispatch]);
  const sendOn = getLastMessageDate(messages[0].created_at);

  const isMobile = useIsMobile();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      dispatch(setIsChatSelected(false));
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div {...(isMobile ? handlers : {})}>
      <ChatHead />
      {/* Display Messages */}
      <div className='w-full md:w-8/12 mx-auto mt-4 md:mt-8'>
        {/* Display the Message Sending Date */}
        <div className='w-28 mx-auto bg-[#81a778b6] dark:bg-darkHover bg-opacity-20 text-center font-semibold text-white rounded-2xl p-1 mb-2 sticky top-20  md:top-24 z-50'>{sendOn}</div>
        <div className='min-h-screen mb-8'>
          {
            messages.map((message) => <DisplayMessages key={message.id} message={message} />)
          }
        </div>
        <MessageInputBox />
      </div>
    </div>
  );
};

export default MessagesContent;