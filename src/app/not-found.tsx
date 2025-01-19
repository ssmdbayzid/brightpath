import Link from 'next/link'
import styles from '@/app/page.module.css'
import {fetchCourses} from "@/lib/actions/Course/CourseAction";
import NotFoundPagination from "@/components/Common/NotFoundPagination";

type Params = Promise<{slug: string}>
type SearchParams = Promise<{[key: string]: string | string[] | undefined}>

export async function generateMetadata(props: {params : Params, searchParams:SearchParams }){
    {
        const params = await props.params
        const searchParams = await props.searchParams

        console.log('Params:', params); // Example usage
        console.log('SearchParams:', searchParams); // Example usage
    }
}

export default async function NotFound(props: {
    params: Params
    searchParams: SearchParams
}) {
    const searchParams = await props.searchParams
    const page = searchParams.page

    const result = await fetchCourses(page, "")
    console.log("not-found", result)
    return (
        <div>
        <div className={styles.notFoundArea}>
            <h2 className={styles.notFoundTitle}>Not Found</h2>
            <Link href="/" className={styles.returnButton}>Return Home</Link>
        </div>
        <NotFoundPagination currentPage={result.data.page} totalPage={result.data.totalPages} />
        </div>
    )
}