import React, { ChangeEvent,FocusEvent, ReactNode, useState } from "react";
import Sprinkle from "./Sprinkle";
import { TSprinkle } from "./Sprinkle";

type TSprinkleModal = { 
  showModal: boolean,
  setShowModal: (arg0:boolean)=>void,
  items: ReactNode[],
  setItems: (arg0:ReactNode[])=>void
}

export default function SprinkleModal({showModal, setShowModal,items, setItems}: TSprinkleModal) {
  const [values, setValues] = useState<TSprinkle>({
    radius: 0,
    xValue: 0,
    yValue: 0,
  });
  const handleOnChange = (e : ChangeEvent<HTMLInputElement>)=> {
    const name = e.target.name;
    const value = e.target.valueAsNumber;
    const updateVal:TSprinkle = {...values, [name]: value};
    setValues(updateVal);
  }

    const handleOk = ( ) => {
      const updateValue = [...items,<Sprinkle radius={values.radius} xValue={values.xValue} yValue={values.yValue} /> ]
      setItems(updateValue);
      setValues({radius: 0, xValue: 0, yValue: 0});
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>)=> {
      e.target.select();
    }
    if (showModal) {
  return (
    <div className="z-40">
      <div className="w-[300px] rounded-md overflow-hidden bg-secondary shadow-lg">
        <div className="bg-tertiary text-white px-3 py-2">Add Circle</div>
        <div className="p-4">
            <label>Radius
            <input onChange={handleOnChange} onFocus={handleFocus} name="radius" type="number" placeholder="radius" value={values.radius}/>
            </label>
            <div className="flex gap-3 py-5">
              <label>Position X
              <input className="" onChange={handleOnChange} onFocus={handleFocus} name="xValue" type="number"  placeholder="X" value={values.xValue}/>
              </label>
              <label>Position Y
              <input className="" onChange={handleOnChange} onFocus={handleFocus} name="yValue" type="number"  placeholder="Y" value={values.yValue}/>
              </label>
            </div>
          <div className="flex gap-3 justify-center text-secondary">
          <button className="bg-primary px-10 py-2 rounded-md" onClick={handleOk}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
