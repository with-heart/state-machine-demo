import React from 'react'
import PropTypes from 'prop-types'

class Match extends React.Component {
  static propTypes = {
    machine: PropTypes.shape({
      state: PropTypes.string,
      transition: PropTypes.func,
    }),
    state: PropTypes.string,
    partial: PropTypes.bool,
    conditional: PropTypes.bool,
  }

  static defaultProps = {
    partial: false,
    conditional: true,
  }

  render() {
    const {
      component: Component,
      render,
      partial,
      conditional,
      machine,
      state,
    } = this.props

    const match = partial
      ? machine.state.startsWith(state)
      : machine.state === state

    return conditional ? (
      match ? (
        render ? (
          render(machine)
        ) : (
          <Component {...machine} />
        )
      ) : null
    ) : render ? (
      render(machine)
    ) : (
      <Component {...machine} />
    )
  }
}

export default Match
