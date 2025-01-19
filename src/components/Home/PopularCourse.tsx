import styles from './PopularCourse.module.scss'
import PopularCourseItems from "@/components/Home/PopularCourseItems";
import Link from "next/link";

    const getAllCourses = async ()=>{
        const data =  await fetch(`http://localhost:3000/api/course`);
        const courses  = await data.json();
        return courses;
    }
export default async function PopularCourse() {
    const courses = await getAllCourses();
    return (
        <div className="container section">
            <div className={styles.heading}>
                <h1>Most Popular Courses</h1>
                <Link href="/all-courses" className={` btn ${styles.btn}`}>All Course</Link>
            </div>
            <PopularCourseItems courses={courses} />
        </div>
    );
}