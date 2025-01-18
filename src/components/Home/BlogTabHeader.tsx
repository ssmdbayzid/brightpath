'use client'
import styles from './BlogTabHeader.module.scss'
import Image from "next/image";
import {useState} from "react";

import {
    getPromotionData,
    getUpgradeData,
    informativeData,
    learningEnglistData,
    learnNewLanguageData
} from "@/assets/data";
import BlogTabCarousel from "@/components/BlogTabComponent/BlogTabCarousel";

export  function BlogTabHeader({blogData}:any) {
    const [selectedTab, setSelectedTab] = useState("Get hired by a large company")


    return <div>
        <div className={styles.header}>
        <div className={styles.goalNav}>
            {blogData && blogData.map((item:any, index:number) =>
            <div key={index} onClick={()=>setSelectedTab(item.title)} className={`${styles.content} ${selectedTab === item.title && styles.active}`}>
                <div className={styles.imageContainer}>
                    <Image src={item.img} height={48} width={48} alt="Tab Image"/>
                </div>
                <p className={styles.title}>{item.title}</p>
            </div>)}
        </div>
    </div>
        {selectedTab === "Get hired by a large company" && <BlogTabCarousel courses={informativeData}/> ||
            selectedTab === "Learn to speak English" && <BlogTabCarousel courses={learningEnglistData}/> ||
            selectedTab === "Get a promotion" && <BlogTabCarousel courses={getPromotionData}/> ||
            selectedTab === "Upgrade my Skill" && <BlogTabCarousel courses={getUpgradeData}/> ||
            selectedTab === "Learn a New Language" && <BlogTabCarousel courses={learnNewLanguageData}/>
        }
    </div>
}