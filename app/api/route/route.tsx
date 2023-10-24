
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
        if((circle.y + circle.radius ) >= 1000 && ((circle.x + circle.radius ) >= 1000)) {
           
            let y2 = (y-radius);
            let y1 = 1000;

            // line equation
            let yValue = (y2-y1)/(x2-x1) * x + y;
            lines.push({y1: yValue  , y2: yValue})
            console.log("yValue", yValue);
            //circle equation 
            let pX = x - radius;
            let pY = y;
            if (pX <= x + radius) {
                pY = y - Math.sqrt(Math.pow(radius, 2) - Math.pow(pX, 2));
            }
            
            console.log("power", Math.pow(5, 3));

            // for (let i = 0; i < 1000; i++) {
                
            //     if( i === 320) { 
            //         y2 = i
            //     lines.push({y1: 1000  , y2:y2})
            // }
            // }
            

        }

    })
    return NextResponse.json(lines);
}
