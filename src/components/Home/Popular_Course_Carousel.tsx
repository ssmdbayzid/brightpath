'use client';
import React, {useRef, useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from './PopularCourseCarousel.module.scss';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

import {CartButtons} from "@/components/Courses/CartButtons";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
export default function Popular_Course_Carousel({ courses }) {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.navigation) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const handleSlideChange = (swiper) => {
        const prevButton = document.querySelector(".prev-btn");
        const nextButton = document.querySelector(".next-btn");

        // Ensure buttons exist before accessing them
        if (prevButton && nextButton) {
            if (swiper.isBeginning) {
                prevButton.style.visibility = "hidden";
            } else {
                prevButton.style.visibility = "visible";
            }

            if (swiper.isEnd) {
                nextButton.style.visibility = "hidden";
            } else {
                nextButton.style.visibility = "visible";
            }
        }
    };

    return (
        <div className={styles.carousel}>
            {/* Custom navigation buttons */}

            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                onSlideChange={handleSlideChange}
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
                {courses && courses?.data?.slice(0, 8).map(course => (
                    <SwiperSlide key={course?._id} className={styles.slide}>
                        <div className={styles.card}>
                            <Image src={course.thumbnail} className={styles.img} width={300} height={200}
                                   alt="course-image"/>
                            <div className={styles.cardContent}>
                                <Link href={`/all-courses/${course._id}`}><h2>{course.title}</h2></Link>
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
                                        <li  className={styles.carousel_tag_items}>{tag}</li></Link>)}
                                </ul>


                                <p className={styles.summary}>
                                    {course.summary.split(" ").slice(0, 10).join(" ")+"   "}
                                    <Link href={`/all-courses/${course._id}`}>...Show Details</Link></p>
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
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.navigate_buttons}>
                <div className={`${styles.carouselBtn} prev-btn`}>
                    <IoIosArrowBack/>
                </div>
                <div className={`${styles.carouselBtn} next-btn`}>
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    );
}
