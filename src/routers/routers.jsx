import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorElement from '../pages/ErrorElement';
import MiddleContent from '../pages/MiddleContent';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/',
                element: <MiddleContent/>
            }
        ]
    }
])