import {categoryFilter} from "@/lib/actions/Course/CourseAction";
import CategoriesSlider from "@/app/(pages)/categories/[tag]/CategorySlider";
import FilteredCourses from "@/app/(pages)/categories/[tag]/FilteredCourses";




export default async function Categories({params}: {params: Promise<{tag:string}>}) {
    const category = (await params).tag
    const result = await categoryFilter(category);
    console.log(result);
    return (
        <div className="container ">
            <CategoriesSlider  filtered={category}/>
            <FilteredCourses courses={result?.data} />
        </div>
    )
}