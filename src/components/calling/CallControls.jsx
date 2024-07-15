import CallEndIcon from '@mui/icons-material/CallEnd';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCallingModalOpen, setMicOn, setScreenShareOn, setVideoOn } from '../../features/callingSlice';

const CallControls = () => {
    const { micOn, videoOn, screenShareOn } = useSelector((state) => state.calling);
    const dispatch = useDispatch();
    return (
        <div className='w-11/12 md:w-8/12 mx-auto flex gap-4 items-center justify-center md:justify-between absolute md:relative md:mt-36 md:-mb-20 bottom-20 left-4 text-ltHover'>
            {/* Mic */}
            <div className='flex flex-col items-center'>
                <button
                    className='flex items-center justify-center w-10 h-10 bg-ltHover bg-opacity-30 p-4 rounded-full'
                    onClick={() => dispatch(setMicOn())}
                >
                    {
                        micOn ? <MicIcon /> : <MicOffIcon />
                    }
                </button>
                {
                    micOn ? <p>Mute</p> : <p>Unmute</p>
                }
            </div>
            {/* Video */}
            <div className='flex flex-col items-center'>
                <button
                    className='flex items-center justify-center w-10 h-10 bg-ltHover bg-opacity-30 p-4 rounded-full'
                    onClick={() => dispatch(setVideoOn())}
                >
                    {
                        videoOn ? <VideocamIcon /> : <VideocamOffIcon />
                    }
                </button>
                {videoOn ? <p>Turn off</p> : <p>Turn on</p>}
            </div>
            {/* Screen Share */}
            <div className='flex flex-col items-center'>
                <button
                    className='flex items-center justify-center w-10 h-10 bg-ltHover bg-opacity-30 p-4 rounded-full'
                    onClick={() => dispatch(setScreenShareOn())}
                >
                    {
                        screenShareOn ? <ScreenShareIcon /> : <StopScreenShareIcon />
                    }
                </button>
                {
                    screenShareOn ? <p>Stop sharing</p> : <p>Screencast</p>
                }
            </div>
            {/* Screen Share */}
            <div className='flex flex-col items-center'>
                <button
                    className='flex items-center justify-center w-10 h-10 bg-danger hover:bg-[#fd2925] p-4 rounded-full text-white'
                    onClick={() => dispatch(setIsCallingModalOpen())}
                >
                    <CallEndIcon />
                </button>
                <p>End call</p>
            </div>
        </div>
    );
};

export default CallControls;