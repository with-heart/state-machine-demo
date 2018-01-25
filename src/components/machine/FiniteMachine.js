import React from 'react'
import { Machine } from 'xstate'
import PropTypes from 'prop-types'

class FiniteMachine extends React.Component {
  static propTypes = {
    log: PropTypes.bool,
    chart: PropTypes.object.isRequired,
    reducer: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
  }

  machine = Machine(this.props.chart)

  state = {
    data: this.props.reducer(undefined, { type: '@init' }),
    machineState: this.machine.config.initial,
  }

  transition = (type, newData) => {
    const { log, chart, reducer } = this.props
    const { data, machineState } = this.state

    const nextState = this.machine.transition(machineState, type).value

    const action = {
      data: newData,
      nextState,
      type: `${machineState}.${type}`,
    }

    if (log) {
      console.log(chart.id, action.type, action.data)
    }

    this.setState(
      state => ({
        data: reducer(data, action),
        machineState: nextState,
      }),
      log
        ? () => {
            console.log(chart.id, this.state.machineState, this.state.data)
          }
        : undefined,
    )
  }

  render() {
    return this.props.render({
      state: this.state.machineState,
      data: this.state.data,
      transition: this.transition,
    })
  }
}

export default FiniteMachine
