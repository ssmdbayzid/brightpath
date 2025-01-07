import {completeUnderAnHour} from "@/assets/data";
import {SwiperSlide} from "swiper/react";
import styles from "@/components/Home/PopularCourseCarousel.module.scss";
import Image from "next/image";
import {FaStar} from "react-icons/fa6";
import {CartButtons} from "@/components/Courses/CartButtons";
import React from "react";


export default function CompletedAnHour(){
    console.log("CompletedAnHour", CompletedAnHour);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Complete in under an hour.</h1>
                <a href="/all-course" className={styles.btn}>All Course</a>
            </div>
            <div className={styles.courseContainer}>
                {completeUnderAnHour && completeUnderAnHour.map((course, index) =>
                    <div key={index} className={styles.slide}>
                        <div className={styles.card}>
                            <Image src={course.thumbnail} className={styles.img} width={300} height={200}
                                   alt="course-image"/>
                            <div className={styles.cardContent}>
                                <a href={`/all-courses/${course._id}`}><h2>{course.title}</h2></a>
                                <div className={styles.remarks}>
                                    <div className={styles.ratingContent}>
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} className={styles.ratingIcon}/>
                                        ))}
                                    </div>
                                    <p className={styles.students}>{course.students} students</p>
                                </div>
                                <ul className={styles.tag_list}>
                                    {course && course?.categories.map((tag, index) =>
                                        <li key={index} className={styles.carousel_tag_items}>{tag}</li>)}
                                </ul>


                                <p className={styles.summary}>
                                    {course.summary.split(" ").slice(0, 10).join(" ") + "   "}
                                    <a href={`/all-courses/${course._id}`}>...Show Details</a></p>
                                <div className={styles.priceContent}>
                                    <div className={styles.prices}>
                                        <del>{course.price_old}</del>
                                        <span>{course.price_discount}</span>
                                        <h3>{course.price_new} </h3>
                                    </div>
                                    <span className={styles.price_earn}>Earn Tk 80</span>
                                </div>
                            </div>
                            <CartButtons course={course}/>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}