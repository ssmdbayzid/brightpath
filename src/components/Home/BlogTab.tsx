'use server'
import styles from './BlogTab.module.scss'
import {BlogTabHeader} from "@/components/Home/BlogTabHeader";
const blogData = [
    {
        id: 1,
        img:"https://cdn.ghoorilearning.com/uploads/images/20220825120625-63071161313ee.png",
        title: "Get hired by a large company"
    },
    {
        id: 2,
        img:"https://cdn.ghoorilearning.com/uploads/images/20220825121747-6307140b9e75c.png",
        title: "Learn to speak English"
    },
    {
        id: 3,
        img:"https://cdn.ghoorilearning.com/uploads/images/20220825121056-6307127020246.png",
        title: "Get a promotion"
    },
    {
        id: 4,
        img:"https://cdn.ghoorilearning.com/uploads/images/20220825121118-63071286c24b7.png",
        title: "Upgrade my Skill"
    },
    {
        id: 5,
        img:"https://cdn.ghoorilearning.com/uploads/images/20220825121152-630712a85f880.png",
        title: "Learn a New Language"
    },
]
export default async function BlogTab() {
    return (
        <div className="container section">
        <div className={styles.heading}>
            <h1 className={styles.title}>Goal based courses</h1>
            <p>Over 200 affordable courses to empower your future.</p>
        </div>
        <BlogTabHeader blogData={blogData} />
        </div>
    )
}