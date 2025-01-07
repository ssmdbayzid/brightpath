
import styles from './AllCategory.module.scss'
import {courseData} from "@/assets/data";
import Image from "next/image";

export default function AllCategory() {
    return (
        <div className="">
        <div className="container">
            <div className={styles.heading}>
                <div>
                    <h1>Explore over 200+ courses</h1>
                    <p>Over 200 affordable courses to empower your future.</p>
                </div>
                <a href="/all-course" className={styles.btn}>View All categories</a>
            </div>
            <ul className={styles.categoryContainer}>
            {courseData && courseData.map((course, index)=>
                <li key={index} className={styles.card}><a href={`/categories/${course?.category?.name}`}>
                    <Image src={course?.category?.categoryIcon} width={300} height={300} className={styles.img} alt="category-image" />
                    <div className={styles.content}>
                        <h3>{course?.category?.name}</h3>
                        <p>10 Courses</p>
                    </div>
                </a>
                </li>
            )}
            </ul>
        </div>
        </div>
    );
}