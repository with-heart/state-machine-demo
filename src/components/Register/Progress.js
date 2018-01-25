import React from 'react'

const Progress = ({ machineState, chart }) => {
  const steps = 4
  const step = Object.keys(chart.states).indexOf(machineState)
  const width = step / steps * 100 + '%'
  return (
    <div>
      step {step} of {steps}
    </div>
  )
}

export default Progress
