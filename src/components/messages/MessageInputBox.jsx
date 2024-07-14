import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import attachment from '../../assets/icons/attachment.svg';
import { setIsRecordingStarted } from '../../features/messageSlice';

const MessageInputBox = () => {
    const { isRecordingStarted } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    return (
        <div className='w-full sticky bottom-8 z-50 flex items-center gap-5'>
            <div className='w-11/12 bg-white rounded-2xl flex items-center px-3 justify-between'>
                <div className='w-full flex gap-2 items-center'>
                    <SentimentSatisfiedAltIcon className='text-iconColor' />
                    <form className='w-full'>
                        <input type="text" name="message" id="message" className='w-full text-lg bg-transparent py-3 mx-auto focus:outline-none' placeholder='Message' />
                    </form>
                </div>
                <img src={attachment} alt='Files' className='cursor-pointer' />

            </div>
            <div className={`${!isRecordingStarted && 'hidden'}`}>
                <div className='bg-white p-4 rounded-full hover:bg-danger duration-200 cursor-pointer text-danger hover:text-white'>
                    <DeleteOutlineIcon />
                </div>
            </div>
            {/* Voice Recording Button  */}
            <div className='w-1/12'>
                <div
                    className='flex items-center justify-center bg-white p-4 rounded-full hover:bg-primary text-primary hover:text-white duration-200 cursor-pointer'
                    onClick={() => dispatch(setIsRecordingStarted())}
                >
                    {
                        isRecordingStarted ? <SendIcon fontSize="medium"/> : <MicIcon fontSize="medium"/>
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageInputBox;