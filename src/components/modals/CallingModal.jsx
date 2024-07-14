import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCallingModalOpen } from '../../features/callingSlice';
import { getRandomColor } from '../../utils/getRamdomBgColor';
import UserProfileImg from '../UserProfileImg';
import CallControls from './CallControls';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    border: 'noe',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

const CallingModal = () => {
    const { isCallingModalOpen } = useSelector((state) => state.calling);
    const dispatch = useDispatch();
    const { activeChatUser } = useSelector((state) => state.chat);
    const bgColor = getRandomColor(activeChatUser?.sender?.name);
    return (
        <div>
            <Modal
                open={isCallingModalOpen}
                onClose={() => dispatch(setIsCallingModalOpen())}
                aria-labelledby="Calling Modal"
                aria-describedby="Modal for Call to the friend."
                style={{ border: 'none' }}
            >
                <Box sx={{ ...style, backgroundColor: bgColor }}>
                    <button
                        onClick={() => dispatch(setIsCallingModalOpen())}
                        className='absolute top-0 right-0 font-semibold text-white text-lg p-6'>X</button>
                    {/* User Info */}
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: '#fff' }}>
                        <div className='flex flex-col gap-5 items-center'>
                            <h4 className='text-3xl font-semibold text-white'>{activeChatUser?.sender?.name ? activeChatUser?.sender?.name : 'Unknown'}</h4>
                            Calling...
                            <div className='border-2 border-gray-200 p-2 rounded-full'>
                                <UserProfileImg userName={activeChatUser?.sender?.name} />
                            </div>
                        </div>
                    </Typography>
                    <CallControls />
                </Box>
            </Modal>
        </div>
    );
};

export default CallingModal;