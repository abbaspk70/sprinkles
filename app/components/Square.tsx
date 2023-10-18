"use client";
import React, { Fragment, ReactNode, useState } from "react";
import Sprinkle, { TSprinkle } from "./Sprinkle";
import SprinkleModal from "./SprinkleModal";

export default function Square() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState<ReactNode[]>([]);
  
  return (
    <div className="w-[1000px] h-[1000px] mx-auto bg-primary relative z-10 overflow-hidden border-4 border-tertiary">
      <button
        onClick={() => setShowModal(true)}
        className="border-2 px-3 py-1 rounded-2 bg-red-400 z-50 absolute"
      >
        + Circles
      </button>
      {items.map((item,index)=> {
        return (
            <Fragment key={index}>
                {item}
            </Fragment>
        )
      })}
      {/* <Sprinkle /> */}
      <SprinkleModal showModal={showModal} setShowModal={setShowModal} items={items} setItems={setItems} />

    </div>
  );
}
