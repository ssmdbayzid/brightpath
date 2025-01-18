'use client'
import styles from '../CourseDetails.module.scss'
import React from "react";


type ParagraphProps = {
    summary: string;
    features: string[];
};

export default function Paragraph({ summary, features }: ParagraphProps) {
    const [show, setShow] = React.useState(false);

    return (
        <div>
            {summary && (
                <p className={styles.summary}>
                    {summary}{" "}
                    {!show ? (
                        <span onClick={() => setShow(true)} className={styles.showMore}>
              Show more...
            </span>
                    ) : (
                        "এই কোর্সের বৈশিষ্ট্যগুলি হলঃ "
                    )}
                </p>
            )}
            {show && (
                <ul className={styles.list}>
                    {features.map((feature, index) => (
                        <li key={index} className={styles.features}>
                            বৈশিষ্ট্য {index + 1}: {feature}
                        </li>
                    ))}
                </ul>
            )}
            {show && (
                <span onClick={() => setShow(false)} className={styles.showMore}>
          Show less...
        </span>
            )}
        </div>
    );
}