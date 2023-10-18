'use client'
import Square from "./components/Square"

export default function Home() {
  const handleSquare = () => {
    console.log('square')
  }

  return (
    <div className=" overflow-auto ">
      <div className=" flex gap-3">
      {/* <button onClick={handleSquare} className=" border-2 px-3 py-1 rounded-2 bg-slate-300 ">+ Square</button> */}
      </div>
   <Square/>
   
   </div>
  )
}
