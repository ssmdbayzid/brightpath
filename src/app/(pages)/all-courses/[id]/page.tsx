
import styles from './CourseDetails.module.scss';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import CourseFeatures from "@/app/(pages)/all-courses/[id]/_components/CourseFeatures";
import {getSingleCourse} from "@/lib/actions/Course/CourseAction";

interface PageProps {
    params: Promise<{ id: string }>;
}

const getRating = (rating: number) => {
    return Array(5)
        .fill(0) // Fill array with default value
        .map((_, index) => (index < rating ? <FaStar key={index} /> : '☆'));
};


const getSingleCourses = async (id) => {
    const data = await fetch(`${process.env.API_URL}/api/course/${id}`);
    console.log(data)
    const course = await data.json();
    return course.data;
}
export default async function SingleCourse({ params }: PageProps) {
    const {id} = await params;
    const course = await getSingleCourses(id);
    console.log(course);
    return (
        <div className="container">
            <div className={styles.contentArea}>
                <div className={styles.courseImage}>
                    {course  ?  <Image
                        src={course?.thumbnail}
                        className={styles.img}
                        width={400}
                        height={500}
                        alt="Course Thumbnail"
                    /> : null
                    }
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h1>{course.title}</h1>
                        <div className={styles.ratingCount}>
                            <p className={styles.rating}>
                                {getRating(course.rating)}
                                <span> ({course.rating} out of 5)</span>
                            </p>
                            <p className={styles.students}>
                                <FiUsers /> {course.students} Students
                            </p>
                        </div>
                        <p className={styles.summary}>{course.summary}</p>
                        <hr />
                        <ul>
                            {course.features?.map((feature, index) => (
                                <li key={index} className={styles.features}>
                                    বৈশিষ্ট্য {index + 1}: {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.prices}>
                            <del className={styles.oldPrice}>{course.price_old}</del>
                            <span className={styles.percent}>{course.price_discount}</span>
                            <h3 className={styles.newPrice}>{course.price_new}</h3>
                        </div>

                    </div>
                </div>
            </div>
            {course && <CourseFeatures course={course} />}
        </div>
    );
}