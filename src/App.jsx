import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/routers'
import { store } from './app/store';
import CallingModal from './components/modals/CallingModal';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}>
      </RouterProvider>
      <CallingModal/>
    </Provider>
  )
}

export default App