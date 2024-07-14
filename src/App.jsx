import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/routers'
import { store } from './app/store';
import CallingModal from './components/modals/CallingModal';
import ChatMenus from './components/menus/ChatMenus';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}>
      </RouterProvider>
      <CallingModal/>
      <ChatMenus/>
    </Provider>
  )
}

export default App