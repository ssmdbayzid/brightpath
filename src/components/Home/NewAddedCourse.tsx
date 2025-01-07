import styles from './NewAddedCourse.module.scss'
import {courseData} from "@/assets/data";
import loading from '@/assets/image/loader-ghoori.svg'
import NewlyAddedCourseComponent from "@/components/Courses/NewlyAddedCourseComponent";


export default function NewAddedCourse (){
    return <div className={styles.newCourseArea}>
        <div className="container">
        <div className={styles.courseContent}>
        <div className={styles.courseHeading}>
            <div>
                <h1>Newly added courses</h1>
                <p>Over 200 affordable courses to empower your future.</p>
            </div>
            <a className={styles.btn}>
                View All
            </a>
        </div>
            {!courseData ? loading :
            <NewlyAddedCourseComponent courses={courseData}/>
            }
        </div>
        </div>
    </div>
}