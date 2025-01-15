import {NextRequest, NextResponse} from "next/server";
import {connectDb} from "@/lib/config";
import Course from "@/lib/model/courseModel";



const connectedDB = async()  =>{
    try {
        await connectDb()
    }catch(err){console.log(err)}
}
connectedDB().catch(err=>console.log(err))


export async function GET(req:NextRequest,){
    const searchParams = req.nextUrl.searchParams;
    const pageNumber = parseInt(searchParams.get("page") || "1", 10);
    const keyword = searchParams.get("keyword");


    const limit = 9;
    const skip = (pageNumber- 1) * limit;

    let courses;
    let totalCourses;

    if(pageNumber){
        courses = await Course.find().skip(skip).limit(limit);
        totalCourses = await Course.countDocuments();
    }if(keyword){
        const matchQuery = {categories: {$regex: keyword, $options: "i"}}
        courses = await Course.aggregate([
            {$match: matchQuery},
            {$skip: skip},
            {$limit: limit},
        ])
        totalCourses = await Course.countDocuments(matchQuery);
    }

    return NextResponse.json({
        message:"this from course",
        data: courses,
        total: totalCourses,
        page:pageNumber,
        totalPages: Math.ceil(totalCourses / limit),
    })
}

export async function POST(req){
    const body = await req.json()
    const newCourse = await Course.create(body);
    return NextResponse.json({message:"this from course post", data:newCourse})
}