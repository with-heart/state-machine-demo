import React from 'react'
import { FiniteMachine, Switch, Match } from 'components/machine'
import Progress from 'components/Progress'
import {
  GettingStarted,
  Username,
  Password,
  Email,
  Summary,
  End,
} from './pieces'
import './index.css'

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
    summary: {
      on: {
        NEXT: 'end',
      },
    },
    end: {},
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

const RegisterMachine = () => (
  <FiniteMachine
    log={true}
    chart={chart}
    reducer={reducer}
    render={machine => (
      <div className="Register">
        <Progress chart={chart} machineState={machine.state} />
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
            render={({ data, transition }) => (
              <Summary data={data} onNext={() => transition('NEXT')} />
            )}
          />

          <Match state="end" render={() => <End />} />
        </Switch>
      </div>
    )}
  />
)

export default RegisterMachine
