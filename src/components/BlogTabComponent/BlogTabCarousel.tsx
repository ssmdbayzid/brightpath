import styles from './CommunicativeBlog.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules

import Image from "next/image";
import SwiperNavigateButton from "@/components/BlogTabComponent/SwiperNavigateButton";
import {FaStar} from "react-icons/fa6";
import React from "react";
import loading from "@/assets/image/loader-ghoori.svg"
import BlogCartButtonComponent from "@/components/BlogTabComponent/BlogCartButtonComponent";

export default function BlogTabCarousel ({courses}) {
    return <div>
        {!courses ? loading :
            <Swiper className={styles.swiper}>

                {courses && courses.map((item, index) => <SwiperSlide key={index}><div className={styles.card}>
                        <a href={`/courses/${item.title}`}><Image src={item.thumbnail} className={styles.thumbnail} width={400} height={300} alt="Thumbnail" /></a>
                        <div className={styles.cardContent}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.ratingCount}>
                                <div className={styles.ratingContent}>
                                    {[...Array(5)].map((_, index) => (<FaStar key={index} className={styles.ratingIcon}/>))}
                                </div>
                                <p className={styles.studentsCount}>{item.students} Students</p>
                            </div>
                            <ul className={styles.tagContent}>
                                {item?.tags.map(tag => <li className={styles.tag} key={tag}>{tag}</li>)}
                            </ul>
                            <p className={styles.summary}>{item.summary.split(" ").slice(0, 10).join(" ") + "..."}</p>
                            <div className={styles.priceContent}>
                                <div className={styles.prices}>
                                    <del>{item.price_old}</del>
                                    <span>{item.price_discount}</span>
                                    <h3>{item.price_new} </h3>
                                </div>
                                <BlogCartButtonComponent course={item}/>
                            </div>

                        </div>
                    </div>
                    </SwiperSlide>
                )}
                <SwiperNavigateButton/>
            </Swiper>
        }
    </div>
}