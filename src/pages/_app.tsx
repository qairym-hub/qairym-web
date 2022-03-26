
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import * as Icon from 'react-bootstrap-icons'

import store from '../services/store/store'
import DefaultButton from '../components/buttons/DefaultButton'

import '../../scss/globals.scss'

const App = () => {
  return (
    <Provider store={store}>
      <DefaultButton
        text="Call to action"
        icon={
          <Icon.ArrowRightCircleFill size="20" />
        }
      />
    </Provider>
  )
}

export default App