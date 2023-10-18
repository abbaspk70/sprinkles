"use client";
import React, { Fragment, ReactNode, useState } from "react";
import Sprinkle, { TSprinkle } from "./Sprinkle";
import SprinkleModal from "./SprinkleModal";
import Line from "./Line";
import LineForm from "./LineForm";

export default function Square() {
  const [showModal, setShowModal] = useState(true);
  const [items, setItems] = useState<ReactNode[]>([]);
  const [lines, setLines] = useState<ReactNode[]>([]);
  return (
    <div className="w-full flex justify-center items-center md:items-start gap-3 relative shrink-0 flex-col md:flex-row">
      <div className="flex flex-col gap-3">
      <div className="relative">
        <SprinkleModal
        showModal={showModal}
        setShowModal={setShowModal}
        items={items}
        setItems={setItems}
        />
      </div>
      <div className="relative">
        <LineForm
        lines={lines}
        setLines={setLines}
        />
      </div>
      </div>
      <div className="w-[1000px] h-[1000px] bg-primary relative z-10 border-4 border-tertiary shrink-0">
      <div className="w-full h-full relative overflow-hidden">
           {items.map((item, index) => {
            return <Fragment key={index}>{item}</Fragment>;
          })}
           {lines.map((line, index) => {
            return <Fragment key={index}>{line}</Fragment>;
          })}
        </div>
      </div>
    </div>

  );
}
