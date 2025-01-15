import styles from "./FilteredCourse.module.scss";
import Image from "next/image";
import {FaStar} from "react-icons/fa6";

import React from "react";
import ActionButtons from "@/app/(pages)/categories/[tag]/ActionButtons";
import Link from "next/link";

export default async function FilteredCourses({courses}) {
    return (
        <div className={styles.courseContainer}>
            {!courses ? <h3>Data not found</h3> :
                courses.map((course, index) =>
                    <div key={index} className={styles.card}>
                    <Image src={course.thumbnail} className={styles.img} width={400} height={300}
                           alt="course-image"/>
                    <div className={styles.cardContent}>
                        <Link href={`/all-courses/${course._id}`} className={styles.title}><h2>{course.title}</h2></Link>
                        <div className={styles.remarks}>
                            <div className={styles.ratingContent}>
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className={styles.ratingIcon}/>
                                ))}
                            </div>
                            <p className={styles.students}>{course.students} students</p>
                        </div>
                        <ul className={styles.tag_list}>
                            {course && course.categories.map((tag, index) =>
                                <Link key={index} href={`/categories?keyword=${tag}`}>
                                    <li className={styles.carousel_tag_items}>{tag}</li>
                                </Link>)}
                        </ul>
                        <p className={styles.summary}>
                            {course.summary.split(" ").slice(0, 10).join(" ") + "   "}
                            <Link href={`/all-courses/${course._id}`}>...Show Details</Link></p>
                        <div className={styles.priceContent}>
                            <div className={styles.prices}>
                                <del>{course.price_old}</del>
                                <span>{course.price_discount}</span>
                                <h3>{course.price_new} </h3>
                            </div>
                            <span className={styles.price_earn}>Earn Tk 80</span>
                        </div>
                        <ActionButtons course={course}/>
                    </div>
                </div>)}
        </div>
    )
}