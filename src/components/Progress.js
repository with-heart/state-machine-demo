import React from 'react'
import './Progress.css'

const Progress = ({ machineState, chart }) => {
  const steps = 4
  const step = Object.keys(chart.states).indexOf(machineState)
  const width = step / steps * 100
  const display = width > 0 && width < 100
  return (
    <div className={`Progress-bg${display ? '' : ' hide'}`}>
      <div className="Progress-fg" style={{ width: width + '%' }} />
    </div>
  )
}

export default Progress
