import React, { ChangeEvent, MouseEvent, ReactNode, useState } from "react";
import Sprinkle from "./Sprinkle";

type TSprinkleModal = { 
  showModal: boolean,
  setShowModal: (arg0:boolean)=>void,
  items: ReactNode[],
  setItems: (arg0:ReactNode[])=>void
}

export default function SprinkleModal({showModal, setShowModal,items, setItems}: TSprinkleModal) {
  const [values, setValues] = useState({
    radius: 0,
    xValue: 0,
    yValue: 0,
  });
  const handleOnChange = (e : ChangeEvent<HTMLInputElement>)=> {
    const name = e.target.name;
    const value = e.target.value;
    const updateVal = {...values, [name]: value};
    setValues(updateVal);
  }
    const handleCancel = ( ) => {
            setShowModal(false);
    };
    const handleOk = ( ) => {
      const updateValue = [...items,<Sprinkle radius={values.radius} xValue={values.xValue} yValue={values.yValue} /> ]
      setItems(updateValue);
      setShowModal(false);
      setValues({radius: 0, xValue: 0, yValue: 0});
    };
    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>)=> {
      e.target.select();
    }
    if (showModal) {
  return (
    
    <div className="w-full h-full flex justify-center items-center absolute z-40">
      <div className="w-[300px] rounded-md overflow-hidden bg-secondary">
        <div className="bg-tertiary text-white px-3 py-2">Title</div>
        <div className="p-4">
          
            <label>Radius
            <input onChange={handleOnChange} onFocus={handleFocus} name="radius" type="number" className="" placeholder="radius" defaultValue={values.radius}/>
            </label>
            
            <div className="flex gap-3 py-5">
              <label>Position X
              <input className="" onChange={handleOnChange} onFocus={handleFocus} name="xValue" type="number"  placeholder="X" defaultValue={values.xValue}/>
              </label>
              <label>Position Y
              <input onChange={handleOnChange}  onFocus={handleFocus} name="yValue" type="number" className="" placeholder="Y" defaultValue={values.yValue} />
              </label>
            </div>
          <div className="flex gap-3 text-secondary">
          <button className="bg-primary px-10 py-2 rounded-md" onClick={handleOk}>Ok</button>
          <button className="bg-primary px-10 py-2 rounded-md" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}
