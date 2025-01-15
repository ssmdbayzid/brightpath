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
}catch(){}
    return NextResponse.json({message: error?.message});

}

/*
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    console.log("This is from GET course");

    try {
        const { id } = params;

        // Validate the ID
        if (!id || id.trim() === "") {
            return NextResponse.json(
                { success: false, error: "Course ID is required" },
                { status: 400 }
            );
        }

        // Fetch the course
        const data = await Course.findById(id);

        // Check if course is found
        if (!data) {
            return NextResponse.json(
                { success: false, error: "Course not found" },
                { status: 404 }
            );
        }

        // Return the course data
        return NextResponse.json({
            success: true,
            message: "Course fetched successfully",
            data,
        });
    } catch (error) {
        console.error("Error fetching course:", error.message);

        // Return a 500 error response
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

 */