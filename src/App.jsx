import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/routers'
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}>
      </RouterProvider>
    </Provider>
  )
}

export default App