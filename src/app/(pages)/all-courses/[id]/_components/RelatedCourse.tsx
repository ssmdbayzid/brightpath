import styles from "./CourseFeatures.module.scss";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import React from "react";
import ActionButtons from "@/app/(pages)/categories/[tag]/ActionButtons";
import Link from "next/link";

type Course = {
    _id: string;
    thumbnail: string;
    title: string;
    students: number;
    categories: string[];
    summary: string;
    price_old: string | number;
    price_discount: string | number;
    price_new: string | number;
    [key: string]: any; // Allows additional keys
};

type RelatedCourseProps = {
    course: Course; // Correct type for course
};

export default function RelatedCourses({ course }: RelatedCourseProps) {
    return (
        <div>
            <h1 className={`Related Course ${styles.heading}`}>Related Course</h1>

            {course && (
                <div className={styles.cartContainer}>
                    <div className={styles.card}>
                        <Image
                            src={course.thumbnail}
                            className={styles.img}
                            width={400}
                            height={300}
                            alt="course-image"
                        />
                        <div className={styles.cardContent}>
                            <Link href={`/all-courses/${course._id}`}>
                                <h2>{course.title}</h2>
                            </Link>
                            <div className={styles.remarks}>
                                <div className={styles.ratingContent}>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} className={styles.ratingIcon} />
                                    ))}
                                </div>
                                <p className={styles.students}>{course.students} students</p>
                            </div>
                            <ul className={styles.tag_list}>
                                {course.categories.map((tag, index) => (
                                    <Link key={index} href={`/categories?keyword=${tag}`}>
                                        <li className={styles.carousel_tag_items}>{tag}</li>
                                    </Link>
                                ))}
                            </ul>
                            <p className={styles.summary}>
                                {course.summary.split(" ").slice(0, 10).join(" ") + "   "}
                                <Link href={`/all-courses/${course._id}`}>...Show Details</Link>
                            </p>
                            <div className={styles.priceContent}>
                                <div className={styles.prices}>
                                    <del>{course.price_old}</del>
                                    <span>{course.price_discount}</span>
                                    <h3>{course.price_new} </h3>
                                </div>
                                <span className={styles.price_earn}>Earn Tk 80</span>
                            </div>
                            <ActionButtons course={course} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
