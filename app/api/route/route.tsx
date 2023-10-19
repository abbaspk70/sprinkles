
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const res = await request.json();
    console.log(res.circleData);
    console.log(res.LineData);

    return NextResponse.json(res.circleData);
}
