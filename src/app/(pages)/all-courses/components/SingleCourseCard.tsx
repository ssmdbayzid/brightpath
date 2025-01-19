import React from "react";
import styles from '../allCourses.module.scss'

import Image from "next/image";
import Link from "next/link";
import {CartButtons} from "@/components/Courses/CartButtons";


export default function SingleCourseCard({ course }: any) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <Image
                    src={course.thumbnail}
                    width={200}
                    height={100}
                    className={styles.img}
                    alt="course-image"
                />
            </div>
            <div className={styles.cardContent}>
                <Link href={`/all-courses/${course._id}`}>
                    <h2>{course.title}</h2>
                </Link>
                <div className={styles.priceContent}>
                    <div className={styles.prices}>
                        <del>{course.price_old}</del>
                        <span>{course.price_discount}</span>
                        <h3>{course.price_new}</h3>
                    </div>
                    <p className={styles.price_earn}>Earn Taka 100</p>
                </div>
                <CartButtons course={course} />
            </div>
        </div>
    );
}
