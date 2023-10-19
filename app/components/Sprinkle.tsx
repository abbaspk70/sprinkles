import React, { useEffect } from 'react'

export type TSprinkle = {
  radius : number;
  x: number;
  y: number;
}

export default function Sprinkle({radius, x, y}: TSprinkle) {
  let yPosition:number = 0;
  const circle = radius * 2
  x = (x-radius);
  if (y >= radius) {
    
    yPosition = 1000 - (y+radius);
  }
  if (y < radius) {
    
    yPosition = 1000 + (y-radius);
  }
  
  return (
    <div style={{width: `${circle}px`, height: `${circle}px`, top: `${yPosition}px`, left: `${x}px`}}  className={`bg-secondary rounded-full absolute border-4 border-tertiary`}></div>
  )
}
