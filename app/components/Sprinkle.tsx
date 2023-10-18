import React, { useEffect } from 'react'

export type TSprinkle = {
  radius : number;
  xValue: number;
  yValue: number;
}

export default function Sprinkle({radius, xValue, yValue}: TSprinkle) {
  let yPosition:number = 0;
  const circle = radius * 2
  xValue = (xValue-radius);
  if (yValue >= radius) {
    console.log("greater");
    yPosition = 1000 - (yValue+radius);
  }
  if (yValue < radius) {
    console.log("lesser");
    yPosition = 1000 + (yValue-radius);
  }
  
  return (
    <div style={{width: `${circle}px`, height: `${circle}px`, top: `${yPosition}px`, left: `${xValue}px`}}  className={`bg-secondary rounded-full absolute border-4 border-tertiary`}></div>
  )
}
