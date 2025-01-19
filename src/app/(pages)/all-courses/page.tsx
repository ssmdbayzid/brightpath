
import styles from './allCourses.module.scss';
import SingleCourseCard from "@/app/(pages)/all-courses/components/SingleCourseCard";
import { fetchCourses } from "@/lib/actions/Course/CourseAction";

// import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Loader from "@/components/Common/Loader";

type Params = Promise<{slug: string}>
type SearchParams = Promise<{[key: string]: string | string[] | undefined}>

export async function generateMetadata(props: {params : Params, searchParams:SearchParams}){
    {
        const params = await props.params
        const searchParams = await props.searchParams

        console.log('Params:', params); // Example usage
        console.log('SearchParams:', searchParams); // Example usage
    }
}

export default async function AllCourses(props: {params: Params; searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    const page =  searchParams.page

    const result = await fetchCourses(page, "")
    console.log("not-found", result)
    return (
            <div className="container section">
                {result.data.data && result.data.data.length > 0 ? (
                    <div>
                        <div className={styles.contentArea}>
                            {result.data.data.map((course: any) => (
                                <SingleCourseCard key={course._id} course={course} />
                            ))}
                        </div>
                        {/*{totalPages > 1 && renderPagination()}*/}
                    </div>
                ) : (
                    <div className={styles.notFound}>Data not found</div>
                )}
            </div>
    );
}
