import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
registerServiceWorker()
