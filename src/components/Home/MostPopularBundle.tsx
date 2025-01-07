
import styles from "./MostPopularBundle.module.scss"
import {Course} from "@/components/Courses/Course";
import Popular_Course_Carousel from "@/components/Home/Popular_Course_Carousel";

 const getAllCourses = async () => {
     const data = await fetch(`${process.env.API_URL}/api/course`);
     const courses = await data.json();
     return courses;
 }

export default async function MostPopularBundle() {
    const courses = await getAllCourses()

    console.log(courses)
    return (
        <div className="">
            <div className="container">
                <div className={styles.titleContainer}>
                    <h1>Most Popular Bundle</h1>
                    <a href="/bundles" className="btn">All</a>
                </div>
                <div>
                {courses && <Popular_Course_Carousel courses={courses} />}
                </div>
            </div>
        </div>
    );
}