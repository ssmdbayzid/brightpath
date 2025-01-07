import styles from './allCourses.module.scss'
import SingleCourseCard from "@/app/(pages)/all-courses/components/SingleCourseCard";
const getAllCourses = async() => {
    try {
        const data =  await fetch(`${process.env.API_URL}/api/course`)
        const coursesData = await data.json()
        return coursesData?.data
    }catch(error) {
     console.log(error)
    }
}

export default async function AllCourses(){
    const courses = await getAllCourses();
    return (
        <div className="container">
            <div className={styles.contentArea}>
                {
                    courses ? courses.map((course, index) => <SingleCourseCard key={index} course={course}/>) :  <div>
                        Loading...
                    </div>
                }
            </div>
        </div>
    )
}