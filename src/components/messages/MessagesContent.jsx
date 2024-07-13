import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { setActiveChatUser } from '../../features/chatSlice';
import ChatHead from './ChatHead';

const MessagesContent = () => {
  const { data: chats } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (chats) {
      const filteredChats = chats.filter(chat => chat.sender.name !== 'BeyondChat');
      if (filteredChats.length > 0) {
        dispatch(setActiveChatUser(filteredChats[0]));
      }
    }
  }, [chats, dispatch]);
  return (
    <div>
      <ChatHead/>
    </div>
  );
};

export default MessagesContent;