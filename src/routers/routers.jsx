import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorElement from '../pages/ErrorElement';
import MiddleContent from '../pages/MiddleContent';
import MessagesContent from '../components/messages/MessagesContent';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: '/',
                element: <MiddleContent/>
            },
            {
                path: ':id',
                loader: ({ params }) => fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${params.id}`),
                element: <MessagesContent />
            },
        ]
    }
])