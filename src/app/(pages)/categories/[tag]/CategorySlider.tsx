'use client';
import styles from './Categories.module.scss';
import { courseData } from "@/assets/data";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Navigation} from "swiper/modules";
import Link from "next/link";

export default function CategoriesSlider({filtered}:{filtered:string}) {
    const swiperRef = useRef<SwiperType | null>(null);
    
    return (
        <div className={styles.categoryContainer}>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1.25}
                centeredSlides={true}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                pagination={{clickable: true}}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        centeredSlides: false
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: false
                    },
                }}
            >
                {courseData &&
                    courseData.map((course:any, index:number) => (
                        <SwiperSlide key={index} className={`${filtered === course?.category?.name && styles.active} ${styles.card}`}>
                            <Link href={`/categories/${course?.category?.name}`}>
                                <Image
                                    src={course?.category?.categoryIcon}
                                    width={300}
                                    height={300}
                                    className={styles.img}
                                    alt="category-image"
                                />
                                <div className={styles.content}>
                                    <h3>{course?.category?.name}</h3>
                                    <p>10 Courses</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

            </Swiper>

            {/* Custom Pagination */}
            <div className={styles.navigate_buttons}>
                <div className={`${styles.carouselBtn} prev-btn`}>
                    <IoIosArrowBack size={20}/>
                </div>
                <div className={`${styles.carouselBtn} next-btn`}>
                    <IoIosArrowForward size={20}/>
                </div>
            </div>
        </div>
    );
}


