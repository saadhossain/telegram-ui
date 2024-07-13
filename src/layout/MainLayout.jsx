import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className='flex text-gray-200'>
            <div className='w-[25vw] bg-white'>
                <Sidebar />
            </div>
            <div className="flex-1 p-6 min-h-screen contentArea">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout