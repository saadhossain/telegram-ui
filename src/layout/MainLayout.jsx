import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-[25vw] bg-white overflow-y-auto scrollbar-thin'>
                <Sidebar />
            </div>
            <div className="flex-1 contentArea overflow-y-auto scrollbar-none">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
