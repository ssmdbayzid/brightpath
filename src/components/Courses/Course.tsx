
import styles from "@/components/Home/MostPopularBundle.module.scss";
import Image from "next/image";
import img from "@/assets/image/img1.png";
import {IoStar} from "react-icons/io5";
import {PiStudent} from "react-icons/pi";
import {CartButtons} from "@/components/Courses/CartButtons";
import Link from "next/link";
import React from "react";


export default function Course({course}: any) {
    return <div  className={styles.card}>
        <div className={styles.cardImage}>
            <Image src={img} className={styles.img} alt="course-image"/>
        </div>
        <div className={styles.cardContent}>
            <Link href={`/all-courses/${course?._id}`}><h2>{course?.title}</h2></Link>
            <div className={styles.remarks}>
                <div className={styles.ratingContent}>
                    <IoStar className={styles.ratingIcon}/> <span>{course?.rating}</span>
                </div>
                <p className={styles.students}><PiStudent/> {course?.students}</p>
            </div>
            <p className={styles.summary}>{course?.summary}</p>
            <div className={styles.priceContent}>
                <h3>Price</h3>
                <div className={styles.prices}>
                    <del>{course?.price_old}</del>
                    <h3>{course?.price_new} </h3>
                </div>
            </div>
            <CartButtons course={course} />

        </div>

    </div>
}