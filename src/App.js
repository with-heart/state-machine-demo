import React, { Component } from 'react'
import Register from 'components/Register'
import './App.css'
const logo = require('./logo-small.png')

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <Register />
        <a href="https://github.com/lionize" className="App-credits">
          by lionize.
        </a>
      </div>
    )
  }
}

export default App
