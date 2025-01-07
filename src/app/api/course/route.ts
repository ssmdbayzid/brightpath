import {NextRequest, NextResponse} from "next/server";
import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";



const connectedDB = async()  =>{
    try {
        await connectDb()
    }catch(err){console.log(err)}
}
connectedDB().catch(err=>console.log(err))


export async function GET(){
    const courses = await Course.find();
    return NextResponse.json({message:"this from course", data: courses})
}

export async function POST(req){
    const body = await req.json()
    const newCourse = await Course.create(body);
    return NextResponse.json({message:"this from course post", data:newCourse})
}