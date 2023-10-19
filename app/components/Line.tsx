import React from 'react'

export type TLine = {
  x1: number,
  x2: number,
  y1: number,
  y2: number
}
export default function Line({x1,x2,y1, y2}: TLine) {
    y1 = 996 - y1;
    y2 = 996 - y2;
    const distance: number = Math.sqrt( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)) );
    const xMid = (x1+x2)/2;
    const yMid = (y1+y2)/2;
    const salopeInRadian = Math.atan2( y1-y2, x1-x2 );
    const salopeInDegrees = (salopeInRadian * 180) /Math.PI;
  return (
    <div style={{width: distance, top: yMid, left: xMid - (distance/2), transform: `rotate(${salopeInDegrees}deg)`}}  className={` bg-red-700 h-[2px] absolute top-1 z-40 w-[1000px]`}>

    </div>
  )
}
