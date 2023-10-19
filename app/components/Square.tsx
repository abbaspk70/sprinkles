"use client";
import React, { Fragment, ReactNode, useState } from "react";
import { TSprinkle } from "./Sprinkle";
import SprinkleModal from "./SprinkleModal";
import LineForm from "./LineForm";

export default function Square() {
  const [showModal, setShowModal] = useState(true);
  const [circles, setCircles] = useState<ReactNode[]>([]);
  const [lines, setLines] = useState<ReactNode[]>([]);

  const handlePost = async ()=> {
    const circleData: TSprinkle[] = [];
    circles.forEach((circle:any)=>{
      circleData.push(circle.props);
    })
    const LineData: TSprinkle[] = [];
    lines.forEach((line:any)=>{
      LineData.push(line.props);
    })
    // Post Data
    const res = await fetch("https://route.softhem.net/api/v1/findroute", {
      method: "POST",
      body: JSON.stringify(
        
        circleData,
      ),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e=>console.log(e));
    
    console.log("Circles:",circleData);
    console.log("Lines:",LineData); 
    console.log("Response", res);   
  }
  return (
    <div className="w-full flex justify-center items-center md:items-start gap-3 relative shrink-0 flex-col md:flex-row">
      <div className="flex flex-col gap-3">
      <div className="relative">
        <SprinkleModal
        showModal={showModal}
        setShowModal={setShowModal}
        circles={circles}
        setCircles={setCircles}
        />
      </div>
      <div className="relative">
        <LineForm
        lines={lines}
        setLines={setLines}
        />
      </div>
      <button onClick={handlePost} className="w-full bg-primary text-tertiary py-2 rounded-md hover:bg-primary/90 hover:text-tertiary/90">Find Route</button>
      </div>
      <div className="w-[1000px] h-[1000px] bg-primary relative z-10 border-4 border-tertiary shrink-0">
      <div className="w-full h-full relative overflow-hidden">
           {circles.map((circle, index) => {
            return <Fragment key={index}>{circle}</Fragment>;
          })}
           {lines.map((line, index) => {
            return <Fragment key={index}>{line}</Fragment>;
          })}
        </div>
      </div>
    </div>

  );
}
