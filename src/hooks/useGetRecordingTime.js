import { useEffect, useRef, useState } from 'react';

const useGetRecordingTime = () => {
    const [timeLeft, setTimeLeft] = useState(60000);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(intervalRef.current);
                        setIsActive(false);
                        return 0;
                    }
                    return prevTime - 10;
                });
            }, 10);
        } else {
            clearInterval(intervalRef.current);
            setTimeLeft(60000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;

        const formattedMilliseconds = milliseconds.toString().slice(0, -1);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${formattedMilliseconds.padStart(0, '0')}`;
    };

    return {
        timeLeft,
        formatTime,
        isActive,
        setIsActive,
    };
};

export default useGetRecordingTime;
