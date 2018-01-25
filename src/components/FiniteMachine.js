import React from 'react'
import { Machine } from 'xstate'

class FiniteMachine extends React.Component {
  constructor(props) {
    super(props)

    const machine = Machine(props.chart)

    this.state = {
      log: props.log,
      machine,
      machineState: props.chart.initial,
      id: props.chart.id,
      reducer: props.reducer,
      data: props.reducer(undefined, {}),
    }
  }

  transition = action => {
    if (this.state.log) {
      const { id } = this.state
      const { type, data } = action
      console.log(id, type, data)
    }

    const machineAction = action.type.slice(action.type.lastIndexOf('.') + 1)
    this.setState(state => ({
      machineState: state.machine.transition(state.machineState, machineAction)
        .value,
      data: state.reducer(state.data, action),
    }))
  }

  render() {
    const { render } = this.props
    const { machineState: state, data } = this.state
    return render({
      state,
      data,
      transition: this.transition,
    })
  }
}

export default FiniteMachine
