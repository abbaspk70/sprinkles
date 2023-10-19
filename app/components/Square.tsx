"use client";
import React, { Fragment, ReactNode, useState } from "react";
import Sprinkle, { TSprinkle } from "./Sprinkle";
import SprinkleModal from "./SprinkleModal";
import Line from "./Line";
import LineForm from "./LineForm";

export default function Square() {
  const [showModal, setShowModal] = useState(true);
  const [circles, setCircles] = useState<ReactNode[]>([]);
  const [lines, setLines] = useState<ReactNode[]>([]);
  const handlePost = ()=> {
    console.log("Circles:", circles);
    console.log("Lines:", lines);
    
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
