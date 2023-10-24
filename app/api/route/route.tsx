
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const res = await request.json();
   
    const lines:any = [];
    res.forEach((circle:any)=>{

        const {x, y, radius} = circle;
        const center = {x: x,  y:y};
        
        
        const x1 = 0;
        const x2 = 1000;
        const y1 = 1000;
        
      
        console.log("center is: ",center, "with radius: ",radius);


        if((circle.x + circle.radius) < 1000 && (circle.y + circle.radius) < 1000) {
            lines.push({y1:1000, y2:1000})
        }
        if((circle.y + circle.radius ) >= 1000) {
           
            let y2 = (y-radius);
            let y1 = 1000;

            
            lines.push({y1: y2  , y2: y2})
            console.log("yValue", y2);
            
        
        }

    })
    return NextResponse.json(lines);
}
