import React from 'react'

const StepBox = ({ header, body, input, buttons }) => (
  <div>
    <h1>{header}</h1>
    <div>{body}</div>
    {(input || buttons) && (
      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          return
        }}
      >
        {input}
        <div>{buttons}</div>
      </form>
    )}
  </div>
)

const GettingStarted = ({ onNext }) => (
  <StepBox
    header="getting started"
    body={<p>give us your details and we'll make an account for ya</p>}
    buttons={[
      <button type="submit" onClick={onNext}>
        get started
      </button>,
    ]}
  />
)

const Username = ({ onBack, onNext }) => (
  <StepBox
    header="username"
    body={<p>pick your identifier</p>}
    input={<input autoFocus ref={input => (this.input = input)} />}
    buttons={[
      <button type="button" onClick={onBack}>
        back
      </button>,
      <button type="submit" onClick={() => onNext(this.input.value)}>
        next
      </button>,
    ]}
  />
)

const Password = ({ onBack, onNext }) => (
  <StepBox
    header="password"
    body={<p>protect yourself! use a password</p>}
    input={
      <input autoFocus type="password" ref={input => (this.input = input)} />
    }
    buttons={[
      <button type="button" onClick={onBack}>
        back
      </button>,
      <button type="submit" onClick={() => onNext(this.input.value)}>
        next
      </button>,
    ]}
  />
)

const Email = ({ onBack, onNext }) => (
  <StepBox
    header="email"
    body={<p>how do we reach you via antiquated messaging technology?</p>}
    input={<input autoFocus ref={input => (this.input = input)} />}
    buttons={[
      <button type="button" onClick={onBack}>
        back
      </button>,
      <button type="submit" onClick={() => onNext(this.input.value)}>
        next
      </button>,
    ]}
  />
)

const Summary = ({ data }) => (
  <StepBox
    header="summary"
    body={
      <div>
        Here's your summary:
        <ul>
          <li>Username: {data.username}</li>
          <li>Email: {data.email}</li>
        </ul>
        <a href="https://github.com/lionize/state-machine-demo">
          see the source
        </a>
      </div>
    }
  />
)

export { GettingStarted, Username, Password, Email, Summary }
