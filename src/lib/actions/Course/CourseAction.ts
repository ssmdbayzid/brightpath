/*export const getSingleCourse = async (courseId: string) => {

    const data = await fetch('/api/course/'+courseId)
    const course = await data.json()
    return course;
}
*/

export const fetchCourses = async (page:any, keyword:any) => {
    try {

        const queryParams = new URLSearchParams();

        if(page){
            queryParams.append("page", page);
        }
        if(keyword){
            queryParams.append("keyword", keyword);
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/course?${queryParams.toString()}`);
        if(!response.ok){
            return {
                success: false,
                error: `Failed to fetch courses. Status: ${response.status}`,
            };
        }
        const data = await response.json();

        return {
            success: true,
            data,
        };
    }catch(error){
        return {
            success: false,
            error: `An error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
        };
    }
}
export const categoryFilter = async (category:any)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${category}`);
        if(!response.ok){
            return {success: false, error: `Failed to fetch category. Status: ${response.status}`,};
        }
        return await response.json();

    }catch (e) {
        return {success: false, error: `An error occurred: ${e}`};
    }
}

export const getCourse = async (courseId: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/course/${courseId}`);
        if(!response.ok){
            return {
                success: false,
                error: `Failed to fetch courses. Status: ${response.status}`,
            }
        }
        const course = await response.json();
        return course;
    }catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            };
        }
        return {
            success: false,
            error: "An unknown error occurred.",
        };
    }
}

export default async function getCourseCategoriWise(keyword:any){
    try {
        console.log(keyword)
        const response = await fetch(`/api/course?keyword=${encodeURIComponent(keyword)}`);
        if(!response.ok){
            return {
                error: `Failed to fetch courses. Status: ${response.status}`,
            }
        }
        const course = await response.json();
        return course;
    }catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            };
        }
        return {
            success: false,
            error: "An unknown error occurred.",
        };
    }
}