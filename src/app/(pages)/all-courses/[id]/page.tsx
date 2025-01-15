
import styles from './CourseDetails.module.scss';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import CourseFeatures from "@/app/(pages)/all-courses/[id]/_components/CourseFeatures";
import {getCourse} from "@/lib/actions/Course/CourseAction";
import CourseDetailsActionButtons from './_components/CourseDetailsActionButtons'
import { LuClock3 } from "react-icons/lu";
import Paragraph from "@/app/(pages)/all-courses/[id]/_components/Paragraph";
import CustomerFeedback from "@/components/Home/CustomerFeedback";
import Teacher from "@/app/(pages)/all-courses/[id]/_components/Teacher";
import RelatedCourses from "@/app/(pages)/all-courses/[id]/_components/RelatedCourse";
import ClassRating from "@/app/(pages)/all-courses/[id]/_components/ClassRating";
interface PageProps {
    params: Promise<{ id: string }>;
}

const getRating = (rating: number) => {
    return Array(5)
        .fill(0) // Fill array with default value
        .map((_, index) => (index < rating ? <FaStar key={index}  className={styles.ratingIcon}/> : '☆'));
};

export default async function SingleCourse({ params }: PageProps) {

    const {id} = await params;
    const result = await getCourse(id);
    const course = result?.data;
    console.log(course);
    return (
        <div className="container section">
            {course && <div className={styles.contentArea}>
                <div className={styles.courseImage}>
                    {course ? <Image
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
                            </p>
                            <p className={styles.students}>
                                {course.students} Students <LuClock3/> {course.duration}
                            </p>
                        </div>
                        <ul className={styles.categories}>
                            {course?.categories &&
                                course.categories.map((category) =>
                                    <li key={category} className={styles.categoty}>{category}</li>
                                )
                            }
                        </ul>
                        <Paragraph course={course}/>
                        <hr/>
                        <div className={styles.prices}>
                            <del className={styles.oldPrice}>{course.price_old}</del>
                            <span className={styles.percent}>{course.price_discount}</span>
                            <h3 className={styles.newPrice}>{course.price_new}</h3>
                        </div>
                        <CourseDetailsActionButtons course={course}/>
                    </div>
                </div>
            </div>}
            {course && <CourseFeatures course={course} />}
            <Teacher />
            <ClassRating />
            <CustomerFeedback />
            <RelatedCourses course={course} />
        </div>
    );
}