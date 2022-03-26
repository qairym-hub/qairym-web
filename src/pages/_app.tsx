import { Provider } from 'react-redux'
import store from '../services/store/store'
import { QueryClient, QueryClientProvider } from 'react-query'

import LoginPage from './login'

import '../../scss/globals.scss'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </QueryClientProvider>
  )
}

export default App