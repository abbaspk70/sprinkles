"use client";
import React, { Fragment, ReactNode, useState } from "react";
import Sprinkle, { TSprinkle } from "./Sprinkle";
import SprinkleModal from "./SprinkleModal";

export default function Square() {
  const [showModal, setShowModal] = useState(true);
  const [items, setItems] = useState<ReactNode[]>([]);

  return (
    <div className="w-full flex justify-center items-center md:items-start gap-3 relative shrink-0 flex-col md:flex-row">
      <div className="relative">
        <SprinkleModal
        showModal={showModal}
        setShowModal={setShowModal}
        items={items}
        setItems={setItems}
        />
      </div>
      <div className="w-[1000px] h-[1000px] bg-primary relative z-10 border-4 border-tertiary shrink-0">
      <div className="w-full h-full relative overflow-hidden">
           {items.map((item, index) => {
            return <Fragment key={index}>{item}</Fragment>;
          })}
        </div>
      </div>
    </div>
    // <div className="w-full h-full">
    //   <div className=" bg-slate-400"></div>
    //   <div className="w-full h-full relative bg-slate-500">
    //     <SprinkleModal
    //       showModal={showModal}
    //       setShowModal={setShowModal}
    //       items={items}
    //       setItems={setItems}
    //     />
    //   </div>
    //   <div className="w-[1000px] h-[1000px] ms-auto bg-primary relative z-10 border-4 border-tertiary mr-20">
    //     <button
    //       onClick={() => setShowModal(true)}
    //       className="border-2 px-3 py-1 rounded-2 bg-red-400 z-50 absolute">
    //       + Circles
    //     </button>
    //     <div className="w-full h-full relative overflow-hidden">
    //       {items.map((item, index) => {
    //         return <Fragment key={index}>{item}</Fragment>;
    //       })}
    //     </div>
    //     {/* <Sprinkle /> */}
    //   </div>
    // </div>
  );
}
