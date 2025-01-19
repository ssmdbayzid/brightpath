'use client';

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import img from "@/assets/image/img1.png";

import { GoDotFill } from "react-icons/go";
import styles from './PopularCourseItems.module.scss';
import { addToCart } from "@/store/features/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

type Course = {
    _id: string;
    title: string;
    students: number;
    categories: string[];
    summary: string;
    features: string[];
    price_old: string | number;
    price_discount: string | number;
    price_new: string | number;
};

type PopularCourseItemsProps = {
    courses: {
        data: Course[];
    };
};

export default function PopularCourseItems({ courses }: PopularCourseItemsProps) {
    const swiperRef = useRef<any>(null); // Explicitly typing as `any` to allow Swiper instance methods
    const dispatch = useDispatch();

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.navigation) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const handleSlideChange = (swiper: any) => {
        const prevButton = document.querySelector(".previous-btn") as HTMLElement | null;
        const nextButton = document.querySelector(".nexts-btn") as HTMLElement | null;

        if (prevButton && nextButton) {
            prevButton.style.visibility = swiper.isBeginning ? "hidden" : "visible";
            nextButton.style.visibility = swiper.isEnd ? "hidden" : "visible";
        }
    };

    return (
        <div className={styles.carousel}>
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
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className={styles.track}
            >
                {courses?.data?.slice(0, 8).map((course:any, index:number, ) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image
                                    src={img}
                                    width={450}
                                    height={340}
                                    className={styles.img}
                                    alt="course-image"
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <Link href={`/all-courses/${course._id}`}>
                                    <h2>{course.title}</h2>
                                </Link>
                                <p className={styles.students}>{course.students} Students</p>
                                <ul className={styles.tagList}>
                                    {course.categories.map((tag:any) => (
                                        <Link
                                            href={`/all-courses?keyword=${tag}`}
                                            key={tag}
                                            className={styles.tag}
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </ul>
                                <p className={styles.summary}>{course.summary}</p>
                                <ul className={styles.lists}>
                                    {course.features.map((feature:any) => (
                                        <li key={feature} className={styles.list}>
                                            <GoDotFill className={styles.icon} /> <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.priceArea}>
                                    <div className={styles.priceContent}>
                                        <div className={styles.prices}>
                                            <del>{course.price_old}</del>
                                            <span>{course.price_discount}</span>
                                            <h3>{course.price_new}</h3>
                                        </div>
                                        <span className={styles.price_earn}>Earn Tk 800</span>
                                    </div>
                                    <div className={styles.actionbtns}>
                                        <button
                                            onClick={() => dispatch(addToCart(course))}
                                            className={styles.btn}
                                        >
                                            Add to Cart
                                        </button>
                                        <Link href={`/bundles`} className={styles.btn2}>
                                            Share & Earn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.navigate_buttons}>
                <div className={`${styles.carouselBtn} previous-btn`}>
                    <IoIosArrowBack />
                </div>
                <div className={`${styles.carouselBtn} nexts-btn`}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}
