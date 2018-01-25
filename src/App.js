import React, { Component } from 'react'
import Register from './components/Register'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.border};
  color: ${p => p.theme.colors.dark};
`

const Credits = styled.a`
  font-size: 2rem;
  font-weight: 900;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Register />
        <Credits href="https://chanchan.io/">by ChanChan.</Credits>
      </Wrapper>
    )
  }
}

export default App
