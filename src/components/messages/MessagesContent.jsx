import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { setActiveChatUser } from '../../features/chatSlice';
import ChatHead from './ChatHead';
import DisplayMessages from './DisplayMessages';
import MessageInputBox from './MessageInputBox';
import { getLastMessageDate } from '../../utils/getLastMessageDate';

const MessagesContent = () => {
  const { data: messages } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (messages) {
      const filteredMessages = messages.filter(message => message.sender.name !== 'BeyondChat');
      if (filteredMessages.length > 0) {
        dispatch(setActiveChatUser(filteredMessages[0]));
      }
    }
  }, [messages, dispatch]);
  const sendOn = getLastMessageDate(messages[0].created_at);
  return (
    <div>
      <ChatHead />
      {/* Display Messages */}
      <div className='w-8/12 mx-auto my-8'>
      {/* Display the Message Sending Date */}
      <div className='w-28 mx-auto bg-[#81a778b6] text-center font-semibold text-white rounded-2xl p-1 mb-2'>{sendOn}</div>
        <div className=''>
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