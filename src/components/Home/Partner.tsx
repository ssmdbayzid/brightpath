'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import styles from "@/components/Courses/NewlyAddedCourseComponent.module.scss";

const partners = [
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/bbc-629df0d763cf8.svg",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/business-insider-629df0ec9440b.svg",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/dhaka-tribune-629df0ed4e707.svg",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/prothom-alo-trust-62f0a8cb9464c.webp",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/dhaka-tribune-629df0ed4e707.svg",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/dhaka-tribune-629df0ed4e707.svg",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/prothom-alo-trust-62f0a8cb9464c.webp",
        name: "Bangla Tutor",
    },
    {
        icon: "https://cdn.ghoorilearning.com/uploads/cms/dhaka-tribune-629df0ed4e707.svg",
        name: "Bangla Tutor",
    },
]
export default function Partner(){
    return (
        <div className="container section">
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                className={styles.track}
            >
                {partners && partners.map((partner:any, index:number)=>
                <SwiperSlide key={index}>
                    <div>
                        <Image src={partner.icon} alt={partner.name} width={120} height={70}/>
                    </div>
                </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}