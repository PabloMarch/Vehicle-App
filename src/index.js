import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

// Create Store.
import configureStore from './store/configureStore'

// JSS configuration.
const generateClassName = createGenerateClassName()
const jss = create(jssPreset())

// components
import App from 'components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <App/>
    </JssProvider>
  </Provider>,
  document.getElementById('app')
);
