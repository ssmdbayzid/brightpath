'use client';
import React, {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import img from "@/assets/image/img1.png";

import { GoDotFill } from "react-icons/go";
import styles from './PopularCourseItems.module.scss'
import {addToCart} from "@/store/features/cartSlice";

import {useDispatch} from "react-redux";
import Link from "next/link";

export default function PopularCourseItems({courses}) {
    const swiperRef = useRef(null);
    const dispatch = useDispatch();
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
    return <div className={styles.carousel}>
        <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            navigation={{
                prevEl: ".previous-btn",
                nextEl: ".nexts-btn",
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
            className={styles.track}>
            {courses && courses?.data?.slice(0, 8).map((course, index) =>
                <SwiperSlide key={course?._id} className={styles.slide}>
                    <div key={index} className={styles.card}>
                        <div className={styles.cardImage}>
                            <Image src={img} width={450} height={340} className={styles.img} alt="course-image"/>
                        </div>
                        <div className={styles.cardContent}>
                            <Link href={`/all-courses/${course._id}`}><h2>{course.title}</h2></Link>
                            <p className={styles.students}>{course.students} Students</p>
                            <ul className={styles.tagList}>
                                {course.categories.map(tag=><Link href={`/all-courses?keyword=${tag}`} key={tag} className={styles.tag}>{tag}</Link>)}
                            </ul>
                            <p className={styles.summary}>{course.summary}</p>
                            <ul className={styles.lists}>
                                {course.features.map(feature => <li key={feature} className={styles.list}>
                                    <GoDotFill className={styles.icon}/> <p>{feature}</p></li>)}
                            </ul>
                            <div className={styles.priceArea}>
                                <div className={styles.priceContent}>
                                    <div className={styles.prices}>
                                        <del>{course.price_old}</del>
                                        <span>{course.price_discount}</span>
                                        <h3>{course.price_new} </h3>
                                    </div>
                                    <span className={styles.price_earn}>Earn Tk 800</span>
                                </div>
                                <div className={styles.actionbtns}>
                                    <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to
                                        card
                                    </button>
                                    <Link href={`/bundles`} className={styles.btn2}>Share & Earn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>

        <div className={styles.navigate_buttons}>
            <div className={`${styles.carouselBtn} previous-btn`}>
                <IoIosArrowBack/>
            </div>
            <div className={`${styles.carouselBtn} nexts-btn`}>
                <IoIosArrowForward/>
            </div>
        </div>
    </div>
}