import React from 'react'

class Switch extends React.Component {
  transition = (type, data) => {
    const nextType = `${this.props.machine.state}.${type}`
    this.props.machine.transition({
      type: nextType,
      data,
    })
  }

  renderMatchChild() {
    return React.Children.map(
      this.props.children,
      child =>
        child.props.state === this.props.machine.state &&
        React.cloneElement(child, {
          transition: this.transition,
        }),
    )
  }

  render() {
    return this.renderMatchChild()
  }
}

export default Switch
