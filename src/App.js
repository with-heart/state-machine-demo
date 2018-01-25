import React, { Component } from 'react'
import Register from 'components/Register'
import './App.css'
const logo = require('./logo-small.png')

class App extends Component {
  render() {
    return (
      <div className="App">
        <a
          className="App-logo"
          href="https://github.com/lionize/state-machine-demo"
        >
          <img src={logo} />
        </a>
        <Register />
        <a href="https://chanchan.io/" className="App-credits">
          by ChanChan.
        </a>
      </div>
    )
  }
}

export default App
