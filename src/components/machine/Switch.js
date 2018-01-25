import React from 'react'
import PropTypes from 'prop-types'

class Switch extends React.Component {
  static propTypes = {
    machine: PropTypes.shape({
      state: PropTypes.string.isRequired,
      transition: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { children, machine } = this.props

    let match = null

    React.Children.forEach(children, child => {
      if (match) return
      if (child.props.state === machine.state) {
        match = child
      }
    })

    return React.cloneElement(match, { machine })
  }
}

export default Switch
