import React, { ReactNode, useState, FocusEvent, ChangeEvent, MouseEvent } from 'react'
import { TLine } from './Line';
import Line from './Line';

type TLineForm = {
    lines : ReactNode[],
    setLines: (arg0:ReactNode[])=>void
}
export default function LineForm({lines, setLines}: TLineForm) {
    const [values, setValues] = useState<TLine>({
        x1: 0,
        x2: 1000,
        y1: 0,
        y2: 0,
    });
      const handleOnChange = (e : ChangeEvent<HTMLInputElement>)=> {
        const name = e.target.name;
        const value = e.target.valueAsNumber;
        const updateVal:TLine = {...values, [name]: value};
        setValues(updateVal);
      }
    
        const handleClick = () => {
            const updateValue:  ReactNode[] = [...lines, <Line x1={values.x1} x2={values.x2} y1={values.y1} y2={values.y2}/>];
            setLines(updateValue);
            setValues({...values, y1: 0 , y2: 0});          
        };
        const handleFocus = (e: FocusEvent<HTMLInputElement, Element>)=> {
          e.target.select();
        }

  return (
    <div className="z-40">
    <div className="w-[300px] rounded-md overflow-hidden bg-secondary shadow-lg">
      <div className="bg-tertiary text-white px-3 py-2">Add Line</div>
      <div className="p-4">
          <div className="flex gap-3 py-5">
            <label>Y start point
            <input className="" onChange={handleOnChange} onFocus={handleFocus} name="y1" type="number"  placeholder="Y1" value={values.y1}/>
            </label>
            <label>Y end point
            <input className="" onChange={handleOnChange} onFocus={handleFocus} name="y2" type="number"  placeholder="Y2" value={values.y2}/>
            </label>
          </div>
        <div className="flex gap-3 justify-center text-secondary">
        <button className="bg-primary px-10 py-2 rounded-md" onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  </div>
  )
}
