import React from 'react'

const ref = () => input => (this.input = input)
const enter = onNext => e => {
  if (e.key === 'Enter') {
    onNext(this.input.value)
  }
}

export const GettingStarted = ({ onNext }) => (
  <div>
    <h1>getting started</h1>
    <p>give us your details and we'll make an account for ya</p>
    <div>
      <button onClick={onNext}>get started</button>
    </div>
  </div>
)

export const Username = ({ onBack, onNext }) => (
  <div>
    <h1>username</h1>
    <p>pick your identifier</p>
    <input autoFocus ref={ref()} onKeyPress={enter(onNext)} />
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={() => onNext(this.input.value)}>
        Next
      </button>
    </div>
  </div>
)

export const Password = ({ onBack, onNext }) => (
  <div>
    <h1>password</h1>
    <p>protect yourself! use a password</p>
    <input autoFocus ref={ref()} onKeyPress={enter(onNext)} />
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={() => onNext(this.input.value)}>
        Next
      </button>
    </div>
  </div>
)

export const Email = ({ onBack, onNext }) => (
  <div>
    <h1>email</h1>
    <p>
      how can we reach you via antiquated asynchronous messaging technology?
    </p>
    <input autoFocus ref={ref()} onKeyPress={enter(onNext)} />
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={() => onNext(this.input.value)}>
        Next
      </button>
    </div>
  </div>
)

export const Summary = ({ data, onNext }) => (
  <div>
    <h1>summary</h1>
    <p>here's your summary:</p>
    <ul style={{ textAlign: 'left', width: '500px', marginLeft: 'auto' }}>
      <li>username: {data.username}</li>
      <li>email: {data.email}</li>
    </ul>
    <p>does this look correct?</p>
    <button type="button" onClick={onNext}>
      Yeap
    </button>
  </div>
)

export const End = () => (
  <div>
    <h1>fin.</h1>
    <p>
      you can find the source for this demo{' '}
      <a href="https://github.com/lionize/state-machine-demo">here</a>
    </p>
  </div>
)
