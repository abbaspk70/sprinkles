import React from 'react'
export type TSprinkle = {
  radius : number;
  xValue: number;
  yValue: number;
}

export default function Sprinkle({radius, xValue, yValue}:TSprinkle) {
  const circle = radius * 2
  xValue = xValue-radius;
  yValue = yValue-radius;
  return (
    <div style={{width: `${circle}px`, height: `${circle}px`, top: `${yValue}px`, left: `${xValue}px`}}  className={`bg-secondary rounded-full absolute border-4 border-tertiary`}></div>
  )
}
