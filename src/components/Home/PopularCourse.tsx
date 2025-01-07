import styles from './PopularCourse.module.scss'
import PopularCourseItems from "@/components/Home/PopularCourseItems";

    const getAllCourses = async ()=>{
        const data =  await fetch(`${process.env.API_URL}/api/course`);
        const courses = await data.json();
        return courses;
    }
export default async function PopularCourse() {
    const courses = await getAllCourses();
    return (
        <div className="container">
            <div className={styles.heading}>
                <h1>Popular Courses</h1>
                <a href="/all-course" className={styles.btn}>All Course</a>
            </div>
            <PopularCourseItems courses={courses} />
        </div>
    );
}