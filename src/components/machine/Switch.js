import React from 'react'

class Switch extends React.Component {
  renderMatchChild() {
    return React.Children.map(
      this.props.children,
      child =>
        child.props.state === this.props.machine.state &&
        React.cloneElement(child, this.props.machine),
    )
  }

  render() {
    return this.renderMatchChild()
  }
}

export default Switch
