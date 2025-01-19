
import styles from './AllCategory.module.scss'
import {courseData} from "@/assets/data";
import Image from "next/image";
import Link from "next/link";

export default function AllCategory() {
    return (

        <div className="container">
            <div className={styles.heading}>
                <div>
                    <h1>Explore over 200+ courses</h1>
                    <p>Over 200 affordable courses to empower your future.</p>
                </div>
                <Link href="/all-courses" className={`btn ${styles.btn}`}>View All categories</Link>
            </div>
            <ul className={styles.categoryContainer}>
            {courseData && courseData.map((course:any, index:number)=>
                <li key={index} className={styles.card}><Link href={`/categories/${course?.category?.name}`}>
                    <Image src={course?.category?.categoryIcon} width={300} height={300} className={styles.img} alt="category-image" />
                    <div className={styles.content}>
                        <h3>{course?.category?.name}</h3>
                        <p>10 Courses</p>
                    </div>
                </Link>
                </li>
            )}
            </ul>
        </div>

    );
}