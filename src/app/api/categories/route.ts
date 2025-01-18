// import dbConnect from "@/lib/dbConnect"; // Ensure you have your DB connection file
// import Course from "@/models/Course";
import {connectDb} from "@/lib/config";
import { NextResponse } from "next/server";
import Course from "@/lib/model/courseModel";




export async function GET(request: Request) {
    try {
        // Connect to the database
        await connectDb();

        // Extract query parameters
        const { searchParams } = new URL(request.url);
        const keyword = await searchParams.get("keyword");

        console.log("keyword", keyword);
        if (!keyword) {
            return NextResponse.json({success: false, message: "Keyword parameter is required" }, { status: 400 });
        }

        // Search courses by keyword
        const courses = await Course.find({
            title: { $regex: keyword, $options: "i" }, // Case-insensitive search
        });

        return NextResponse.json({
            success: true,
            data: courses,
            message: `Courses matching keyword: ${keyword}`,
        });
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ success: false, error: errorMessage });
    }
}
