import { Provider } from 'react-redux'
import store from '../services/store/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from "next/app"

import '../../scss/globals.scss'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default App