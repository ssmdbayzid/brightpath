import {connectDb} from "@/lib/config";
import { NextResponse} from "next/server";
import Course from "@/lib/model/courseModel";


const connectedDB = async()=>{
    try {
        await connectDb()
    }catch(error){
        console.log(error.message);
    }
}
connectedDB().catch((error)=>console.log(error.message));

export async function GET(req:any, ){
    try {

     const params = req.nextUrl.pathname.split("/").pop();
        console.log("params", params);
     const courses = await Course.aggregate([
         {
             $match: {
                 "category.name": {$regex:params, $options:"i"}
             }
         },
     ])
        return NextResponse.json({success:true, message: "Course founded", data: courses});
    }catch(error){
        return NextResponse.json({success:false, message: error.message});
    }

}