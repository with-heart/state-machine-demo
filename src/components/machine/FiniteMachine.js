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

  transition = (action, data) => {
    if (this.state.log) {
      const { id } = this.state
      console.log(id, action, data)
    }

    this.setState(state => ({
      machineState: state.machine.transition(state.machineState, action).value,
      data: state.reducer(state.data, {
        type: `${state.machineState}.${action}`,
        data,
      }),
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
