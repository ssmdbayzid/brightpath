'use client'
import styles from '../CourseDetails.module.scss'
import React from "react";

export default function Paragraph({course}) {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <p className={styles.summary}>{course.summary} {!show ?
            <span onClick={() => setShow(!show)} className={styles.showMore}>Show more...</span> : "এই কোর্সের বৈশিষ্ট্যগুলি হলঃ "}</p>
            {show && <ul className={styles.list}>
                {course.features?.map((feature, index) => (
                    <li key={index} className={styles.features}>
                        বৈশিষ্ট্য {index + 1}: {feature}
                    </li>
                ))}
            </ul>}
            {show && <span onClick={() => setShow(!show)} className={styles.showMore}>Show less...</span>}
        </div>
    )
}