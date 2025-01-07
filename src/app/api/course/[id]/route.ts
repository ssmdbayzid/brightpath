import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";
import {NextResponse} from "next/server";

const connectedDB = async()=>{
    try{
        await connectDb()
    }catch(error){
        console.error(error)
    }
}
connectedDB().catch(err=>console.log(err))

export async function GET(request: Request, { params }: { params: { id: string } }){
  console.log("params", params)
    const {id} = params;
  try {
        const data = await Course.findById(id);
        console.log(data)
        return NextResponse.json({message:"this from course", data})

    }catch(error){
        console.error(error)
    }
}