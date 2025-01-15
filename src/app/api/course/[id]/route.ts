import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";
import {NextRequest, NextResponse} from "next/server";

const connectedDB = async()=>{
    try{
        await connectDb()
    }catch(error){
        console.error(error)
    }
}
connectedDB().catch(err=>console.log(err))

export async function GET(req:NextRequest, {params}: {params:{id:string}}){

    try {
        const {id} = params;
        const course = await Course.findById(id);

        return NextResponse.json({success:true, data:course});
}catch(error) {
        return NextResponse.json({message: error});
    }
}
