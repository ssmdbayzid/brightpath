'use client'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import styles from "./NewlyAddedCourseComponent.module.scss";
import {FaStar} from "react-icons/fa6";
import React from "react";
import Image from "next/image";
import {CartButtons} from "@/components/Courses/CartButtons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import {addToCart} from "@/store/features/cartSlice";
import {useDispatch} from "react-redux";
import NewlyAddedNavigateButton from "@/components/Courses/NewlyAddedNavigateButton";

export default function NewlyAddedCourseComponent({courses}){

    const dispatch = useDispatch();
    return (
        <div>
            <Swiper
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className={styles.track}
            >
            {courses && courses.map((course, index) =>
                <SwiperSlide key={index} className={styles.slide}>
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
                            {course && course.categories.map((tag, index) =>
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
                        <div className={styles.actionbtns}>
                            <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to
                                card
                            </button>
                            <a href={`/bundles`} className={styles.btn2}>Share & Earn</a>
                        </div>
                    </div>
                </div>
                </SwiperSlide>)}
                <NewlyAddedNavigateButton  />
            </Swiper>

        </div>
    )
}