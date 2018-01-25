import React from 'react'
import styled from 'styled-components'

const ProgressBar = styled.div`
  background-color: ${p => p.theme.colors.light};
  height: 15px;
  border: ${p => p.theme.border};
  margin-bottom: 1.5rem;
  width: 100%;
  z-index: 1;
`
const ProgressBarForeground = styled.div`
  height: 10px;
  background-color: ${p => p.theme.colors.dark};
  width: ${p => p.width};
  z-index: 1;
  transition: width 0.5s ease-in;
`
const Progress = ({ machineState, chart }) => {
  const steps = 4
  const step = Object.keys(chart.states).indexOf(machineState)
  const width = step / steps * 100 + '%'
  return (
    <ProgressBar>
      <ProgressBarForeground width={width} />
    </ProgressBar>
  )
}

export default Progress
