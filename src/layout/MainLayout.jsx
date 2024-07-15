import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { setTheme } from '../features/menuSlice';

const MainLayout = () => {
    const { theme } = useSelector((state) => state.menus);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
        } else {
            // If no theme preference found, check user's system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                dispatch(setTheme('dark'));
            }
        }
    }, [dispatch]);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme, dispatch]);
    const { isChatSelected } = useSelector((state) => state.message);
    return (
        <div className='flex h-screen'>
            <div className={`w-full md:w-[25vw] bg-white dark:bg-darkBg overflow-y-auto scrollbar-thin ${isChatSelected && 'hidden md:block'}`}>
                <Sidebar />
            </div>
            <div className={`w-full md:flex-1 contentArea overflow-y-auto scrollbar-none ${isChatSelected ? 'block': 'hidden'} md:block`}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;