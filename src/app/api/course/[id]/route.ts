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

export async function GET( req: NextRequest) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();
        const course = await Course.findById(id);

        return NextResponse.json({ success: true, data: course });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ success: false, error: errorMessage });
    }
}
