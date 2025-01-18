'use client'
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./NewlyAddedCourseComponent.module.scss";
import {FaStar} from "react-icons/fa6";
import Image from "next/image";
import {addToCart} from "@/store/features/cartSlice";
import {useDispatch} from "react-redux";
import NewlyAddedNavigateButton from "@/components/Courses/NewlyAddedNavigateButton";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function NewlyAddedCourseComponent({courses}:any) {
    const dispatch = useDispatch();

    return (
        <div>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    320: {slidesPerView: 1, spaceBetween: 10},
                    768: {slidesPerView: 2, spaceBetween: 15},
                    1024: {slidesPerView: 3, spaceBetween: 20},
                }}
                className={styles.track}
            >
                {courses &&
                    courses.map((course:any, index:number) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <div className={styles.card}>
                                <Image
                                    src={course.thumbnail}
                                    className={styles.img}
                                    width={300}
                                    height={200}
                                    alt="course-image"
                                />
                                <div className={styles.cardContent}>
                                    <Link href={`/all-courses/${course.id || ""}`}>
                                        <h2>{course.title || "Course Title"}</h2>
                                    </Link>
                                    <div className={styles.remarks}>
                                        <div className={styles.ratingContent}>
                                            {[...Array(5)].map((_:any, index:number) => (
                                                <FaStar key={index} className={styles.ratingIcon}/>
                                            ))}
                                        </div>
                                        <p className={styles.students}>
                                            {course.students || 0} students
                                        </p>
                                    </div>
                                    <ul className={styles.tag_list}>
                                        {course.categories &&
                                            course.categories.map((tag:any, index:number) => (
                                                <li key={index} className={styles.carousel_tag_items}>
                                                    {tag}
                                                </li>
                                            ))}
                                    </ul>
                                    <p className={styles.summary}>
                                        {(course.summary || "")
                                            .split(" ")
                                            .slice(0, 10)
                                            .join(" ") + " "}
                                        <Link href={`/all-courses/${course.id || ""}`}>
                                            ...Show Details
                                        </Link>
                                    </p>
                                    <div className={styles.priceContent}>
                                        <div className={styles.prices}>
                                            <del>{course.price_old || "Old Price"}</del>
                                            <span>{course.price_discount || "Discount Price"}</span>
                                            <h3>{course.price_new || "New Price"} </h3>
                                        </div>
                                        <span className={styles.price_earn}>Earn Tk 80</span>
                                    </div>
                                    <div className={styles.actionbtns}>
                                        <button
                                            onClick={() => dispatch(addToCart(course))}
                                            className={styles.btn}
                                        >
                                            Add to cart
                                        </button>
                                        <Link href="/boundles" className={styles.btn2}>
                                            Share & Earn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                <NewlyAddedNavigateButton/>
            </Swiper>
        </div>
    );
}
