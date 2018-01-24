import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Welcome = styled.h1``

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Welcome>Welcome to Boilerplate or Whatever</Welcome>
      </Wrapper>
    )
  }
}

export default App
