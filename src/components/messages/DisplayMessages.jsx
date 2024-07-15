import React from 'react';
import { getMessageTime } from '../../utils/getMessageTime';
import OrganizedMsg from './OrganizedMsg';

const DisplayMessages = ({ message }) => {
    const messageTime = getMessageTime(message.created_at);
    return (
        <div>
            <section className="chat__body">
                <div>
                </div>
                <div className="messages">
                    <div className={`message droplet ${message.sender.name === 'BeyondChat' && 'my-message'}`}>
                        <div className="message__text overflow-hidden">
                            <div className={`message__text__content ${message.message.length < 50 && 'flex items-center'} pb-2`}>
                                <div>
                                    <OrganizedMsg msg={message.message}/>
                                </div>
                                <div className={`message__time min-w-20 ${message.message.length < 50 && '-mb-3'}`}>{messageTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="left-droplet">
                        <path d="M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z" />
                    </clipPath>
                    <clipPath id="right-droplet">
                        <path d="M 6,0 A 10,10 0 0 0 16,10 H 0 V 0 Z" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default DisplayMessages;
