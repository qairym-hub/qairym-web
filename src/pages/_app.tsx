
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../services/store/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}