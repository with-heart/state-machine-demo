import React from 'react'
import styled from 'styled-components'
import FiniteMachine from './FiniteMachine'
import Switch from './Switch'
import Match from './Match'

const chart = {
  id: 'register',
  initial: 'gettingStarted',
  states: {
    gettingStarted: {
      on: {
        NEXT: 'username',
      },
    },
    username: {
      on: {
        NEXT: 'password',
        BACK: 'gettingStarted',
      },
    },
    password: {
      on: {
        NEXT: 'email',
        BACK: 'username',
      },
    },
    email: {
      on: {
        NEXT: 'summary',
        BACK: 'password',
      },
    },
    summary: {},
  },
}

const defaultState = {
  username: null,
  password: null,
  email: null,
}

const reducer = (state = defaultState, action = {}) => {
  const { type, data } = action

  switch (type) {
    case 'username.NEXT':
      return { ...state, username: data }
    case 'password.NEXT':
      return { ...state, password: data }
    case 'email.NEXT':
      return { ...state, email: data }
    default:
      return state
  }
}

const ProgressBar = styled.div`
  background-color: ${p => p.theme.colors.light};
  height: 15px;
  border: ${p => p.theme.border};
  margin-bottom: 1.5rem;
  width: 100%;
  z-index: 1;
`
const ProgressBarForeground = styled.div`
  height: 10px;
  background-color: ${p => p.theme.colors.dark};
  width: ${p => p.width};
  z-index: 1;
  transition: width 0.5s ease-in;
`
const Progress = ({ machineState }) => {
  const steps = 4
  const step = Object.keys(chart.states).indexOf(machineState)
  const width = step / steps * 100 + '%'
  return (
    <ProgressBar>
      <ProgressBarForeground width={width} />
    </ProgressBar>
  )
}

const Button = styled.button.attrs({
  type: p => (p.submit ? 'submit' : 'button'),
})`
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.dark};
  font-size: 1rem;
  font-weight: 900;
  padding: 0.75rem;
  text-transform: uppercase;
  margin: 0 0.5rem;
`

const StepBoxWrapper = styled.div`
  border: ${p => p.theme.border};
  text-align: center;

  h1 {
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
    margin: 0;
    padding: 1rem;
  }

  div {
    margin-bottom: 1rem;
  }

  p {
    margin: 1.25rem;
    font-size: 1.3rem;
  }
`
const StepBox = ({ header, body, input, buttons }) => (
  <StepBoxWrapper>
    <h1>{header}</h1>
    <p>{body}</p>
    {(input || buttons) && (
      <form onSubmit={e => e.preventDefault()}>
        {input}
        <div>{buttons}</div>
      </form>
    )}
  </StepBoxWrapper>
)

const Input = styled.input.attrs({
  autoFocus: true,
})`
  background-color: ${p => p.theme.colors.light};
  border: 0;
  border-bottom: ${p => p.theme.border};
  color: ${p => p.theme.colors.dark};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 0.25rem;
  width: 350px;
  margin-bottom: 2rem;

  &:focus {
    outline: 0;
  }
`

const GettingStarted = ({ onNext }) => (
  <StepBox
    header="getting started"
    body="give us your details and we'll make an account for ya"
    buttons={[<Button onClick={onNext}>get started</Button>]}
  />
)

const Username = ({ onBack, onNext }) => (
  <StepBox
    header="username"
    body="pick a kickin' username"
    input={<Input innerRef={input => (this.input = input)} />}
    buttons={[
      <Button onClick={onBack}>back</Button>,
      <Button submit onClick={() => onNext(this.input.value)}>
        next
      </Button>,
    ]}
  />
)

const Password = ({ onBack, onNext }) => (
  <StepBox
    header="password"
    body="protect yourself! use a password"
    input={<Input type="password" innerRef={input => (this.input = input)} />}
    buttons={[
      <Button onClick={onBack}>back</Button>,
      <Button submit onClick={() => onNext(this.input.value)}>
        next
      </Button>,
    ]}
  />
)

const Email = ({ onBack, onNext }) => (
  <StepBox
    header="email"
    body="how do we reach you via antiquated messaging technology"
    input={<Input innerRef={input => (this.input = input)} />}
    buttons={[
      <Button onClick={onBack}>back</Button>,
      <Button submit onClick={() => onNext(this.input.value)}>
        next
      </Button>,
    ]}
  />
)

const Summary = ({ data }) => (
  <StepBox
    header="summary"
    body={[
      <p>Here's your summary:</p>,
      <p>Username: {data.username}</p>,
      <p>Email: {data.email}</p>,
    ]}
  />
)

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${p => p.theme.colors.primary};
  width: 800px;

  h1 {
    font-weight: 900;
    letter-spacing: 2px;
  }
`

const RegisterMachine = () => (
  <FiniteMachine
    log={true}
    chart={chart}
    reducer={reducer}
    render={machine => (
      <Wrapper>
        <Progress machineState={machine.state} />
        <Switch machine={machine}>
          <Match
            state="gettingStarted"
            render={({ transition }) => (
              <GettingStarted onNext={() => transition('NEXT')} />
            )}
          />
          <Match
            state="username"
            render={({ transition }) => (
              <Username
                onBack={() => transition('BACK')}
                onNext={data => transition('NEXT', data)}
              />
            )}
          />
          <Match
            state="password"
            render={({ transition }) => (
              <Password
                onBack={() => transition('BACK')}
                onNext={data => transition('NEXT', data)}
              />
            )}
          />
          <Match
            state="email"
            render={({ transition }) => (
              <Email
                onBack={() => transition('BACK')}
                onNext={data => transition('NEXT', data)}
              />
            )}
          />
          <Match
            state="summary"
            render={({ data }) => <Summary data={data} />}
          />
        </Switch>
      </Wrapper>
    )}
  />
)

export default RegisterMachine
