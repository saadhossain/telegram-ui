import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-[25vw] bg-white overflow-y-auto'>
                <Sidebar />
            </div>
            <div className="flex-1 contentArea overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
